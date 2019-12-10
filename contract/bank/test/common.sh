#!/bin/bash

COMMON_SH=true

# if [[ -z "$ENV_SH" ]] ; then
# 	source ./env.sh
# fi

# if [[ -z "$FUNCTIONS_SH" ]] ; then
# 	source ./functions.sh
# fi

# parameters: <variable name> <variable value>
setvar() {
	value=${2//,}
	cleos -u $API_URL push action $BANK_ACC setvar "[\"system\", \"$1\", $value]" -p $ADMIN_ACC@active
	echo "set variable $1 with value $2"
}

# parameters: <variable name> <variable value>
setperiodic() {
	value=${2//,}
	cleos -u $API_URL push action $BANK_ACC setvar "[\"periodic\", \"$1\", $value]" -p $ORACLE_ACC@active
}

# parameters: <variable name> <variable value>
setstat() {
	value=${2//,}
	cleos -u $API_URL push action $BANK_ACC setvar "[\"stat\", \"$1\", $value]" -p $BANK_ACC@active
}


# parameters: <variable name> <variable value>
setdbonds() {
	value=${2//,}
	cleos -u $API_URL push action $BANK_ACC setvar "[\"dbonds\", \"$1\", $value]" -p $BANK_ACC@active
}

function erase_bank() {
	sleep 1
	names="["
	for name in "$@"
	do
		names="$names\"$name\", "
	done
	names="${names%??}]"
	cleos -u $API_URL push action "$BANK_ACC" erase "[$names, [\"DPS\", \"DUSD\"], false]" -p $BANK_ACC@active
	cleos -u $API_URL push action "$BANK_ACC" erase "[[], [\"DPS\", \"DUSD\"], false]" -p $BANK_ACC@active
	cleos -u $API_URL push action "$BANK_ACC" erase "[[\"system\", \"periodic\", \"dbonds\", \"stat\"], [], true]" -p $BANK_ACC@active
}

function erase_custody() {
	sleep 1
	names="["
	for name in "$@"
	do
		names="$names\"$name\", "
	done
	names="${names%??}]"
	cleos -u $API_URL push action "$CUSTODIAN_ACC" erase "[$names, [\"DBTC\"]]" -p $CUSTODIAN_ACC@active
	cleos -u $API_URL push action "$CUSTODIAN_ACC" erase "[[], [\"DBTC\"]]" -p $CUSTODIAN_ACC@active
}

function transfer {
	sleep 1
	from="$1"
	to="$2"
	qtty="$3"
	memo="$4"
	cleos -u $API_URL push action $BANK_ACC transfer "[\"$from\", \"$to\", \"$qtty\", \"$memo\"]" -p $from@active
}

function transfer_eos {
	sleep 1
	from="$1"
	to="$2"
	qtty="$3"
	memo="$4"
	cleos -u $API_URL push action eosio.token transfer "[\"$from\", \"$to\", \"$qtty\", \"$memo\"]" -p $from@active
}

function transfer_dbtc {
	sleep 1
	from="$1"
	to="$2"
	qtty="$3"
	memo="$4"
	cleos -u $API_URL push action $CUSTODIAN_ACC transfer "[\"$from\", \"$to\", \"$qtty\", \"$memo\"]" -p $from@active
}

function create_dps() {
	sleep 1
	cleos -u $API_URL push action "$BANK_ACC" create "[\"$BANK_ACC\", \"$dps_maximum_supply\"]" -p $BANK_ACC@active
}

function listdpssale() {
	sleep 1
	dps_total_supply="$1"
	dps_listed_price="$2"
	cleos -u $API_URL push action "$BANK_ACC" listdpssale "[\"$dps_total_supply\", \"$dps_listed_price\"]" -p $ADMIN_ACC@active
}

function mint_dbtc() {
	sleep 1
	user=$1
	amount=$2
	txid=f51b9c6bf41bcdb44731b98d22e6265a177eb6f58575e1bd64cf891b45ff7877
	cleos -u $API_URL push action "$CUSTODIAN_ACC" mint "[\"$user\", \"DBTC\", $amount, \"$txid\"]" -p $CUSTODIAN_ACC@active
}

