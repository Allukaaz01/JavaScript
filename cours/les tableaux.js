let tableau=["a","b","c","d"]
tableau.indexOf(2)
console.log(tableau)
//ou bien on peut faire
tableau[tableau.length]="v"

const filiers=["dev","res","com","ges"]
filiers.length--;//autre methode pour retirer le dernier éléments
console.log(`la taille du tableau : ${filiers.length}`);
let fil='res' //Filiere à rechercher
const indice=filiers.indexOf(fil);
console.log(`${fil} se trouve à l'indice ${indice}`);

const tab=["a","b","c","d"]
const t=tab.splice(0,2)//à partir de la position 0 retire deux element
console.log(tab)
console.log(t)

tab.splice(2,1,"z")// a partir de la position 2, retirer un élément en le remplçant par "z"
console.log(tab)

let tabe=["1","3","6","9"]
const z=tabe.slice(2,4)// de 2 à 3
console.log(z)
const co=["a","b","c","d"]
const cd=["e","f","g"]
const ne=co.concat(cd);
console.log(ne)

const s=ne.includes("j")
console.log(s)