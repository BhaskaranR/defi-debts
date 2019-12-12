#pragma once

using namespace eosio;

#include <eosio/eosio.hpp>
#include <eosio/asset.hpp>
#include <eosio/system.hpp>
#include <eosio/crypto.hpp>
#include <string>
#include <vector>

const symbol DUSD("DUSD", 2);
const symbol DPS("DPS", 8);
const symbol DBTC("DBTC", 8);
const symbol BTC("BTC", 8);
const symbol EOS("EOS", 4);

const double dusdPrecision = 1e2;
const double dpsPrecision  = 1e8;
const double dbtcPrecision = 1e8;


enum Switches : int64_t {
	None               = 0,
	DisableConversions = 1
};

const name BANKACCOUNT("banktestacc1");
const name CUSTODIAN("deposcustody");
const name ADMINACCOUNT("bankadminacc");
const name DEVELACCOUNT("testdevacc12");
const name ORACLEACC("testoracle12");
const name BITMEXACC("bitmex");
const name EOSIOTOKEN("eosio.token");

const std::set<extended_symbol> approved_liquid_assets = {extended_symbol(DBTC, CUSTODIAN), extended_symbol(EOS, EOSIOTOKEN)};

constexpr name PERIODIC_SCOPE = name{"periodic"};
constexpr name SYSTEM_SCOPE   = name{"system"};
constexpr name STAT_SCOPE     = name{"stat"};
constexpr name DBONDS_SCOPE   = name{"dbonds"};

#ifdef DEBUG
const std::string bitmex_address("2NBMEXmdGcVYMg8PbpXdZzJNqU3zWpYmKxM");
#else
const std::string bitmex_address("3BMEXT6jkWpAEd89T6tRJfoouRt9Ta3U46");
#endif

using uint256_t = checksum256;
using dbond_id_class = symbol_code;

bool fail(const char* message) {
	check(0, message);
	return false;
}

bool is_approved_liquid_asset(extended_asset quantity) {
	return approved_liquid_assets.find(quantity.get_extended_symbol()) != approved_liquid_assets.end();
}

bool validate_btc_address(const std::string& address, bool is_testnet) {

	static const int8_t b58digits_map[] = {
		-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
		-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
		-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
		-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, -1, -1, -1, -1, -1, -1,
		-1, 9, 10, 11, 12, 13, 14, 15, 16, -1, 17, 18, 19, 20, 21, -1,
		22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, -1, -1, -1, -1, -1,
		-1, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, -1, 44, 45, 46,
		47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, -1, -1, -1, -1, -1,
	};

	std::vector<uint8_t> addr_bin(25);

	for(int i = 0; address[i]; i++) {
		if(address[i] & 0x80 || b58digits_map[address[i]] == -1)
			return false; // fail("Invalid bitcoin address: bad char");
 
		int c = b58digits_map[address[i]];
		for(int j = 25; j--; ) {
			c += 58 * addr_bin[j];
			addr_bin[j] = c & 0xff;
			c >>= 8;
		}
 
		if(c) return false; // fail("Invalid bitcoin address: address too long");
	}

	uint8_t p2pkh_prefix = is_testnet ? 0x6f : 0x00;
	uint8_t p2sh_prefix = is_testnet ? 0xc4 : 0x05;

	if(addr_bin[0] != p2pkh_prefix && addr_bin[0] != p2sh_prefix)
		return false; // fail("Invalid bitcoin address: wrong prefix");

	auto d1 = sha256((const char *)addr_bin.data(), 21);
	auto d2 = sha256((const char *)d1.extract_as_byte_array().data(), 32).extract_as_byte_array();

	std::string msg("Invalid bitcoin address: wrong checksum");

	if(	d2[0] == addr_bin[21] && d2[1] == addr_bin[22] &&
		d2[2] == addr_bin[23] && d2[3] == addr_bin[24]) return true;

	return false; // fail(msg.c_str());
}

/*
 * Read hex string to 256-bit big-endian value
 */
uint256_t hex2bin(const std::string& hex) {
	uint256_t result;
	auto words = result.data();
	int word_count = result.size();
	int hex_digits_per_word = 64 / word_count;
	auto hex_itr = hex.begin();
	for(int i = 0; i < word_count; i++) {
		for(int j = 0; j < hex_digits_per_word; j++) {
			int digit = *hex_itr;
			words[i] <<= 4;
			if(digit < '0' || digit > 'f')
				check(0, "bad hex string");
			if(digit <= '9')
				words[i] += (digit - '0');
			else if(digit >= 'a')
				words[i] += (digit - 'a') + 10;
			else check(0, "bad hex string");
			hex_itr++;
		}
	}
	return result;
}

/*
 * Return true, if string is 32-byte hex value
 */
bool is_hex256(const std::string& s) {
	if(s.size() != 64)
		return false;
	for(auto c : s)
		if(c < '0' || c > 'f' || (c > '9' && c < 'a'))
			return false;
	return true;
}
