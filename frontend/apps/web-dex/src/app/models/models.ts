export class DBond {
    seller:string;
   buyer:string;
   received_payment:string;
   received_quantity:string;
   price:string;
    static fromJson(json){ return Object.assign(DBond.placeholder(), json); }
    static placeholder(){ return new DBond(); }
}