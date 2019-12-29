/**
 *  custodian.hpp derived from eosio.token.hpp
 *  @copyright https://github.com/EOSIO/eos/blob/master/LICENSE
 */
#pragma once

#include <eosio/asset.hpp>
#include <eosio/eosio.hpp>
#include <eosio/system.hpp>

#include <stable.coin.hpp>
#include <depostoken.hpp>
#include <limitations.hpp>

#include <string>
#include <vector>

using std::string;
using std::vector;

using namespace eosio;

CONTRACT custodian : private token {
public:
	using token::token;

	ACTION create( name issuer, asset maximum_supply) {
		token::create(issuer, maximum_supply);
	}

	ACTION issue( name to, asset quantity, string memo ) {
		token::issue(to, quantity, memo);
	}

	ACTION retire( asset quantity, string memo ) {
		token::retire(quantity, memo);
	}

	ACTION transfer( name from, name to, asset quantity, string memo );

	ACTION open( name owner, const symbol& symbol, name ram_payer ) {
		token::open(owner, symbol, ram_payer);
	}

	ACTION close( name owner, const symbol& symbol ) {
		token::close(owner, symbol);
	}

	ACTION setvar(name scope, name varname, int64_t value) {
		token::setvar(scope, varname, value);
	}

	ACTION delvar(name scope, name varname) {
		token::delvar(scope, varname);
	}

	/*
	 * New token actions and methods
	 */
	ACTION mint(name user, symbol_code sym, int64_t satoshi_amount, const string& btc_txid);

	ACTION redeem(symbol_code sym, uint64_t order_id, const string& btc_txid);

	// initiate withdrawal from hedge account to custody. amount in satoshis
	ACTION balancehedge(int64_t amount);

	#ifdef DEBUG
	/*
	 * Erase accounts listed in 'names' for given token symbols.
	 * If accounts vector is empty, erase stats records too.
	 * Erase all orders in orders and mintOrders for each given token
	 */
	ACTION erase(const vector<name>& names, const vector<symbol_code>& tokens) {
		require_auth(_self);

		for(auto n : names) {
			accounts acnts(_self, n.value);
			for(auto itr = acnts.begin(); itr != acnts.end();) {
				itr = acnts.erase(itr);
			}
		}
		if(names.size() == 0) {
			for(auto t : tokens) {
				stats statstable(_self, t.raw());
				for(auto itr = statstable.begin(); itr != statstable.end();) {
					itr = statstable.erase(itr);
				}
			}
		}
		{
			mintOrders mo(_self, DBTC.code().raw());
			for(auto itr = mo.begin(); itr != mo.end();)
				itr = mo.erase(itr);
		}
		{
			mintOrders mo(_self, DUSD.code().raw());
			for(auto itr = mo.begin(); itr != mo.end();)
				itr = mo.erase(itr);
		}
		{
			redeemOrders ro(_self, DBTC.code().raw());
			for(auto itr = ro.begin(); itr != ro.end();)
				itr = ro.erase(itr);
		}
	}
	#endif

	/**
	 * Called by 'transfer' action notification.
	 * Used only to prevent mistake DPS or DUSD transfers to custodian
	 */
	[[eosio::on_notify("thedeposbank::transfer")]]
	void ontransfer(name from, name to, asset quantity, const string& memo);

private:

	TABLE account {
		asset	 balance;

		uint64_t primary_key()const { return balance.symbol.code().raw(); }
	};

	TABLE currency_stats {
		asset	 supply;
		asset	 max_supply;
		name	 issuer;

		uint64_t primary_key()const { return supply.symbol.code().raw(); }
	};

	typedef eosio::multi_index< "accounts"_n, account > accounts;
	typedef eosio::multi_index< "stat"_n, currency_stats > stats;

	/**
	 * arbitrary data store. scopes:
	 *   "periodic" -- for setting by oracles
	 *   "system" -- for setting by admin
	 */
	TABLE variable {
		name       var_name;
		uint64_t   value;
		time_point mtime;

		uint64_t primary_key()const { return var_name.value; }
	};
	
	typedef eosio::multi_index< "variables"_n, variable > variables;

	/**
	 * Mint orders table. Scope is constant, DBTC.
	 */
	TABLE mintOrder {
		uint64_t  id;
		name      user;
		name      status;
		int64_t   btc_amount;
		uint256_t btc_txid;
		uint64_t  mtime;

		uint64_t  primary_key()const { return id; }
		uint64_t  get_secondary_1()const { return status.value; }
		uint256_t get_secondary_2()const { return btc_txid; }
	};

	typedef eosio::multi_index<
		"mintorders"_n,
		mintOrder,
		indexed_by< "status"_n, const_mem_fun<mintOrder, uint64_t, &mintOrder::get_secondary_1> >,
		indexed_by< "btctxid"_n, const_mem_fun<mintOrder, uint256_t, &mintOrder::get_secondary_2> >
	> mintOrders;

	/**
	 * Redeem orders table. Scope is token symbol code.
	 * Shows order statuses:
	 * 1. status "new": record added by "transfer" action when "to" is issuer. btc_txid is unknown yet.
	 * 2. status "processing": record changed by "redeem" action. btc_txid filled with provided txid.
	 * 3. status "confirmed": record changed by "setstatus" action.
	 */
	TABLE redeemOrder {
		uint64_t  id;
		name      user;
		name      status;
		int64_t   btc_amount;
		uint256_t btc_txid;
		uint64_t  mtime;
		string    btc_address;

		uint64_t  primary_key()const { return id; }
		uint64_t  get_secondary_1()const { return status.value; }
		uint256_t get_secondary_2()const { return btc_txid; }
	};

	typedef eosio::multi_index<
		"redeemorders"_n,
		redeemOrder,
		indexed_by< "status"_n, const_mem_fun<redeemOrder, uint64_t, &redeemOrder::get_secondary_1> >,
		indexed_by< "btctxid"_n, const_mem_fun<redeemOrder, uint256_t, &redeemOrder::get_secondary_2> >
	> redeemOrders;
};
