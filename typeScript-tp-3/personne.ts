import { Adresse } from "./adresse";

export default class Personne {
    constructor(private _nom?: string, private _sexe?: "M" | "F", private _adresses?: Adresse[]){}

    public get adresses(): Adresse[] {
        return this._adresses;
    }
    public set adresses(value: Adresse[]) {
        this._adresses = value;
    }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get sexe(): "M" | "F" {
        return this._sexe;
    }
    public set sexe(value: "M" | "F") {
        this._sexe = value;
    }
    
}