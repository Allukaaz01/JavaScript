let names=["akram","afif","sahd","m3ama","dolmi"]
let elt ="dolmi"//exemple de nom à supprimer 
if(names.includes(elt))
{
    let index=names.indexOf(elt)
    names.splice(index,1);
    console.log("Suppression avec succès");
    console.log(names);
}
else{
    console.log(`${elt} est introuvable`)
}
console.log(names.join(" - "))
let som=0
let notes=[13,11,9,17,5]
notes.forEach(n=> som+=n)
const moy=som/notes.length;
console.log(`la moyenne est :${moy}`)

let nbrs=[13,11,9,17,5];
const tab=nbrs.map(function(n){// pour la fonction flechee n=>n*2
    return n*2
})
console.log(tab)

let nbr=[13,11,12,9,17,90,5];
const tbe=nbr.filter(n=>n%2===0)
console.log(tbe)
