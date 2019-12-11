/**
 *  bank.cpp derived from eosio.token.cpp
 *  @copyright https://github.com/EOSIO/eos/blob/master/LICENSE
 */

#include <bank.hpp>
#include <process_exchanges.hpp>
#include <utility.hpp>

#include <eosio/crypto.hpp>
#include <eosio/print.hpp>
#include <cctype>
// #include <cmath>
#include <algorithm>


using namespace eosio;
using namespace std;
using namespace dbonds;

ACTION bank::transfer(name from, name to, asset quantity, string memo)
{
	check_transfer(from, to, quantity, memo);

	check_main_switch();

#ifdef DEBUG
		if(match_memo(memo, "debug"))
		{
			process_regular_transfer(from, to, quantity, memo);
			check_on_transfer(from, to, {quantity, BANKACCOUNT}, memo);
			SEND_INLINE_ACTION(*this, blncsppl, {{_self, "active"_n}}, {});
			return;
		}
#endif

	// if regular p2p transfer or special with no reaction needed
	if((from != BANKACCOUNT && to != BANKACCOUNT) || memo == "deny") {
		process_regular_transfer(from, to, quantity, memo);
		if(memo == "deny") {
			check_on_system_change();
		}
	}

	// if transfer from _self then do service transfer
	else if(from == BANKACCOUNT) {
		process_service_transfer(from, to, quantity, memo);
		check_on_system_change();
		return;
	}

	// if to == _self and asset is DUSD
	else if(quantity.symbol == DUSD) {
		check_on_transfer(from, to, {quantity, BANKACCOUNT}, memo);
		// if user transfers dusd to buy dps
		if(match_memo(memo,"Buy DPS"))
			process_exchange_DUSD_for_DPS(from, to, quantity, memo);
		// if transfer is to redeem dusd for dbtc/btc/eos
		else if(is_dusd_redeem(from, to, extended_asset(quantity, _self), memo)) {
			bool valid_transfer = false;
			if(is_approved_liquid_asset(extended_asset(asset(0, DBTC), CUSTODIAN))) {
				// redeem DUSD for DBTC
				if(match_memo(memo, "Redeem for DBTC")) {
					process_redeem_DUSD_for_DBTC(from, to, quantity, memo);
					valid_transfer = true;
				}
				// otherwie it is supposed, that it is BTC withdrwal via CUSTODIAN
				else if(validate_btc_address(memo, BITCOIN_TESTNET)) {
					process_redeem_DUSD_for_BTC(from, to, quantity, memo);
					valid_transfer = true;
				}

			}
			// if EOS is approved and supported
			if(is_approved_liquid_asset(extended_asset(asset(0, EOS), EOSIOTOKEN))) {
				// redeem DUSD for EOS
				if(match_memo(memo, "Redeem for EOS")) {
					process_redeem_DUSD_for_EOS(from, to, quantity, memo);
					valid_transfer = true;
				}
			}
			check(valid_transfer, "transfer not allowed 8");
		}
		// if dbond-connected transfer
		else if(is_dbond_contract(from)) {
			process_regular_transfer(from, to, quantity, memo);
			check_on_system_change();
			SEND_INLINE_ACTION(*this, blncsppl, {{_self, "active"_n}}, {});
		}
		else
			fail("transfer not allowed 3");
	}

	// if to == _self and asset is DPS
	else if(quantity.symbol == DPS) {
		// no check needed

		// redeem DPS for DUSD, DBTC or BTC
		if(match_memo(memo, "Redeem for DUSD"))
			process_redeem_DPS_for_DUSD(from, to, quantity, memo);
		//else if(match_memo(memo, "Redeem for DBTC"))
		//	process_redeem_DPS_for_DBTC(from, to, quantity, memo);
		//else if(validate_btc_address(memo, BITCOIN_TESTNET))
		//	process_redeem_DPS_for_BTC(from, to, quantity, memo);
		else
			fail("transfer not allowed 4");
	}

	else fail("transfer not allowed 5");
}

void bank::ontransfer(name from, name to, asset quantity, const string& memo) {
	name token_contract = get_first_receiver();

	// skip not relevant transfer
	if(from != _self && to != _self){
		return;
	}

	if(from == _self){
		// nothing to do, look at the bottom
	}

	// if I recieve a dbond as collateral (payment was sent earlier)
	else if(is_dbond_contract(token_contract)) {
		check_on_system_change();
	}

	else {
		// if not dbond, then only utility::approved_liquid_assets as in-coming transfers allowed
		extended_asset ex_asset = extended_asset(quantity, token_contract);
		if(!is_approved_liquid_asset(ex_asset)) {
			fail("transfer not allowed 6");
		}
		// if DUSD mint request
		if(is_dusd_mint(from, to, ex_asset, memo)) {
			check_on_transfer(from, to, ex_asset, memo);
			// parse memo
			string buyer_str, token_str;
			split_memo(memo, buyer_str, token_str);

			// if request "mint DUSD for DBTC"
			if(ex_asset.get_extended_symbol() == extended_symbol(DBTC, CUSTODIAN)){
				// if request from user via web-site with custodian involved
				if(from == CUSTODIAN) {
					process_mint_DUSD_for_DBTC(name{buyer_str}, quantity);
				}
				// otherwise on-chain request from user
				else {
					check(match_memo(buyer_str, "buy"), "memo format for token purchase: 'Buy <token name>'");
					process_mint_DUSD_for_DBTC(from, quantity);
				}
				return;
			}

			// if request "mint DUSD for EOS"
			else if(ex_asset.get_extended_symbol() == extended_symbol(EOS, EOSIOTOKEN)){
				check(match_memo(buyer_str, "buy"), "memo format for token purchase: 'Buy <token name>'");
				process_mint_DUSD_for_EOS(from, quantity);
				return;
			}
			else
				fail("transfer not allowed 7");
		}
		// if technical internal transaction (ex. rebalancing portfolio)
		else if(is_technical_transfer(token_contract, from, quantity, memo)) {
			// nothing to do, look at the bottom
		}
		else
			fail("transfer not allowed 9");

	}
	SEND_INLINE_ACTION(*this, blncsppl, {{_self, "active"_n}}, {});
}

ACTION bank::issue( name to, asset quantity, string memo ) {
	token::issue(to, quantity, memo);
	if(quantity.symbol == DUSD && memo != "supply balancing")
	{
		SEND_INLINE_ACTION(*this, blncsppl, {{_self, "active"_n}}, {});
	}
	else
		check_on_system_change(true);
}

ACTION bank::retire( asset quantity, string memo ) {
	token::retire(quantity, memo);
	if(memo != "supply balancing")
	{
		if(quantity.symbol == DUSD)
			SEND_INLINE_ACTION(*this, blncsppl, {{_self, "active"_n}}, {});
		check_on_system_change();
	}
	else
		check_on_system_change(true);
}

ACTION bank::setvar(name scope, name varname, int64_t value) {
	token::setvar(scope, varname, value);

	// balance DUSD supply:
	// issue or retire tokens to keep supply equal to current USD value of BTC reserves
	// do it only if reserve balances and BTC/USD rate variables are set and any of them is changed by this action
	if( scope == PERIODIC_SCOPE && (varname == "btcusd"_n || varname == "btc.bitmex"_n))
	{
		// to resolve cross-dependencies, disable supply balancing and checks, when any of these vars is undefined
		variables vars(_self, PERIODIC_SCOPE.value);
		if(vars.find("btcusd"_n.value) == vars.end() || vars.find("btc.bitmex"_n.value) == vars.end())
			return;
		SEND_INLINE_ACTION(*this, blncsppl, {{_self, "active"_n}}, {});
	}
	// if(scope == SYSTEM_SCOPE)
	// 	check_on_system_change(true); // change this to false
}

ACTION bank::authdbond(name dbond_contract, dbond_id_class dbond_id) {
	require_auth(ADMINACCOUNT);
	authorized_dbonds dblist(_self, _self.value);
	auto existing = dblist.find(dbond_id.raw());
	check(existing == dblist.end(), "dbond with this dbond_id is authorized already");
	dblist.emplace(_self, [&](auto& db) {
		db.dbond = dbond_id;
		db.contract = dbond_contract;
	});
	action(
		permission_level{_self, "active"_n},
		dbond_contract, "confirmfcdb"_n,
		std::make_tuple(dbond_id)
	).send();
}

ACTION bank::listdpssale(asset target_total_supply, asset price) {
	require_auth(ADMINACCOUNT);
	check(target_total_supply.symbol == DPS, "as target_supply only DPS allowed");
	check(price.symbol == DUSD, "as price only DUSD allowed");

	stats statstable(_self, DPS.code().raw());
	const auto& st = statstable.get(DPS.code().raw());

	asset dps_to_issue = target_total_supply - st.supply;
	SEND_INLINE_ACTION(*this, issue, {{_self, "active"_n}}, {BANKACCOUNT, dps_to_issue, "issue dps for further sale"});

	set_variable("dpssaleprice"_n, price.amount, SYSTEM_SCOPE);
}

void bank::on_fcdb_trade_request(dbond_id_class dbond_id, name seller, name buyer, extended_asset recieved_asset, bool is_sell) {
	authorized_dbonds dblist(_self, _self.value);
	name dbond_contract = dblist.get(dbond_id.raw(), "unauthorized dbond").contract;

	fc_dbond_orders fcdb_orders(dbond_contract, dbond_id.raw());
	auto fcdb_peers_index = fcdb_orders.get_index<"peers"_n>();
	const auto& fcdb_order = fcdb_peers_index.get(dbonds::concat128(seller.value, buyer.value), "no order for this dbond_id, seller and buyer");

	extended_asset need_to_send;
	if(is_sell){
		need_to_send = fcdb_order.recieved_payment; // initialize extended asset
		need_to_send.quantity.amount = int64_t(1.0 * recieved_asset.quantity.amount / pow(10, recieved_asset.quantity.symbol.precision()) *
		 	fcdb_order.price.quantity.amount + 0.5);

		string memo = string{"buy "} + dbond_id.to_string() + string{" from "} + seller.to_string();
		SEND_INLINE_ACTION(*this, issue, {{_self, "active"_n}}, {dbond_contract, need_to_send.quantity, memo});

	}
	else{
		need_to_send = extended_asset(fcdb_order.recieved_quantity, dbond_contract);
		
		need_to_send.quantity.amount = int64_t(1.0 * recieved_asset.quantity.amount / fcdb_order.price.quantity.amount *
			pow(10, need_to_send.quantity.symbol.precision()) + 0.5);

		accounts acc(dbond_contract, _self.value);
		auto row = acc.find(need_to_send.quantity.symbol.code().raw());
		if(row == acc.end())
			check(false, "no such dbond on balance");
		else
			need_to_send = min(need_to_send, extended_asset(row->balance, need_to_send.contract));

		string memo = string{"sell "} + dbond_id.to_string() + string{" to "} + buyer.to_string();
		action(
			permission_level{_self, "active"_n},
			dbond_contract, "transfer"_n,
			std::make_tuple(_self, dbond_contract, need_to_send.quantity, memo)
		).send();
	}
}

void bank::splitToDev(const asset& quantity, asset& toDev) {
	variables vars(BANKACCOUNT, SYSTEM_SCOPE.value);
	double devRatio = 0.0; // default development ratio = 0
	auto var_itr = vars.find(("dev.percent"_n).value);
	if(var_itr != vars.end())
		devRatio = 1e-10 * var_itr->value;

	toDev = asset(std::round(quantity.amount * devRatio), quantity.symbol);
}

ACTION bank::blncsppl() {
	// TODO: consider in-flight redeem transactions to bitmex account

	int64_t targetSupplyCents = get_bank_assets_value();

	variables sysvars(_self, SYSTEM_SCOPE.value);

	int64_t maxSupplуErrorCents = 0;
	auto itr = sysvars.find("maxsupplerr"_n.value);
	if(itr != sysvars.end())
		maxSupplуErrorCents = itr->value / 1000000;

	stats statstable(_self, DUSD.code().raw());
	auto& st = statstable.get(DUSD.code().raw());

	int64_t supplyErrorCents = targetSupplyCents - st.supply.amount;
	if(supplyErrorCents < -maxSupplуErrorCents) {
		// in order not to fail transaction, let's retire not more than we have
		// using token::get_balance(), not ::get_balance
		int64_t to_retire = min(-supplyErrorCents, get_balance(BANKACCOUNT, DUSD));
		if(to_retire == 0)
			return;

		SEND_INLINE_ACTION(*this, retire, {{_self, "active"_n}}, {{to_retire, DUSD}, "supply balancing"});
	}
	else if(supplyErrorCents > maxSupplуErrorCents) {
		SEND_INLINE_ACTION(*this, issue, {{_self, "active"_n}}, {BANKACCOUNT, {supplyErrorCents, DUSD}, "supply balancing"});
	}
}

bool bank::is_authdbond_contract(name who) {
	authorized_dbonds authdbonds(_self, _self.value);
	auto authdbonds_contracts = authdbonds.get_index<"contracts"_n>();
	auto existing = authdbonds_contracts.find(who.value);
	return existing != authdbonds_contracts.end();
}
