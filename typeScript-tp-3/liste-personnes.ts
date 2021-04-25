import Personne from "./personne";

export class ListePersonnes{
    constructor(private _personnes?: Personne[]){}

    public get personnes(): Personne[] {
        return this._personnes;
    }
    public set personnes(value: Personne[]) {
        this._personnes = value;
    }

    findByNom(nom: string): Personne{
        let test = this.personnes.filter(e => e.nom === nom);
        return test.length > 0 ? test[0] : null
    }
    findByCP(test : string): boolean{
        for (const iterator of this.personnes) {
            for (const i of iterator.adresses) {
              if(i.codePostal == test){
                  return true
              }  
            }
        }
        return false
    }
    countPersonnesVille(ville : string){
        let result = 0
        this.personnes.forEach(element => {
           if(element.adresses.filter(i => i.ville === ville).length>0){
               result++
           }
           
        });
        return result
    }
    editPersonneNom(oldNom :string, newNom: string): void{
        this.personnes.forEach(e => {
             e.nom === oldNom ? e.nom = newNom : oldNom;
             console.log(`${oldNom} se nomme maintenant ${newNom},
              `,e);
        })
    }
    editPersonneVille(nom: string, newVille: string): void{
        this.personnes.forEach(e =>{
           if(e.nom === nom){
            e.adresses.forEach(a =>a.ville = newVille)
           } 
        })
    }
}