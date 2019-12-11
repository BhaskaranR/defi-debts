ENV_SH=true

export DBONDS=hodldbondacc
export TESTACC=testuserid11
export TEST_ACC=$TESTACC
export BUYER=depostest115
export BANK_ACC=banktestacc1
export CUSTODIAN_ACC=deposcustody
export ADMIN_ACC=bankadminacc
export ORACLE_ACC=deposoracle1
export DEVELACC=deposdevelop
export DEVEL_ACC=$DEVELACC
export API_URL="http://api.kylin.alohaeos.com"

export dps_maximum_supply="1000000.00000000 DPS"

export CPPFLAGS="-D_LIBCPP_NO_EXCEPTIONS -DDEBUG -DBITCOIN_TESTNET=true"
wait_at_each_step=true

$HOME/bin/unlock_wallet
