import { Injectable } from "@angular/core";
import * as Eos from 'eosjs';
import { UalService } from 'ual-ngx-material-renderer';
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { read, generateTransaction, transactionConfig } from '@utils';
import { environment } from '@dex-env';
import { DBond ,DBORDER} from "../models/models";
const { format } = Eos.modules;

@Injectable()
export class DashboarService {

    reader:any;
    user:any;
    accountName:any;
    constructor(private ualService: UalService) {
       this.reader = Eos({httpEndpoint: `${environment.RPC_PROTOCOL}://${environment.RPC_HOST}:${environment.RPC_PORT}`, chainId:environment.CHAIN_ID});
    }

    async buyBond(dbond_id, price){
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.user || !this.accountName) {
                    this.user = this.ualService.users$.value;
                }

                const transaction = generateTransaction(this.accountName, "transfer", {
                    from: dbond_id,
                    to:this.accountName,
                    quantity:price,
                    memo:"buy from " + dbond_id ,
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
        console.log('account name : ', accountName)
        return await read({
            reader: this.reader,
            table: 'fcdbond',
            limit: 100,
            rowsOnly: true,
            scope:accountName,
            model: DBond,
            index_position: 1,
            index: format.encodeName(accountName, false)
        });
    }


    async getOrders(){
        const users = this.ualService.users$.value;
         if (users == null || users.length <=0) {
             return;
         }
        const accountName = await users[0].getAccountName();

        return await read({
            reader: this.reader,
            table: 'fcdborders',
            limit: 100,
            rowsOnly: true,
            key_type: 'i64',
            scope:accountName,
            model: DBORDER,
            index_position: 1,
            index: format.encodeName(accountName, false)
        });
    }


}