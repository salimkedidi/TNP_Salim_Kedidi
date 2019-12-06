export class Article
{
    public get matricule(): number {
        return this._matricule;
    }
    public set matricule(value: number) {
        this._matricule = value;
    }
    public get libelle(): string {
        return this._libelle;
    }
    public set libelle(libelle: string) {
        this._libelle = libelle;
    }
    public get photo(): string {
        return this._photo;
    }
    public set photo(photo: string) {
        this._photo = photo;
    }
    public get prix(): number {
        return this._prix;
    }
    public set prix(prix: number) {
        this._prix = prix;
    }
    public get onstock(): boolean {
        return this._onstock;
    }
    public set onstock(stock: boolean) {
        this._onstock = stock;
    }
    public get date(): Date {
        return this._date;
    }
    public set date(date: Date) {
        this._date = date;
    }

   


    constructor(private _matricule: number, private _libelle:string, private _photo:string, private _prix:number ,private _onstock:boolean , private _date:Date) {
        
    }
}