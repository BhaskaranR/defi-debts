#!/bin/bash

if [[ -z "$ENV_SH" ]] ; then
	source ./env.sh
fi

if [[ -z "$FUNCTIONS_SH" ]] ; then
	source ./functions.sh
fi

if [[ -z "$COMMON_SH" ]] ; then
	source ./common.sh
fi

title "Exchange EOS => DUSD"

must_pass "EOS => DUSD" transfer_eos $TESTACC $BANK_ACC "10.0000 EOS" "Buy DUSD"
must_fail "wrong memo" transfer_eos $TESTACC $BANK_ACC "10.0000 EOS" "Buy something"
must_fail "memo as for DBTC redemption" transfer_eos $TESTACC $BANK_ACC "10.0000 EOS" "$TESTACC DUSD"

title "Exchange DUSD => EOS"

must_pass "DUSD => EOS" transfer $TESTACC $BANK_ACC "10.00 DUSD" "Redeem for EOS"
must_fail "wrong memo" transfer $TESTACC $BANK_ACC "10.00 DUSD" "Redeem for something"

title "Failing cases"

erase $TESTACC $BANK_ACC $DEVELACC
create_dps
listdpssale "1.00000000 DPS" "10.00 DUSD"
must_pass "buy some DPS" transfer $TESTACC $BANK_ACC "10.00 DUSD" "Buy DPS"

must_fail "try redeem DPS for EOS" transfer $TESTACC $BANK_ACC "0.50000000 DPS" "Redeem for EOS"
