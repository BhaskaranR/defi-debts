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

title "DPS listing and selling"

title "trying to sell when DPS not issued"

erase $TESTACC $BANK_ACC $DEVELACC
create_dps
must_fail "buy some DPS" transfer $TESTACC $BANK_ACC "10.00 DUSD" "Buy DPS"

title "selling when DPS is enough"

must_pass "listdpssale" listdpssale "100.00000000 DPS" "100.00 DUSD"
must_pass "buy some DPS" transfer $TESTACC $BANK_ACC "10.00 DUSD" "Buy DPS"
must_pass "listdpssale again" listdpssale "101.00000000 DPS" "50.00 DUSD"
must_pass "buy some more DPS" transfer $TESTACC $BANK_ACC "20.00 DUSD" "Buy DPS"

title "selling when DPS is not enough"

erase $TESTACC $BANK_ACC $DEVELACC
create_dps
must_pass "listdpssale small amount" listdpssale "1.00000000 DPS" "10.00 DUSD"
must_pass "buy some DPS" transfer $TESTACC $BANK_ACC "100.00 DUSD" "Buy DPS"

title "redeem DPS at nominal price"
must_pass "redeem DPS" transfer $TESTACC $BANK_ACC "0.20000000 DPS" "Redeem for DUSD"
