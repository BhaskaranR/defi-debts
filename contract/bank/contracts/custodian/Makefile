ifndef CPPFLAGS
override CPPFLAGS = -DBITCOIN_TESTNET=true -DDEBUG
endif

all: custodian.wasm

custodian.wasm: custodian.cpp custodian.hpp ../stable.coin.hpp ../depostoken.hpp ../limitations.hpp

%.wasm: %.cpp
	eosio-cpp $< $(CPPFLAGS) -o $@ -I. -I.. -O3 -abigen -contract custodian

install: custodian.wasm
	cleos -u $(API_URL) set contract $(CUSTODIAN_ACC) .

clean:
	rm -f *.abi *.wasm
