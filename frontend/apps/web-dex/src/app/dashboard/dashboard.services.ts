import { Injectable } from "@angular/core";
import * as Eos from 'eosjs';
import { UalService } from 'ual-ngx-material-renderer';
import { read, generateTransaction, transactionConfig } from '@utils';
import { environment } from '@dex-env';
import { DBond ,DBORDER} from "../models/models";

@Injectable()
export class DashboarService {

    reader:any;
    user:any;
    accountName:any;
    constructor(private ualService: UalService) {
       this.reader = Eos({httpEndpoint: `${environment.RPC_PROTOCOL}://${environment.RPC_HOST}:${environment.RPC_PORT}`, chainId:environment.CHAIN_ID});
    }

    async buyBond(price){
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.user || !this.accountName) {
                    this.user = this.ualService.users$.value[0];
                    this.accountName = this.user.accountName;
                }
    
                const transaction = generateTransaction(this.accountName, "transfer", {
<<<<<<< HEAD
                    "from": "testuserid11",
                    "memo": "sell DBONDB to banktestacc1",
                    "quantity": "5.00 DBONDB",
                    "to": "hodldbondacc"
                 });
=======
                    from: this.accountName,
                    to: 'hodldbondacc',
                    quantity:price.toFixed(2) + ' DBONDA',
                    memo:"sell DBONDA to banktestacc1",
                });
>>>>>>> cc84aae3836757a663d4cb0b6edef23b6773c5f3
                
                console.log(this.user, transaction);
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
            index_position: null,
            index:null
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
            scope:accountName,
            model: DBORDER,
            index_position: null,
            index: null,
        });
    }


}