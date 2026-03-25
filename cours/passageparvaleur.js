//passage par valeur 
//une fonction qui recoit un entier
//et qu'elle l'increment
/* function incrementer(num)
{
    num++;
}
let valeur=10;
console.log("Avant incrémentation: "+valeur)
incrementer(valeur) //appel de la fonction
console.log("Après incrémentation: "+valeur) */

//passage par référence
//une fonction qui recoit comme param
//un tableau et un éLément, permet de l'ajouter au tableau
/* function addElement(tab, element)
{
    tab.push(element)
}
//exemple:
let arr1=['Dev', 'Res', 'Ges'];
let arr2=arr1; //arr2 et arr1 pointent vers le même tableau
addElement(arr1, 'Com');
console.log(arr1) //affiche [1,2,3,4]
console.log(arr2) //affiche aussi [1,2,3,4] car arr2 pointe vers le même tableau que arr1 */

//passage par ref
//exemple object Stagiaire
stagiaire={
    num: "AB123",
    nom: "Taha",
    note: 12
}
//fonction qui prend comme param un objet de type Stagiaire et une note permet de modifier la note du stagiaire
//par une nouvelle note
function modifier(S,note)
{
    S.note=note;
}
modifier(stagiaire, 14);
let R=`Le numéro du stagiaire est: ${stagiaire.num} <br/>`;
R +=`Son nom est: ${stagiaire.nom} <br/>`;
R +=`Sa note est: ${stagiaire.note} <br/>`;
document.writeln(R);