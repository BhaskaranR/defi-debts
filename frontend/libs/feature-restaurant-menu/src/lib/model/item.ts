export class Item {
    item_id: number;
    owner:string;
    item_name:string;
    description:string;
    photo:string;
    spicy_level:string;
    vegetarian:string;
    cooking_time:string;
    is_active:number;
    types:any[];

    static fromJson(json){ return Object.assign(Item.placeholder(), json); }
    static placeholder(){ return new Item(); }
}