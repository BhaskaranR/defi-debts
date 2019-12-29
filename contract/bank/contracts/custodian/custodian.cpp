/**
 *  bank.cpp derived from eosio.token.cpp
 *  @copyright https://github.com/EOSIO/eos/blob/master/LICENSE
 */

#include <custodian.hpp>
#include <utility.hpp>
#include <limitations.hpp>
#include <eosio/crypto.hpp>
#include <eosio/print.hpp>
#include <cctype>
#include <cmath>

using namespace eosio;

ACTION custodian::transfer( name    from,
						name    to,
						asset   quantity,
						string  memo )
{
	
	check_main_switch();

	check_transfer(from, to, quantity, memo);

	if(to == CUSTODIAN && quantity.symbol.code() == DBTC.code()) {
		asset order_quantity = quantity;
		validate_btc_address(memo, BITCOIN_TESTNET);
		redeemOrders ord(_self, quantity.symbol.code().raw());

		if(from == BANKACCOUNT) {
			// it's hedge balancing order, let's correct order_quantity considering
			// previous hedge balancing orders in state "new"
			auto status_index = ord.get_index<"status"_n>();
			int64_t orders_amount = 0;
			auto lower = status_index.lower_bound("new"_n.value);
			auto upper = status_index.upper_bound("new"_n.value);
			if(lower != status_index.end()) {
				do {
					if(lower->user == BANKACCOUNT)
						orders_amount += lower->btc_amount;
				} while(lower++ != upper);
			}
			if(orders_amount > order_quantity.amount)
				order_quantity.amount = 0;
			else
				order_quantity.amount -= orders_amount;
		}

		if(order_quantity.amount > 0)
			ord.emplace(_self, [&](auto& o) {
				o.id         = ord.available_primary_key();
				o.user       = from;
				o.status     = "new"_n;
				o.btc_amount = order_quantity.amount;
				o.btc_txid   = uint256_t();
				o.mtime      = current_time_point().time_since_epoch().count();
				o.btc_address = memo;
			});
	}

	auto payer = has_auth( to ) ? to : from;

	sub_balance( from, quantity );
	add_balance( to, quantity, payer );
}

ACTION custodian::ontransfer(name from, name to, asset quantity, const string& memo) {
	print("custodian 'ontransfer'. self: ", get_self(), " first receiver: ", get_first_receiver());

	if(to == CUSTODIAN) {
		if(quantity.symbol == DUSD || quantity.symbol == DPS) {
			fail("for redemption, send DPS and DUSD to 'thedeposbank' account");
		}
	}
}

ACTION custodian::mint(name user, symbol_code sym, int64_t satoshi_amount, const string& btc_txid) {
	check(sym.is_valid(), "invalid symbol name");
	check(sym == DBTC.code() || sym == DUSD.code() || sym == DPS.code(), "unknown token symbol");
	
	check_main_switch();

	uint256_t txid_bin = hex2bin(btc_txid);

	stats statstable(_self, DBTC.code().raw());

	auto stat_it = statstable.find(DBTC.code().raw());
	check( stat_it != statstable.end(), "token with symbol does not exist, create token before issue" );
	const auto& st = *stat_it;
	require_auth(CUSTODIAN);

	mintOrders ord(_self, sym.raw());
	auto txid_index = ord.get_index<"btctxid"_n>();
	auto itr = txid_index.find(txid_bin);

#ifdef DEBUG
	// special case for deleting mint orders: satoshi_amount == -1
	if(satoshi_amount == -1) {
		check(itr != txid_index.end(), "no record to erase!");
		ord.erase(*itr);
		return;
	}
#endif

	check(itr == txid_index.end(), "duplicate mint!");

	ord.emplace(CUSTODIAN, [&](auto& o) {
		o.id         = ord.available_primary_key();
		o.user       = user;
		o.status     = "processing"_n;
		o.btc_amount = satoshi_amount;
		o.btc_txid   = txid_bin;
		o.mtime      = current_time_point().time_since_epoch().count();
	});

	asset dbtcQuantity(satoshi_amount, DBTC);

	if(sym == DBTC.code()) {
		SEND_INLINE_ACTION(*this, issue, {{CUSTODIAN, "active"_n}}, {user, dbtcQuantity, btc_txid});
	}
	else {
		string memo = user.to_string() + " " + sym.to_string();
		SEND_INLINE_ACTION(*this, issue, {{CUSTODIAN, "active"_n}}, {BANKACCOUNT, dbtcQuantity, memo});
	}
}

ACTION custodian::redeem(symbol_code sym, uint64_t order_id, const string& btc_txid) {
	require_auth(CUSTODIAN);

	check_main_switch();
	
	redeemOrders ord(_self, sym.raw());
	auto& order = *(ord.require_find(order_id, "order not found"));

	uint256_t txid_bin = hex2bin(btc_txid);

#ifdef DEBUG
	if(txid_bin == uint256_t()) {
		// for txid == 0 there is special case: delete order
		ord.erase(order);
		return;
	}
#endif

	check(order.status == "new"_n, "redeem order is not new");

	ord.modify(order, same_payer, [&](auto& o) {
		o.status = "processing"_n;
		o.btc_txid = txid_bin;
	});

	asset dbtcQuantity(order.btc_amount, DBTC);

	SEND_INLINE_ACTION(*this, retire, {{CUSTODIAN, "active"_n}}, {dbtcQuantity, btc_txid});
}

ACTION custodian::balancehedge(int64_t amount) {
	require_auth(BANKACCOUNT);

	mintOrders ord(_self, DBTC.code().raw());
	auto status_index = ord.get_index<"status"_n>();
	int64_t orders_amount = 0;
	auto lower = status_index.lower_bound("new"_n.value);
	auto upper = status_index.upper_bound("new"_n.value);
	if(lower != status_index.end()) {
		do {
			if(lower->user == BANKACCOUNT)
				orders_amount += lower->btc_amount;
		} while(lower++ != upper);
	}

	if(amount > orders_amount) {
		ord.emplace(CUSTODIAN, [&](auto& o) {
			o.id         = ord.available_primary_key();
			o.user       = BANKACCOUNT;
			o.status     = "new"_n;
			o.btc_amount = amount - orders_amount;
			o.btc_txid   = uint256_t();
			o.mtime      = current_time_point().time_since_epoch().count();
		});
	}
}
