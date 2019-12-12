/**
 *  depostoken.hpp derived from eosio.token.hpp
 *  @copyright https://github.com/EOSIO/eos/blob/master/LICENSE
 */
#pragma once

#include <eosio/asset.hpp>
#include <eosio/eosio.hpp>
#include <eosio/system.hpp>
#include <eosio/print.hpp>

#include <stable.coin.hpp>
#include <utility>

#include <string>
#include <vector>

using std::string;
using std::vector;

using namespace eosio;

struct variable {
	name       var_name;
	int64_t    value;
	time_point mtime;

	uint64_t primary_key()const { return var_name.value; }
};

struct account {
	asset	 balance;

	uint64_t primary_key()const { return balance.symbol.code().raw(); }
};

struct currency_stats {
	asset	 supply;
	asset	 max_supply;
	name	 issuer;

	uint64_t primary_key()const { return supply.symbol.code().raw(); }
};

typedef eosio::multi_index< "accounts"_n, account > accounts;
typedef eosio::multi_index< "stat"_n, currency_stats > stats;
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

class token : public contract {
public:
	using contract::contract;

	/**
	 * Standard eosio.token actions and methods
	 */
	void create( name issuer, asset maximum_supply);

	void issue( name to, asset quantity, string memo );

	void retire( asset quantity, string memo );

	void transfer( name from, name to, asset quantity, string memo );

	void open( name owner, const symbol& symbol, name ram_payer );

	void close( name owner, const symbol& symbol );

	/**
	 * Assign variable a value. If the variable doesn't exist, create it.
	 * Requires ADMINACCOUNT authentication.
	 * @param {name} scope - Scope. "periodic" for oracle data, "system" for administration.
	 * @param {name} varname - Name of variable to set.
	 * @param {uint64_t} New value for variable.
	 */
	void setvar(name scope, name varname, int64_t value);

	/**
	 * Delete variable. If the variable doesn't exist, create it.
	 * Requires ADMINACCOUNT authentication.
	 * @param {name} scope - Scope. "periodic" for oracle data, "system" for administration.
	 * @param {name} varname - Name of variable to delete.
	 */
	void delvar(name scope, name varname);

	static asset get_supply( name token_contract_account, symbol_code sym_code )
	{
		stats statstable( token_contract_account, sym_code.raw() );
		const auto& st = statstable.get( sym_code.raw() );
		return st.supply;
	}

	// static asset get_balance( name token_contract_account, name owner, symbol_code sym_code )
	// {
	// 	accounts accountstable( token_contract_account, owner.value );
	// 	const auto& ac = accountstable.get( sym_code.raw() );
	// 	return ac.balance;
	// }

protected:

	void sub_balance( name owner, asset value );
	void add_balance( name owner, asset value, name ram_payer );
	void check_transfer(name from, name to, asset quantity, string memo);

	/**
	 * arbitrary data store. scopes:
	 *   "periodic" -- for setting by oracles
	 *   "system" -- for setting by admin
	 */
	
};

/**
 * DEFINITIONS
 */

void token::check_transfer(name from, name to, asset quantity, string memo){
	check( from != to, "cannot transfer to self" );
	if(!has_auth(BANKACCOUNT) && !has_auth(CUSTODIAN))
		require_auth( from );
	check( is_account( to ), "to account does not exist");
	auto sym = quantity.symbol.code();
	stats statstable( _self, sym.raw() );
	const auto& st = statstable.get( sym.raw(), "no stats for given symbol code" );

	require_recipient( from );
	require_recipient( to );

	check( quantity.is_valid(), "invalid quantity" );
	check( quantity.amount > 0, "must transfer positive quantity" );
	check( quantity.symbol == st.supply.symbol, "symbol precision mismatch" );
	check( memo.size() <= 256, "memo has more than 256 bytes" );
}

void token::create( name issuer, asset maximum_supply )
{
	require_auth( _self );

	auto sym = maximum_supply.symbol;
	check( sym.is_valid(), "invalid symbol name" );
	check( maximum_supply.is_valid(), "invalid supply");
	check( maximum_supply.amount > 0, "max-supply must be positive");

	stats statstable( _self, sym.code().raw() );
	auto existing = statstable.find( sym.code().raw() );
	check( existing == statstable.end(), "token with symbol already exists" );

	statstable.emplace( _self, [&]( auto& s ) {
		s.supply.symbol = maximum_supply.symbol;
		s.max_supply    = maximum_supply;
		s.issuer        = issuer;
	});
}

void token::issue(name to, asset quantity, string memo)
{
	eosio::print("token issue");
	auto sym = quantity.symbol;
	check( sym.is_valid(), "invalid symbol name" );
	check( memo.size() <= 256, "memo has more than 256 bytes" );

	stats statstable( _self, sym.code().raw() );
	auto existing = statstable.find( sym.code().raw() );
	check( existing != statstable.end(), "token with symbol does not exist, create token before issue" );
	const auto& st = *existing;

	require_auth(st.issuer);

	check( quantity.is_valid(), "invalid quantity" );
	check( quantity.amount > 0, "must issue positive quantity" );

	check( quantity.symbol == st.supply.symbol, "symbol precision mismatch" );
	check( quantity.amount <= st.max_supply.amount - st.supply.amount, "quantity exceeds available supply");

	statstable.modify( st, same_payer, [&]( auto& s ) {
		s.supply += quantity;
	});

	add_balance( st.issuer, quantity, st.issuer );
	
	if( to != st.issuer ) {
		SEND_INLINE_ACTION( *this, transfer, { {st.issuer, "active"_n} }, { st.issuer, to, quantity, memo } );
	}
}

void token::retire(asset quantity, string memo)
{
	auto sym = quantity.symbol;
	check( sym.is_valid(), "invalid symbol name" );
	check( memo.size() <= 256, "memo has more than 256 bytes" );

	stats statstable( _self, sym.code().raw() );
	auto existing = statstable.find( sym.code().raw() );
	check( existing != statstable.end(), "token with symbol does not exist" );
	const auto& st = *existing;

	require_auth( st.issuer );

	check( quantity.is_valid(), "invalid quantity" );
	check( quantity.amount > 0, "must retire positive quantity" );

	check( quantity.symbol == st.supply.symbol, "symbol precision mismatch" );

	statstable.modify( st, same_payer, [&]( auto& s ) {
		s.supply -= quantity;
	});

	sub_balance( st.issuer, quantity );
}

void token::sub_balance( name owner, asset value )
{
	accounts from_acnts( _self, owner.value );

	const auto& from = from_acnts.get( value.symbol.code().raw(), "no balance object found" );

#ifdef DEBUG
	if(from.balance.amount < value.amount) {
		print("overdrawn balance: ", value, " > ", from.balance, "\n"); check(false, "");
	}

	name ram_payer = _self;
#else
	check( from.balance.amount >= value.amount, "overdrawn balance" );

	name ram_payer = owner;
#endif
	from_acnts.modify( from, ram_payer, [&]( auto& a ) {
		a.balance -= value;
	});
}

void token::add_balance( name owner, asset value, name ram_payer )
{
	accounts to_acnts( _self, owner.value );
	auto to = to_acnts.find( value.symbol.code().raw() );
	if( to == to_acnts.end() ) {
		to_acnts.emplace( ram_payer, [&]( auto& a ){
			a.balance = value;
		});
	} else {
		to_acnts.modify( to, same_payer, [&]( auto& a ) {
			a.balance += value;
		});
	}
}

void token::open( name owner, const symbol& symbol, name ram_payer )
{
	require_auth( ram_payer );

	auto sym_code_raw = symbol.code().raw();

	stats statstable( _self, sym_code_raw );
	const auto& st = statstable.get( sym_code_raw, "symbol does not exist" );
	check( st.supply.symbol == symbol, "symbol precision mismatch" );

	accounts acnts( _self, owner.value );
	auto it = acnts.find( sym_code_raw );
	if( it == acnts.end() ) {
		acnts.emplace( ram_payer, [&]( auto& a ){
			a.balance = asset{0, symbol};
		});
	}
}

void token::close( name owner, const symbol& symbol )
{
	require_auth( owner );
	accounts acnts( _self, owner.value );
	auto it = acnts.find( symbol.code().raw() );
	check( it != acnts.end(), "Balance row already deleted or never existed. Action won't have any effect." );
	check( it->balance.amount == 0, "Cannot close because the balance is not zero." );
	acnts.erase( it );
}

void token::setvar(name scope, name varname, int64_t value) {
	switch(scope) {
		case SYSTEM_SCOPE:
			require_auth(ADMINACCOUNT); break;
		case PERIODIC_SCOPE:
			require_auth(ORACLEACC); break;
		case STAT_SCOPE:
		case DBONDS_SCOPE:
			require_auth(BANKACCOUNT); break;
		default:
			fail("arbitrary scope is not allowed");
	}

	variables vars(_self, scope.value);
	auto var_itr = vars.find(varname.value);

	if(var_itr == vars.end()) {
		vars.emplace(_self, [&](auto& var) {
			var.var_name = varname;
			var.value = value;
			var.mtime = current_time_point();
		});
	} else if(varname == "btcusd.low"_n || varname == "btcusd.high"_n) {
		// if(var_itr->value == value)
		// 	return;
		int64_t data_age = (current_time_point() - var_itr->mtime).to_seconds();
		variables sys_vars(BANKACCOUNT, SYSTEM_SCOPE.value);
		int64_t min_data_age = sys_vars.get(("minlimitsage"_n).value, "minlimitsage is not defined").value / 100000000;
		check(data_age >= min_data_age, "limit change requested too early");

		double max_k = sys_vars.require_find(("maxlimitprct"_n).value, "maxlimitprct is not defined")->value * 1e-10;
		variables prev_vars(_self, "previous"_n.value);
		auto prev_itr = prev_vars.find(varname.value);
		if(prev_itr == prev_vars.end()) {
			prev_vars.emplace(_self, [&](auto& var) {
				var.var_name = varname;
				var.value = var_itr->value;
				var.mtime = var_itr->mtime;
			});
		} else {
			double k = double(std::abs(value - prev_itr->value)) / prev_itr->value;
			print("prev value: ", prev_itr->value, " new value: ", value, " k: ", k, " max_k: ", max_k);
			check(k <= max_k, "max limit change percent exceeded");

			prev_vars.modify(prev_itr, _self, [&](auto& var) {
				var.value = var_itr->value;
				var.mtime = var_itr->mtime;
			});
		}
		vars.modify(var_itr, _self, [&](auto& var) {
			var.value = value;
			var.mtime = current_time_point();
		});

	} else if(varname == "btcusd"_n) {
		auto btcusd_low = vars.require_find(("btcusd.low"_n).value, "btcusd.low variable not found")->value;
		auto btcusd_high = vars.require_find(("btcusd.high"_n).value, "btcusd.high variable not found")->value;
		check(value >= btcusd_low && value <= btcusd_high, "btcusd out of allowed range");
		vars.modify(var_itr, _self, [&](auto& var) {
			var.value = value;
			var.mtime = current_time_point();
		});
	} else if(var_itr->value != value) {
		vars.modify(var_itr, _self, [&](auto& var) {
			var.value = value;
			var.mtime = current_time_point();
		});
	}
}

void token::delvar(name scope, name varname) {
	require_auth(ADMINACCOUNT);
	variables vars(_self, scope.value);
	auto var_itr = vars.require_find(varname.value, "variable not found");
	vars.erase(var_itr);
}



