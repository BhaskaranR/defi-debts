#pragma once

using namespace eosio;
using namespace std;

#include <eosio/eosio.hpp>
#include <eosio/asset.hpp>
#include <eosio/system.hpp>
#include <eosio/crypto.hpp>
#include <string>
#include <vector>

#include <utility.hpp>
#include <depostoken.hpp>

void on_lack_of_capital(){
	print("\n====== handle on_lack_of_capital");
	return;
}

void on_switcher_check_fail(){
	print("\n====== handle on_switcher_check_fail");
	return;
}

void on_lack_of_liquidity(){
	return;
	print("\n====== handle on_lack_of_liquidity");
	double bitmex_target = get_variable("bitmex.trg", SYSTEM_SCOPE) * 1e-10;
	double hedge_assets_btc_value = 1e8 * get_hedge_assets_value() / get_btc_price();
	int64_t amount_in_process = bitmex_in_process_mint_order_btc_amount(BANKACCOUNT);
	int64_t bitmex_target_btc_value = int64_t(bitmex_target * hedge_assets_btc_value);
	int64_t bitmex_balance_btc_value = get_balance(BITMEXACC, BTC) - amount_in_process;
	int64_t order_amount = bitmex_balance_btc_value - bitmex_target_btc_value;
	if(order_amount > 0) {
		action(
			permission_level{BANKACCOUNT, "active"_n},
			CUSTODIAN, "balancehedge"_n,
			make_tuple(order_amount)
		).send();
	}

	return;
}

void on_high_leverage(){
	return;
	print("\n====== handle on_high_leverage");
	double bitmex_target = get_variable("bitmex.trg", SYSTEM_SCOPE) * 1e-10;
	double hedge_assets_btc_value = 1e8 * get_hedge_assets_value() / get_btc_price();
	int64_t amount_in_process = bitmex_in_process_redeem_order_btc_amount(BANKACCOUNT);
	int64_t bitmex_target_btc_value = int64_t(bitmex_target * hedge_assets_btc_value);
	int64_t bitmex_balance_btc_value = get_balance(BITMEXACC, BTC) + amount_in_process;
	int64_t order_amount = bitmex_target_btc_value - bitmex_balance_btc_value;
	if(order_amount > 0) {
		action(
			permission_level{BANKACCOUNT, "active"_n},
			BANKACCOUNT, "transfer"_n,
			make_tuple(BANKACCOUNT, CUSTODIAN, asset{order_amount, DBTC}, bitmex_address)
		).send();
	}

	return;
}

void on_too_much_liquidity() {
	return;
}
