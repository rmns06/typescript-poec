export default class Stagiaire {
    constructor(private _nom?: string, private _notes?: number[]) { }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get notes(): number[] {
        return this._notes;
    }
    public set notes(value: number[]) {
        this._notes = value;
    }
    calculerMoyenne(): number{
        return this.notes.reduce((a, b) => a+b)/this.notes.length;
    }
    trouverMax(): number{
        return Math.max(...this.notes);
    }
    trouverMin(): number{
        return Math.min(...this.notes);
    }
}