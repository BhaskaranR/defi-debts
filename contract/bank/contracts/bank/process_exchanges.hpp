#pragma once

#include <eosio/crypto.hpp>
#include <eosio/print.hpp>
#include <cctype>
#include <cmath>
#include <algorithm>
#include <bank.hpp>



using namespace eosio;
using namespace std;

void bank::process_regular_transfer(name from, name to, asset quantity, string memo){
	// regular transfer, get transfer fee
	uint64_t fee = std::round(1e-10 * quantity.amount * get_variable("fee.transfer", SYSTEM_SCOPE));

	#ifdef DEBUG
			auto payer = BANKACCOUNT;
	#else
			auto payer = has_auth( to ) ? to : from;
	#endif

	asset fee_tokens(fee, quantity.symbol);

	sub_balance( from, quantity + fee_tokens );
	add_balance( to, quantity, payer );
	if(fee != 0) {
		add_balance( BANKACCOUNT, fee_tokens, payer );
	}
}

void bank::process_service_transfer(name from, name to, asset quantity, string memo){
	// service transfer, no fees (like "issue" action to other account)
	auto payer = has_auth( to ) ? to : from;

	sub_balance( from, quantity );
	add_balance( to, quantity, payer );
}

void bank::process_exchange_DUSD_for_DPS(name from, name to, asset quantity, string memo){
	// exchange DUSD => DPS with price for sale

	check(quantity.symbol == DUSD, "only DUSD as payment allowed");

	asset dps_to_dev;
	asset dps_quantity_requested = dusd2dps(quantity, false);
	asset dps_quantity = dps_quantity_requested;
	dps_quantity.amount = min(dps_quantity.amount, get_balance(_self, DPS));
	// asset change = dps2dusd(dps_quantity_requested - dps_quantity, false); // this is wrong, dps2dusd substracts fee
	int64_t change_amount = get_variable("dpssaleprice", SYSTEM_SCOPE) / dpsPrecision
		* (dps_quantity_requested.amount - dps_quantity.amount);
	asset change{int64_t(change_amount), DUSD};

	check(dps_quantity.amount > 0, "there is no DPS for sale at the moment");

	splitToDev(dps_quantity, dps_to_dev);
	auto payer = from;
	
	// transfer DUSD
	sub_balance(from, quantity);
	add_balance(BANKACCOUNT, quantity, payer);
	
	// transfer DPS
	SEND_INLINE_ACTION(*this, transfer, {{BANKACCOUNT, "active"_n}}, {BANKACCOUNT, from, dps_quantity, "DPS for DUSD"});

	if(change.amount > 0)
		SEND_INLINE_ACTION(*this, transfer, {{BANKACCOUNT, "active"_n}}, {BANKACCOUNT, from, change, "change DUSD from DPS purchase"});

	// issue and transfer to dev fundround
	if(dps_to_dev.amount != 0)
		SEND_INLINE_ACTION(*this, issue, {{BANKACCOUNT, "active"_n}}, {DEVELACCOUNT, dps_to_dev, memo});
}

void bank::process_redeem_DUSD_for_DBTC(name from, name to, asset quantity, string memo) {
	auto payer = has_auth( to ) ? to : from;
	sub_balance( from, quantity );
	add_balance( to, quantity, payer );

	asset dbtcQuantity = {dusd2satoshi(quantity), DBTC};

	// exchange DUSD => DBTC
	action(
		permission_level{_self, "active"_n},
		CUSTODIAN, "transfer"_n,
		std::make_tuple(BANKACCOUNT, from, dbtcQuantity, memo)
	).send();

	SEND_INLINE_ACTION(*this, retire, {{BANKACCOUNT, "active"_n}}, {quantity, memo});
}

void bank::process_redeem_DUSD_for_BTC(name from, name to, asset quantity, string btc_address){
	auto payer = has_auth( to ) ? to : from;
	sub_balance( from, quantity );
	add_balance( to, quantity, payer );

	asset dbtcQuantity = {dusd2satoshi(quantity), DBTC};
	// exchange DUSD => BTC
	action(
		permission_level{_self, "active"_n},
		CUSTODIAN, "transfer"_n,
		std::make_tuple(BANKACCOUNT, CUSTODIAN, dbtcQuantity, btc_address)
	).send();

	SEND_INLINE_ACTION(*this, retire, {{BANKACCOUNT, "active"_n}}, {quantity, btc_address});
}

void bank::process_redeem_DPS_for_DUSD(name from, name to, asset quantity, string memo){
	// exchange DPS => DUSD at nominal price

	asset dusdQuantity = dps2dusd(quantity, true);
	
	auto payer = has_auth( to ) ? to : from;
	// transfer DPS to issuer.
	sub_balance(from, quantity);
	add_balance(BANKACCOUNT, quantity, payer);
	
	SEND_INLINE_ACTION(*this, transfer, {{BANKACCOUNT, "active"_n}}, {BANKACCOUNT, from, dusdQuantity, "DPS for DUSD sell"});
}

void bank::process_redeem_DPS_for_DBTC(name from, name to, asset quantity, string memo){
	// exchange DPS at nominal price
	asset dusdQuantity = dps2dusd(quantity, true);
	
	auto payer = has_auth( to ) ? to : from;
	// transfer DPS to issuer.
	sub_balance(from, quantity);
	add_balance(BANKACCOUNT, quantity, payer);

	asset dbtcQuantity = {dusd2satoshi(dusdQuantity), DBTC};

	// redeem for DBTC or BTC
	SEND_INLINE_ACTION(*this, retire, {{BANKACCOUNT, "active"_n}}, {dusdQuantity, memo});

	fail("not implemented");
}

void bank::process_redeem_DPS_for_BTC(name from, name to, asset quantity, string memo){
	asset dusdQuantity = dps2dusd(quantity, true);
	
	auto payer = has_auth( to ) ? to : from;
	// transfer DPS to issuer.
	sub_balance(from, quantity);
	add_balance(BANKACCOUNT, quantity, payer);

	// redeem for DBTC or BTC
	SEND_INLINE_ACTION(*this, retire, {{BANKACCOUNT, "active"_n}}, {dusdQuantity, memo});

	asset dbtcQuantity = {dusd2satoshi(dusdQuantity), DBTC};

	fail("not implemented");
}

void bank::process_mint_DPS_for_DBTC(name buyer, asset dbtc_quantity) {
	asset dusd_quantity = satoshi2dusd(dbtc_quantity.amount);
	asset dps_to_dev_fund;
	asset dps_quantity = dusd2dps(dusd_quantity, false);
	splitToDev(dps_quantity, dps_to_dev_fund);

	SEND_INLINE_ACTION(*this, issue, {{BANKACCOUNT, "active"_n}}, {BANKACCOUNT, dusd_quantity, "DUSD for DBTC"});
	SEND_INLINE_ACTION(*this, transfer, {{BANKACCOUNT, "active"_n}}, {BANKACCOUNT, DEVELACCOUNT, dps_to_dev_fund, "DPS for DBTC"});
	SEND_INLINE_ACTION(*this, transfer, {{BANKACCOUNT, "active"_n}}, {BANKACCOUNT, buyer, dps_quantity, "DPS for DBTC"});
}

void bank::process_mint_DUSD_for_DBTC(name buyer, asset dbtc_quantity) {
	asset dusd_quantity = satoshi2dusd(dbtc_quantity.amount);
	SEND_INLINE_ACTION(*this, issue, {{BANKACCOUNT, "active"_n}}, {buyer, dusd_quantity, "DUSD for DBTC"});
}

void bank::process_mint_DUSD_for_EOS(name buyer, asset eos_quantity) {
	asset dusd_quantity = eos2dusd(eos_quantity.amount);
	SEND_INLINE_ACTION(*this, issue, {{BANKACCOUNT, "active"_n}}, {buyer, dusd_quantity, "DUSD for EOS"});
}

void bank::process_redeem_DUSD_for_EOS(name from, name to, asset quantity, string memo){
	auto payer = has_auth( to ) ? to : from;
	sub_balance( from, quantity );
	add_balance( to, quantity, payer );

	asset eos_quantity = {dusd2eos(quantity), EOS};

	// exchange DUSD => EOS
	action(
		permission_level{_self, "active"_n},
		EOSIOTOKEN, "transfer"_n,
		std::make_tuple(BANKACCOUNT, from, eos_quantity, memo)
	).send();

	SEND_INLINE_ACTION(*this, retire, {{BANKACCOUNT, "active"_n}}, {quantity, memo});
}
