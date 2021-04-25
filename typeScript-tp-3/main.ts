import { Adresse } from "./adresse";
import { ListePersonnes } from "./liste-personnes";
import Personne from "./personne";

let adresse1: Adresse = new Adresse("Victor Hugo", "Nice", "06100");
let adresse2: Adresse = new Adresse("Paradis", "Toulouse", "13100");
let adresse3: Adresse = new Adresse("République", "Avignon", "84100");
let adresse4: Adresse = new Adresse("Port", "Nice", "06100");



let personne1: Personne = new Personne("Léponge", "M", [adresse1]);
let personne2: Personne = new Personne("Thor", "F", [adresse2, adresse3, adresse4]);

let liste: ListePersonnes = new ListePersonnes([personne1, personne2]);

//console.log(liste.findByNom('Thor'));
//console.log(liste.countPersonnesVille('Nice'));
//liste.editPersonneNom('Thor', 'Hulk');
liste.editPersonneVille('Léponge','Amsterdam');
console.log(personne2, personne1);