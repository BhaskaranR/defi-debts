export class DBond {
    dbond:string;
   initial_time:string;
   initial_price:string;
   current_price:string;
   fc_state:string;
   confirmed_by_counterparty:string;
    static fromJson(json){ return Object.assign(DBond.placeholder(), json); }
    static placeholder(){ return new DBond(); }
}

export class DBORDER {
   buyer: object;
   price: string;
   recieved_payment: string
   received_quantity:string;
    static fromJson(json){ return Object.assign(DBORDER.placeholder(), json); }
    static placeholder(){ return new DBORDER(); }
}