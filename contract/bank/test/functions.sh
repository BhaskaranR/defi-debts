#!/bin/bash

FUNCTIONS_SH=true

function must_pass() {
	testname="$1"
	shift 1
	"$@"
	if [[ $? = 0 ]] ; then
		echo -e "\e[32m$testname OK, expectedly passed: $@\e[0m"
	else
		echo -e "\e[31m$testname ERROR, wrongly failed: $@\e[0m"
		exit 2
	fi
}

function must_fail() {
	testname="$1"
	shift 1
	"$@"
	if [[ $? = 0 ]] ; then
		echo -e "\e[31m$testname ERROR, wrongly passed: $@\e[0m"
		exit 1
	else
		echo -e "\e[32m$testname OK, expectedly failed: $@\e[0m"
	fi
}

function title() {
	title="# $1 #"
	hashes=`echo "$title" | tr '[\040-\377]' '[#*]'`
	echo
	echo -e "\e[32m$hashes\e[0m"
	echo -e "\e[32m$title\e[0m"
	echo -e "\e[32m$hashes\e[0m"
}

function getvar() {
	var_name=$1
	scope=${2:-periodic}
	ratio=${3:-100000000}
	raw_num=`cleos -u $API_URL get table -l 100 -L $var_name -U $var_name banktestacc1 $scope variables | jq -r .rows[].value`
	raw_num=${raw_num:-0}
	echo "$raw_num / $ratio" | bc -l
}

# print balances of collateral, nomination, payoff, dbond tokens of given account
function get_balances {
	account=$1
	collateral_balance=`cleos -u $API_URL get currency balance $collateral_contract $account $collateral_symbol | cut -f 1 -d ' '`
	collateral_balance=${collateral_balance:-0}
	nomination_balance=`cleos -u $API_URL get currency balance $buy_contract $account $buy_symbol | cut -f 1 -d ' '`
	nomination_balance=${nomination_balance:-0}
	payoff_balance=`cleos -u $API_URL get currency balance $payoff_contract $account $payoff_symbol | cut -f 1 -d ' '`
	payoff_balance=${payoff_balance:-0}
	dbonds_balance=`cleos -u $API_URL get currency balance $DBONDS $account $bond_name | cut -f 1 -d ' '`
	dbonds_balance=${dbonds_balance:-0}
	echo -e "$collateral_balance $nomination_balance $payoff_balance $dbonds_balance"
}

function get_balance() {
	contract=$1
	account=$2
	token=$3
	raw_num=`cleos -u $API_URL get table -L $token -U $token $contract $account accounts | jq -r .rows[].balance | cut -d ' ' -f 1`
	echo ${raw_num:-0}
}

function get_dbond_price {
	dbname=${1:-DBONDA}
	raw_num=`cleos -u $API_URL get table -L $dbname -U $dbname $DBONDS $TESTACC fcdbond | jq -r .rows[].current_price.quantity | cut -d ' ' -f 1`
	echo ${raw_num:-0}
}

function evaluate_assets() {
	dusd_balance=`get_balance $BANK_ACC $BANK_ACC DUSD`
	dbtc_balance=`get_balance $CUSTODIAN_ACC $BANK_ACC DBTC`
	eos_balance=`get_balance eosio.token $BANK_ACC EOS`
	dbond_balance=`get_balance $DBONDS $BANK_ACC DBONDA`
	dbond2_balance=`get_balance $DBONDS $BANK_ACC DBONDB`
	btcusd=`getvar btcusd`
	eosusd=`getvar eosusd`
	dbond_price=`get_dbond_price DBONDA`
	dbond2_price=`get_dbond_price DBONDB`
	dbtc_balance_usd=`echo "$dbtc_balance * $btcusd" | bc -l`
	eos_balance_usd=`echo "$eos_balance * $eosusd" | bc -l`
	dbond_balance_usd=`echo "$dbond_balance * $dbond_price" | bc -l`
	dbond2_balance_usd=`echo "$dbond2_balance * $dbond2_price" | bc -l`
	total_assets=`echo "$dbtc_balance_usd + $eos_balance_usd + $dbond_balance_usd + $dbond2_balance_usd" | bc -l`
	liquid_assets=`echo "$dbtc_balance_usd + $eos_balance_usd" | bc -l`
	echo "total assets: $total_assets  liquid assets: $liquid_assets"
	echo "DUSD: $dusd_balance  DBTC: $dbtc_balance_usd  EOS: $eos_balance_usd  DBONDA: $dbond_balance_usd  DBONDB: $dbond2_balance_usd"
}

function sub {
	echo "$1 - $2" | bc -l
}

# read two lines of balances, substract first line's values from second one's
function diff_balances {
	read a1 a2 a3 a4
	read b1 b2 b3 b4
	echo `sub $b1 $a1` `sub $b2 $a2` `sub $b3 $a3` `sub $b4 a4`
}

declare -A balances

# save balances for given accounts to named array cells
function save_balances {
	for account in $@
	do
		balances[$account]=`get_balances $account`
	done
}

# check balances diffs for given account
function check_balances {
	account=$1
	shift
	before=`echo ${balances[$account]}`
	current=`get_balances $account`
	differ="$@"
	for i in 1 2 3 4
	do
		b=`echo "$before" | cut -f $i -d ' '`
		c=`echo "$current" | cut -f $i -d ' '`
		d=$1
		shift
		if [[ "$d" = '*' ]] ; then
			continue
		fi
		result=`echo "$c-$b - ($d)" | bc -l`
		if [[ "$result" != 0 ]] ; then
			echo -e "\e[31mcheck balances ERROR: '$before', '$current', '$differ'\e[0m"
			exit 3
		else
			echo -e "\e[32mcheck balances OK\e[0m"
		fi
	done
}

function pause {
	if [[ -n "$wait_at_each_step" ]] ; then
		read -p "hit ENTER to continue..."
		if [[ $? -gt 127 ]] ; then
			echo
		fi
	fi
}
