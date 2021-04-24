import Formation from "./formation";
import Stagiaire from "./stagiaire";

let stagiaire1: Stagiaire = new Stagiaire('Bob', [10,12,14]);
let stagiaire2: Stagiaire = new Stagiaire('Maxence', [11,19,14]);
let stagiaire3: Stagiaire = new Stagiaire('Marie', [10,12,10]);

let form1: Formation = new Formation('POEC', 345, [stagiaire1,stagiaire2, stagiaire3])
//console.log(stagiaire1);
//console.log(stagiaire1.calculerMoyenne());
//console.log(stagiaire1.trouverMin());
console.log(form1.afficherMinMax());
console.log(form1.afficherNomMax());

console.log(form1.trouverMoyenneParNom('Bob'));

