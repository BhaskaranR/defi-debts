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
#include <limit_handlers.hpp>

void check_main_switch() {

	auto data_timestamp = get_var_upd_time("btcusd", PERIODIC_SCOPE);
	int64_t data_age = (current_time_point() - data_timestamp).to_seconds();
	int64_t max_data_age = get_variable("maxdataage", SYSTEM_SCOPE);

	auto btcusd = get_btc_price();
	auto btcusd_low = get_variable("btcusd.low", PERIODIC_SCOPE) / 1000000;
	auto btcusd_high = get_variable("btcusd.high", PERIODIC_SCOPE) / 1000000;

	auto sw_onchain = (data_age <= max_data_age) && (btcusd >= btcusd_low) && (btcusd <= btcusd_high);

	auto sw_service = get_variable("sw.service", SYSTEM_SCOPE);
	auto sw_manual  = get_variable("sw.manual", SYSTEM_SCOPE);

	if(!(sw_onchain && sw_service && sw_manual))
	{
		on_switcher_check_fail();
		fail("Anti-hack system is enabled. Conversions disabled, please, try later.");
	}
}

void check_limits(name from, name to, extended_asset quantity, const string& memo){

	if(is_user_exchange(from, to, quantity, memo)){
		int64_t usd_value = get_usd_value(quantity);
		
		int64_t btc_price = get_btc_price();
		int64_t usd_volume_used = get_variable("volumeused", STAT_SCOPE) / 1000000;

		int64_t usd_order_maxlimit = get_variable("maxordersize", SYSTEM_SCOPE) / 1000000;
		int64_t abs_usage_max = get_variable("maxdayvol", SYSTEM_SCOPE) / 1000000;

		int64_t available_to_buy_dbtc = abs_usage_max - usd_volume_used;
		int64_t available_to_sell_dbtc = usd_volume_used + abs_usage_max;

		print("\navailable to sell dbtc:", available_to_sell_dbtc);
		print("\navailable to buy dbtc:", available_to_buy_dbtc);
		print("\norder:", quantity.quantity, "@", quantity.contract);
		print("\nusd quantity:", usd_value);

		if(quantity.quantity.symbol == DBTC && quantity.contract == CUSTODIAN)
			check(usd_value <= available_to_sell_dbtc, "total daily volume exceeded, try later");
		if(quantity.quantity.symbol == DUSD && quantity.contract == BANKACCOUNT)
			check(usd_value <= available_to_buy_dbtc, "total daily volume exceeded, try later");

		print("\n", quantity.quantity, "@", quantity.contract, " ", btc_price, " ", usd_value, " ", usd_order_maxlimit);
		check(usd_value <= usd_order_maxlimit, "order maximum value exceeded, check \'maxordersize\' in \'variables\' table with scope \'system\'");
	}
}

double check_bitmex_balance_ratio() {
	// returns share (of hedge assets) in format 0.*
	// if positive => exceeds maximum value
	// if negatime => below minimum value
	int64_t value_to_hedge = get_hedge_assets_value();
	int64_t btm_balance = get_usd_value(asset(get_balance(BITMEXACC, BTC), BTC));
	double maintainance_share = 1.0 * btm_balance / value_to_hedge;
	double btm_min = 1.0 * get_variable("bitmex.min", SYSTEM_SCOPE) * 1e-10;
	double btm_max = 1.0 * get_variable("bitmex.max", SYSTEM_SCOPE) * 1e-10;
	double btm_target = 1.0 * get_variable("bitmex.trg", SYSTEM_SCOPE) * 1e-10;

	if(maintainance_share < btm_min || maintainance_share > btm_max)
		return maintainance_share - btm_target;

	return 0.;
}

void check_liquidity(bool internal_trigger) {
	// checks that liquidity pool is not far from target
	// we allow the liquidity pool to be 0

	double liq_trg = get_bank_capital_value() / 2;
	double soft_value_low = liq_trg / 2;
	double soft_value_high = liq_trg * 1.5;
	double hard_value_low = 0;
	double hard_value_high = get_bank_capital_value(); //liq_trg * 2;

	double current_liq_pool = 1.0 * get_liquidity_pool_value();

	if(lt(current_liq_pool, soft_value_low)) {
		on_lack_of_liquidity();
		if(!internal_trigger && lt(current_liq_pool, hard_value_low))
			fail("there is not enough liquidity for your order, reduce or try later");
	}
	if(gt(current_liq_pool, soft_value_high)) {
		on_too_much_liquidity();
		if(!internal_trigger && gt(current_liq_pool, hard_value_high))
			fail("banktestacc1 needs to rebalance assets, reduce or try later");	
	}
}

void check_leverage(bool internal_trigger){

	double soft_margin = get_variable("bitmex.min", SYSTEM_SCOPE) * 1e-10;
	double hard_margin = get_hard_margin(soft_margin);
	int64_t hedge_assets_value = get_hedge_assets_value();
	int64_t bitmex_balance_value = get_usd_value(asset(get_balance(BITMEXACC, BTC), BTC));
	int64_t soft_value = int64_t(soft_margin * hedge_assets_value);
	int64_t hard_value = int64_t(hard_margin * hedge_assets_value);

	print("\n=======check leverage");
	print("\nsoft_margin ", soft_margin);
	print("\nhard_margin ", hard_margin);
	print("\nhedge assets value ", hedge_assets_value);
	print("\nbtm balance value ", bitmex_balance_value);
	print("\nhard value ", hard_value);
	print("\nDUSD supply ", get_supply(DUSD));
	print("\nDBTC bank balance ", get_balance(BANKACCOUNT, DBTC));
	print("\nBITMEX BTC balance ", get_balance(BITMEXACC, BTC));
	if(lt(1.0 * bitmex_balance_value, soft_value))
	{
		on_high_leverage();
		if(!internal_trigger && lt(1.0 * bitmex_balance_value, hard_value))	
			fail("at the moment minting is not available due to high demand, please, try later");
	}
}

void check_capital(bool internal_trigger){

	int64_t bank_capital = get_bank_capital_value();
	int64_t dusd_supply = get_supply(DUSD);
	double soft_margin = 1.0 * get_variable("mincapshare", SYSTEM_SCOPE) * 1e-10;
	double hard_margin = get_hard_margin(soft_margin);
	double soft_value = soft_margin * dusd_supply;
	double hard_value = hard_margin * dusd_supply;

	print("\n======= check capital");
	print("\nbank_capital ", bank_capital);
	print("\ndusd_supply ", dusd_supply);
	print("\nsoft_margin ", soft_margin);
	print("\nhard_margin ", hard_margin);
	print("\nsoft_value ",  soft_value);
	print("\nhard value ", hard_value);
	print("\ninternal_trigger ", internal_trigger);
	if(lt(1.0 * bank_capital, soft_margin))
	{
		on_lack_of_capital();
		if(!internal_trigger && lt(1.0 * bank_capital, hard_margin))
			fail("System needs to increase bank capital. Please, try later.");
	}

	if(!internal_trigger)
	{
		//fail("");
	}
}

void update_statistics_on_trade(name from, name to, extended_asset quantity, const string & memo){
	int64_t cur_volume_used = get_variable("volumeused", STAT_SCOPE);
	int64_t transaction_value = get_usd_value(quantity);
	
	if(is_dusd_mint(from, to, quantity, memo))
		set_variable("volumeused"_n, cur_volume_used - transaction_value * 1000000, STAT_SCOPE);
	if(is_dusd_redeem(from, to, quantity, memo))
		set_variable("volumeused"_n, cur_volume_used + transaction_value * 1000000, STAT_SCOPE);
}

void decay_used_volume(){
	int64_t msec_in_hour = 3600000000;
	auto last_update_time = get_var_upd_time("volumeused", STAT_SCOPE).time_since_epoch().count();
	int64_t l_hour = last_update_time / msec_in_hour;
	int64_t r_hour = current_time_point().time_since_epoch().count() / msec_in_hour;
	int64_t n_hours = r_hour - l_hour;
	if(n_hours == 0)
		return;

	int64_t max_abs_vol = get_variable("maxdayvol", SYSTEM_SCOPE);
	int64_t hourly_decay = int64_t((1.0 * max_abs_vol / 20) + 0.5); //20 is close to 24 but without 3 as a divisor

	int64_t volume_used = get_variable("volumeused", STAT_SCOPE);
	int64_t sign = volume_used > 0 ? 1 : -1;
	int64_t delta = n_hours * hourly_decay;
	int64_t updated = volume_used * sign > delta ? volume_used - delta * sign : 0;

	print("\n=========decay volumeused");
	print("\nvolume used", volume_used);
	print("\nl_h, r_h, n_h ", l_hour, " ", r_hour, " ", n_hours);
	print("\nupdated volume used ", updated);

	set_variable("volumeused"_n, updated, STAT_SCOPE);
}

void check_on_transfer(name from, name to, extended_asset quantity, const string & memo) {
	decay_used_volume();
	update_statistics_on_trade(from, to, quantity, memo);
	check_limits(from, to, quantity, memo);
}

void check_on_system_change(bool internal_trigger=false) {
	if(get_variable("settlement"_n, SYSTEM_SCOPE))
		return;
	decay_used_volume();
	check_liquidity(internal_trigger);
	check_leverage(internal_trigger);
	check_capital(internal_trigger);
}