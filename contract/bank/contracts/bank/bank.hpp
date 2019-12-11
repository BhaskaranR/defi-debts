/**
 *  bank.hpp derived from eosio.token.hpp
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

CONTRACT bank : private token {
public:
	using token::token;

	ACTION create( name issuer, asset maximum_supply) {
		token::create(issuer, maximum_supply);
	}
	ACTION issue( name to, asset quantity, string memo );

	ACTION retire( asset quantity, string memo );

	ACTION transfer( name from, name to, asset quantity, string memo );

	ACTION open( name owner, const symbol& symbol, name ram_payer ) {
		token::open(owner, symbol, ram_payer);
	}

	ACTION close( name owner, const symbol& symbol ) {
		token::close(owner, symbol);
	}

	ACTION setvar(name scope, name varname, int64_t value);

	ACTION delvar(name scope, name varname) {
		token::delvar(scope, varname);
	}

	ACTION authdbond(name dbond_contract, dbond_id_class dbond_id);

	ACTION listdpssale(asset target_total_supply, asset price);

	ACTION blncsppl();

	/*
	 * New token actions and methods
	 */

	/**
	 * Called by 'transfer' action notification of 'deposcustody' contract.
	 * Used to implement exchange DBTC => DUSD
	 * when <from> == 'deposcustody', see <memo> for account name to send DUSD to
	 * in future, when more stablecoins issued, <memo> will be '<symbol> <name>'
	 */
	// [[eosio::on_notify("*::transfer")]]
	void ontransfer(name from, name to, asset quantity, const string& memo);

	/*
	 * Called by 'listfcdbsale' action of 'dbonds' contract.
	 * Used to implement selling dbonds by holders to bank.
	 */
	// [[eosio::on_notify("*::listprivord")]]
	void on_fcdb_trade_request(dbond_id_class dbond_id, name seller, name buyer, extended_asset recieved_asset, bool is_sell);

	/*
	 * delete dbond from authorized dbonds list, after its deletion from dbonds contract tables
	 */
	[[eosio::on_notify("*::erase")]]
	void ondbonderase(vector<name> holders, dbond_id_class dbond_id) {
		name dbond_contract = get_first_receiver();
		eosio::print(dbond_contract);
		// variables dbcontracts(_self, "dbonds"_n.value);
		// if(dbcontracts.find(dbond_contract.value) != dbcontracts.end()) {
			authorized_dbonds dblist(_self, _self.value);
			auto existing = dblist.find(dbond_id.raw());
			if(existing != dblist.end()) {
				dblist.erase(existing);
			}
		// }
	}

	#ifdef DEBUG
	/*
	 * for erasing dbonds stuff
	 */
	ACTION unauthdbond(dbond_id_class dbond_id) {
		require_auth(_self);
		authorized_dbonds authdblist(_self, _self.value);
		auto existing = authdblist.find(dbond_id.raw());
		if(existing != authdblist.end())
			authdblist.erase(existing);
	}

	/*
	 * If not 'erase_variables':
	 *   Erase accounts listed in 'names' for given token symbols.
	 *   If accounts vector is empty, erase stats records too.
	 *   Erase authorized dbonds table.
	 * If 'erase_variables':
	 *   Erase variables' table scopes, listed in 'names'.
	 */
	ACTION erase(const vector<name>& names, const vector<symbol_code>& tokens, bool erase_variables) {
		require_auth(_self);

		if(erase_variables) {
			for(auto scope : names) {
				variables vars(_self, scope.value);
				for(auto itr = vars.begin(); itr != vars.end();) {
					itr = vars.erase(itr);
				}
			}
		}
		else {
			for(auto n : names) {
				accounts acnts(_self, n.value);
				for(auto t : tokens) {
					auto acc = acnts.find(t.raw());
					if(acc != acnts.end())
						acnts.erase(acc);
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
			authorized_dbonds db(_self, _self.value);
			for(auto itr = db.begin(); itr != db.end();) {
				itr = db.erase(itr);
			}
		}
	}
	#endif

	// // eosio.cdt bug workaround
	// [[eosio::on_notify("dummy1234512::transfer")]]
	// void dummy(name from, name to, asset quantity, const string& memo) {}

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

	// scope -- _self.value
	TABLE authorized_dbonds_info {
		dbond_id_class dbond;
		name contract;

		uint64_t primary_key()const { return dbond.raw(); }
		uint64_t secondary_key_1()const { return contract.value; }
	};

	typedef eosio::multi_index< "accounts"_n, account > accounts;
	typedef eosio::multi_index< "stat"_n, currency_stats > stats;
	typedef eosio::multi_index<
		"authfcdbonds"_n,
		authorized_dbonds_info,
		indexed_by< "contracts"_n, const_mem_fun<authorized_dbonds_info, uint64_t, &authorized_dbonds_info::secondary_key_1> > > authorized_dbonds;

	/**
	 * arbitrary data store. scopes:
	 *   "periodic" -- for setting by oracles
	 *   "system" -- for setting by admin
	 *   "dbonds" -- for list of contracts, managing dbonds
	 */
	TABLE variable {
		name       var_name;
		int64_t   value;
		time_point mtime;

		uint64_t primary_key()const { return var_name.value; }
	};
	
	typedef eosio::multi_index< "variables"_n, variable > variables;

	void splitToDev(const asset& quantity, asset& toDev);

	void process_regular_transfer(name from, name to, asset quantity, string memo);
	void process_service_transfer(name from, name to, asset quantity, string memo);
	void process_exchange_DUSD_for_DPS(name from, name to, asset quantity, string memo);
	void process_redeem_DUSD_for_DBTC(name from, name to, asset quantity, string memo);
	void process_redeem_DUSD_for_BTC(name from, name to, asset quantity, string memo);
	void process_redeem_DPS_for_DUSD(name from, name to, asset quantity, string memo);
	void process_redeem_DPS_for_DBTC(name from, name to, asset quantity, string memo);
	void process_redeem_DPS_for_BTC(name from, name to, asset quantity, string memo);
	void check_and_auth_with_transfer(name from, name to, asset quantity, string memo);
	void process_mint_DUSD_for_DBTC(name buyer, asset dbtc_quantity);
	void process_mint_DPS_for_DBTC(name buyer, asset dbtc_quantity);
	bool is_authdbond_contract(name who);
	void process_mint_DUSD_for_EOS(name buyer, asset eos_quantity);
	void process_redeem_DUSD_for_EOS(name from, name to, asset quantity, string memo);
};
