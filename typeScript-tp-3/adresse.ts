export class Adresse{
    constructor(private _rue?: string, private _ville?: string, private _codePostal?: string){}

    public get rue(): string {
        return this._rue;
    }
    public set rue(value: string) {
        this._rue = value;
    }
    public get ville(): string {
        return this._ville;
    }
    public set ville(value: string) {
        this._ville = value;
    }
    public get codePostal(): string {
        return this._codePostal;
    }
    public set codePostal(value: string) {
        this._codePostal = value;
    }
}