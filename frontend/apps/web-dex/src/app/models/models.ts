export class DBond {
    ISIN:string;
   name:string;
   issuer:string;
   currency:string;
   maturity_time:string;
   bond_description_webpage:string;
    static fromJson(json){ return Object.assign(DBond.placeholder(), json); }
    static placeholder(){ return new DBond(); }
}