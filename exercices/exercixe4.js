//Ecrire un script qui remplit un tableau par N entier 
//Afficher les element de tableau apres calculer et afficher la somme des element de tableau
let N=parseInt(prompt("Donner le nombre des element"))
let tab=new Array(N)
for (let i=0; i<N ; i++)
{
    tab[i]=parseInt(prompt(`Donner le ${i+1} entier : `))
}
document.writeln("Les elements du tableau : <br/>")
let u=0
// First Method
//for (let i=1 ; i<tab.length ; i++)
//Second Method
//for (let i in tab)
//{
//    u=u+tab[i]
//    document.writeln(tab[i]+"<br/>")
//}
//Third Method
for (let v of tab )
{
    u=u+v
    document.writeln(v+"<br/>")
}
document.writeln(`La somme des elements du tableau est ${u}`)