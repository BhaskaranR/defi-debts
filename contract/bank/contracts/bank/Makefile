ifndef CPPFLAGS
override CPPFLAGS = -DBITCOIN_TESTNET=true -DDEBUG
endif

all: bank.wasm

bank.wasm: bank.cpp bank.hpp ../stable.coin.hpp ../depostoken.hpp ../limitations.hpp ../utility.hpp ../limit_handlers.hpp process_exchanges.hpp

%.wasm: %.cpp
	eosio-cpp $< $(CPPFLAGS) -o $@ -I. -I.. -abigen -contract bank

install: bank.wasm
	cleos -u $(API_URL) set contract $(BANK_ACC) .

clean:
	rm -f *.abi *.wasm
