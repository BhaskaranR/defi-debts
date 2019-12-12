#!/bin/bash

# set basic shell variables
. ./env.sh

# define functions for testing and commenting
. ./functions.sh

# define shell wrappings for some contract actions
. ./common.sh

# define variables and shell wrappings for dbond actions
. ./common_fcdb.sh


# ##################################################

# title "Clear bank tables"
# erase_bank  dbondstest11 dbondstest12 deposdevelop depostest114 testdevacc12 testoracle12 bankadminacc hodldbondacc banktestacc1 custodianacc
# # title "Clear custody tables"
# # erase_custody a1sttester12 deposcustody depostest114 banktestacc1
# title "Clear dbond tables"
# erase_dbonds $emitent $counterparty $DBONDS

# title "Create tokens"

# cleos -u $API_URL push action $BANK_ACC create "[\"$BANK_ACC\", \"1000000000.00 DUSD\"]" -p $BANK_ACC@active
# cleos -u $API_URL push action $BANK_ACC create "[\"$BANK_ACC\", \"1000000.00000000 DPS\"]" -p $BANK_ACC@active
# # cleos -u $API_URL push action $CUSTODIAN_ACC create "[\"$CUSTODIAN_ACC\", \"21000000.00000000 DBTC\"]" -p $CUSTODIAN_ACC@active
# pause
# title "List dBonds contracts"
# setdbonds hodldbondacc 0
# pause

# title "Set variables"
# setvar bitmex.max         100,0000,0000
# setvar bitmex.min                     0
# setvar bitmex.trg                     0
# setvar dev.percent         30,0000,0000
# setvar dps.fee              1,0000,0000
# setvar dpsrdmtime     1,555,947,825,548
# setvar dpssaleprice                1000
# setvar fee.mint              ,5000,0000
# setvar fee.redeem            ,5000,0000
# setvar fee.transfer                   0
# setvar liqpool.max         20,0000,0000
# setvar liqpool.min                    0
# setvar maxdataage    10,000,000,000,000
# setvar maxdayvol  100,000,000,0000,0000
# setvar maxhedgerror        20,0000,0000
# setvar maxlimitprct       100,0000,0000
# setvar maxordersize   100,000,0000,0000
# setvar maxsupplerr                    0
# setvar mincapshare         10,0000,0000
# setvar minlimitsage        30,0000,0000
# setvar sw.manual                      1
# setvar sw.service                     1
# setvar settlement                     1
# setvar btcusd         14000,0000,0000
# setstat volumeused                    0
# setperiodic btc.bitmex                0
# setperiodic btcusd.low   5000,0000,0000
# setperiodic btcusd.high 15000,0000,0000

# title "now, do start oracle"
# read -p "hit ENTER to continue..."

# title "Clear EOS bank balance"
# eos_balance=`get_balance eosio.token $BANK_ACC EOS`
# transfer_eos $BANK_ACC $TEST_ACC "$eos_balance EOS" "refund"
# pause

title "Create dbond"
initfcdb
pause
title "Verify dbond"
verifyfcdb
pause
title "Issue dbond"
issuefcdb
pause
title "Authorize dbond"
authdbond
# pause
# title "Sell dbond to bank"
# must_pass "Sell dbond to bank" transfer_to_sell $emitent $DBONDS "1.00 $bond_name" $bond_name
# pause

# evaluate_assets

# title "List DPS sale"
# must_pass "List DPS sale" listdpssale "5.00000000 DPS" "0.60 DUSD"
# pause

# title "Buy DPS, test getting change"
# must_pass "Buy DPS, test getting change" transfer $emitent $BANK_ACC "4.00 DUSD" "Buy DPS"
# pause

# title "Test fail when DPS are not available"
# must_fail "Test fail when DPS are not available" transfer $emitent $BANK_ACC "5.00 DUSD" "Buy DPS"
# pause

# title "Setting settlement to 0, enabling checks"
# setvar settlement 0

# evaluate_assets

# title "Mint DBTC"
# must_pass "Mint DBTC" mint_dbtc $TEST_ACC 20000
# pause

# title "Buy DUSD for DBTC"
# must_pass "Buy DUSD for DBTC" transfer_dbtc $TEST_ACC $BANK_ACC "0.00015000 DBTC" "Buy DUSD"
# pause

# evaluate_assets

# title "Redeem DUSD for DBTC"
# must_pass "Redeem DUSD for DBTC" transfer $TEST_ACC $BANK_ACC "1.00 DUSD" "Redeem for DBTC"
# pause

# title "Buy DUSD for DBTC again"
# must_pass "Buy DUSD for DBTC again" transfer_dbtc $TEST_ACC $BANK_ACC "0.00015000 DBTC" "Buy DUSD"
# pause

# title "Buy DUSD for EOS"
# must_pass "Buy DUSD for EOS" transfer_eos $TEST_ACC $BANK_ACC "0.2000 EOS" "Buy DUSD"
# pause

# evaluate_assets

# title "Redeem DUSD for EOS"
# must_pass "Redeem DUSD for EOS" transfer $TEST_ACC $BANK_ACC "0.50 DUSD" "Redeem for EOS"
# pause

# title "Buy DUSD for EOS again"
# #must_pass "Buy DUSD for EOS again" 
# transfer_eos $TEST_ACC $BANK_ACC "0.2000 EOS" "Buy DUSD"
# pause

# title "Try to buy more DUSD for EOS"
# #must_fail "Try to buy more DUSD for EOS" 
# transfer_eos $TEST_ACC $BANK_ACC "1.0000 EOS" "Buy DUSD"
# pause

# evaluate_assets

# title "Create dbond 2"
# initfcdb "$bond_spec2"
# pause
# title "Verify dbond 2"
# verifyfcdb $bond_name2
# pause
# title "Issue dbond 2"
# issuefcdb $bond_name2
# pause
# title "Authorize dbond 2"
# authdbond $bond_name2
# pause
# title "Sell dbond 2 to bank"
# transfer_to_sell $emitent $DBONDS "1.00 $bond_name2" $bond_name2
# pause

# evaluate_assets

# title "Try to buy DUSD for EOS once more"
# #must_fail "Try to buy DUSD for EOS once more" 
# transfer_eos $TEST_ACC $BANK_ACC "1.0000 EOS" "Buy DUSD"
# pause

# title "Retire dbond 1"
# #must_pass "Retire dbond 1" 
# transfer $TEST_ACC $DBONDS "10.00 DUSD" "retire $bond_name"
# pause

# evaluate_assets
