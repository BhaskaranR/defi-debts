#!/bin/bash

# . ./env.sh
# . ./functions.sh


dbond_maturity_time=`date -v +360d +%FT%T:000`
maturity_time=`date -v +365d +%FT%T:000`
dbond_retire_time=`date -v +375d +%FT%T:000`



fiatbond='{"ISIN":"sdf",  "issuer": "'$emitent'", "name":"sdf", "currency":"sdf", "maturity_time": "'$maturity_time'", "bond_description_webpage":"sdf"}'

bond_name=BONDB
emitent=$TESTACC
verifier=custodianacc
counterparty=banktestacc1
liquidation_agent=banktestacc1
quantity_to_issue="1.00 $bond_name"
holders_list='["'$emitent'", "'$counterparty'", "'$DBONDS'"]'

payoff_symbol='DUSD'
payoff_contract='banktestacc1'
payoff_amount="10.00"
payoff_quantity="$payoff_amount $payoff_symbol"
payoff_price='{"quantity": "'$payoff_quantity'", "contract": "'$payoff_contract'"}'

bond_spec='{"dbond_id": "'$bond_name'",
	"issuer": "'$emitent'",
	"emitent": "'$emitent'",
	"quantity_to_issue": "'$quantity_to_issue'",
	"maturity_time": "'$dbond_maturity_time'",
	"retire_time": "'$dbond_retire_time'",
	"payoff_price": '$payoff_price',
	"fungible": true,
	"additional_info": "sdfsdfsdf",
	"collateral_bond": '$fiatbond',
	"verifier": "'$verifier'",
	"counterparty": "'$counterparty'",
	"liquidation_agent": "'$liquidation_agent'",
	"escrow_contract_link": "https://docs.google.com/document/d/1riKSakwS8p5EVSUA1PL-jCvcjev1kSFfCYR0suBeFkg",
	"apr": 1000,
	"holders_list": '$holders_list'}'

bond_name2=DBONDB
quantity_to_issue2="1.00 $bond_name2"
holders_list='["'$emitent'", "'$counterparty'", "'$DBONDS'"]'

payoff_amount2="50.00"
payoff_quantity2="$payoff_amount2 $payoff_symbol"
payoff_price2='{"quantity": "'$payoff_quantity2'", "contract": "'$payoff_contract'"}'

bond_spec2='{"dbond_id": "'$bond_name2'",
	"issuer": "'$emitent'",
	"emitent": "'$emitent'",
	"quantity_to_issue": "'$quantity_to_issue2'",
	"maturity_time": "'$dbond_maturity_time'",
	"retire_time": "'$dbond_retire_time'",
	"payoff_price": '$payoff_price2',
	"fungible": true,
	"additional_info": "sdfsdfsdf",
	"collateral_bond": '$fiatbond',
	"verifier": "'$verifier'",
	"counterparty": "'$counterparty'",
	"liquidation_agent": "'$liquidation_agent'",
	"escrow_contract_link": "https://docs.google.com/document/d/1riKSakwS8p5EVSUA1PL-jCvcjev1kSFfCYR0suBeFkg",
	"apr": 1500,
	"holders_list": '$holders_list'}'

fcdb_states='CREATED = 0,
    AGREEMENT_SIGNED = 1,
    CIRCULATING = 2,
    EXPIRED_PAID_OFF = 3,
    EXPIRED_TECH_DEFAULTED = 4,
    EXPIRED_DEFAULTED = 5'

function initfcdb {
	sleep 3
	spec=${1:-$bond_spec}
	echo "$spec"
	cleos -u $API_URL push action $DBONDS initfcdb "[$spec]" -p $emitent@active
}

function erase_dbonds {
	sleep 3
	names=""
	for name in "$@"
	do
		names="$names\"$name\", "
	done
	names="${names%??}"
	names=${names:-$emitent}
	args="[[$names], \"$bond_name\"]"
	cleos -u $API_URL push action $DBONDS erase "$args" -p $DBONDS@active
	args="[[$names], \"$bond_name2\"]"
	cleos -u $API_URL push action $DBONDS erase "$args" -p $DBONDS@active
}

function verifyfcdb {
	sleep 3
	bond_id=${1:-$bond_name}
	cleos -u $API_URL push action $DBONDS verifyfcdb '["'$verifier'", "'$bond_id'"]' -p $verifier@active
}

function issuefcdb {
	sleep 3
	bond_id=${1:-$bond_name}
	cleos -u $API_URL push action $DBONDS issuefcdb '["'$emitent'", "'$bond_id'"]' -p $emitent@active
}

function confirmfcdb {
	sleep 3
	bond_id=${1:-$bond_name}
	cleos -u $API_URL push action $DBONDS confirmfcdb '["'$bond_id'"]' -p $counterparty@active
}

function get_extended_asset {
	sleep 3
	field_name=${1:-initial_price}
	json=`cleos -u $API_URL get table $DBONDS $emitent fcdbond`
	quantity=`echo "$json" | jq -r .rows[0].$field_name.quantity`
	amount=`echo "$quantity" | egrep -o '[0-9]+(.[0-9]+)?'`
	symbol_code=`echo "$quantity" | egrep -o '[A-Z]*'`
	contract=`echo "$json" | jq -r .rows[0].$field_name.contract`
	echo "$amount $symbol_code@$contract"
}

function authdbond {
	sleep 3
	bond_id=${1:-$bond_name}
	cleos -u $API_URL push action $BANK_ACC authdbond '["'$DBONDS'", "'$bond_id'"]' -p $ADMIN_ACC@active
}

function transfer_to_sell {
	sleep 2
	from="$1"
	to="$2"
	qtty="$3"
	bond_id=${4:-$bond_name}
	cleos -u $API_URL push action $DBONDS transfer '["'$from'", "'$to'", "'"$qtty"'", "sell '$bond_id' to '$counterparty'"]' -p $from@active
}
