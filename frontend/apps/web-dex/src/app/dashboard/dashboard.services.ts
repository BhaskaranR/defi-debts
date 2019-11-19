import { Injectable } from "@angular/core";
import * as Eos from 'eosjs';
import { UalService } from 'ual-ngx-material-renderer';
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { read, generateTransaction, transactionConfig } from '@utils';
import { environment } from '@dex-env';
import { DBond } from "../models/models";
const { format } = Eos.modules;

@Injectable()
export class DashboarService {

    reader:any;
    user:any;
    accountName:any;
    constructor(private ualService: UalService) {
       this.reader = Eos({httpEndpoint: `${environment.RPC_PROTOCOL}://${environment.RPC_HOST}:${environment.RPC_PORT}`, chainId:environment.CHAIN_ID});
    }

    async buyBond(buyer, dbond_id, price){
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.user || !this.accountName) {
                    this.user = this.ualService.users$.value;
                }

                const transaction = generateTransaction(this.accountName, "buy", {
                    buyer: buyer,
                    dbond_id:dbond_id,
                    price:price
                });
                
                const res = await this.user.signTransaction(transaction, transactionConfig);
                resolve(res);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    async readDbonds() {
        const users = this.ualService.users$.value;
         if (users == null || users.length <=0) {
             return;
         }
        const accountName = await users[0].getAccountName();
        return await read({
            reader: this.reader,
            table: 'sec',
            limit: 100,
            rowsOnly: true,
            key_type: 'i64',
            model: DBond,
            index_position: 2,
            index: format.encodeName(accountName, false)
        });
    }


}