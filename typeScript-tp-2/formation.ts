import Stagiaire from "./stagiaire";

export default class Formation {
    constructor(private _intitule?: string,private _nbrJours?: number,private _stagiaires?: Stagiaire[]){}

    public get intitule(): string {
        return this._intitule;
    }
    public set intitule(value: string) {
        this._intitule = value;
    }
    public get nbrJours(): number {
        return this._nbrJours;
    }
    public set nbrJours(value: number) {
        this._nbrJours = value;
    }
    public get stagiaires(): Stagiaire[] {
        return this._stagiaires;
    }
    public set stagiaires(value: Stagiaire[]) {
        this._stagiaires = value;
    }
    calculerMoyenneFormation(){
        return this.stagiaires.map(e =>e.calculerMoyenne()).reduce((a,b) => a+b)/this.stagiaires.length;
    }
    getIndexMax(): number{
        let max: number[]= this.stagiaires.map(e=>e.calculerMoyenne());
        return max.indexOf(Math.max(...max))
    }
    afficherNomMax(){
        return this.stagiaires[this.getIndexMax()].nom
    }
    afficherMinMax(){
        return this.stagiaires[this.getIndexMax()].trouverMin()

    }
    trouverMoyenneParNom (nom: string){
        let test = this.stagiaires.filter(e => e.nom===nom) 
        return test.length > 0 ? test[0].calculerMoyenne(): "Pas d'élève de ce nom"
    }
}