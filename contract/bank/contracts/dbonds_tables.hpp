#pragma once

#include "dbond.hpp"
#include <eosio/eosio.hpp>
#include <eosio/print.hpp>
#include <string>
#include <vector>

using namespace std;
using namespace eosio;

namespace dbonds {

	uint128_t concat128(uint64_t x, uint64_t y) {
		return ((uint128_t)x << 64) + (uint128_t)y;
	}

	// scope: same as primary key (dbond id)
	struct currency_stats {
		asset          supply;
		asset          max_supply;
		name           issuer;

		uint64_t primary_key() const { return supply.symbol.code().raw(); }
	};

	// scope: user name (current dbond owner)
	struct account {
		asset balance;

		uint64_t primary_key() const { return balance.symbol.code().raw(); }
	};

	// scope: dbond.emitent
	struct fc_dbond_stats {
		fc_dbond             dbond;
		time_point           initial_time;
		extended_asset       initial_price;
		extended_asset       current_price;
		int                  fc_state;
		int                  confirmed_by_counterparty;

		uint64_t primary_key() const { return dbond.dbond_id.raw(); }
	};

	// TABLE cc_dbond_stats {
	//   dbond_id_class  dbond_id;

	//   uint64_t primary_key() const { return dbond_id.raw(); }
	// };

	// TABLE nc_dbond_stats {
	//   dbond_id_class  dbond_id;

	//   uint64_t primary_key() const { return dbond_id.raw(); }
	// };

	// scope: dbond_id
	struct fc_dbond_order_struct {
	    name           seller;
	    name           buyer;
	    extended_asset recieved_payment;
	    asset          recieved_quantity;
	    extended_asset price;

	    uint64_t primary_key() const { return seller.value; }
	    uint128_t secondary_key_1() const { return concat128(seller.value, buyer.value); }

	};

	using stats             = multi_index< "stat"_n, currency_stats >;
	using accounts          = multi_index< "accounts"_n, account >;
	using fc_dbond_index    = multi_index< "fcdbond"_n, fc_dbond_stats >;
	// using cc_dbond_index = multi_index< "ccdbond"_n, cc_dbond_stats >;
	// using nc_dbond_index = multi_index< "ncdbond"_n, nc_dbond_stats >;
	// using fc_dbond_orders   = multi_index< "fcdborders"_n, fc_dbond_order_struct >;
	using fc_dbond_orders   = multi_index<
		"fcdborders"_n,
	    fc_dbond_order_struct,
	    indexed_by< "peers"_n, const_mem_fun<fc_dbond_order_struct, uint128_t, &fc_dbond_order_struct::secondary_key_1> > >;

	extended_asset get_price(name dbonds_contract, dbond_id_class dbond_id) {
		stats statstable(dbonds_contract, dbond_id.raw());
		const auto& st = statstable.get(dbond_id.raw(), "dbond not found");
		fc_dbond_index fcdb_stat(dbonds_contract, st.issuer.value);
		if(fcdb_stat.find(dbond_id.raw()) == fcdb_stat.end()) {
			print("dbond ", dbond_id, "@", dbonds_contract, " not found in fcdb_stat table"); check(false, "bye");
		}
		const auto& fcdb_info = fcdb_stat.get(dbond_id.raw(), "FATAL ERROR: dbond not found in fc_dbond table");
		return fcdb_info.current_price;
	}

	void get_holder_dbonds(name dbonds_contract, name holder, vector<asset>& result) {
		result.clear();
		accounts acnts(dbonds_contract, holder.value);
		for(const auto& acnt : acnts) {
			if(acnt.balance.amount != 0) 
				result.push_back(acnt.balance);
		}
	}
}
