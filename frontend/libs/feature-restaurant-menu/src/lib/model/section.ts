export class Section {
    section_id: number;
    section_name:string;
    is_active:number;
    items: any;
    static fromJson(json){ return Object.assign(Section.placeholder(), json); }
    static placeholder(){ return new Section(); }
}