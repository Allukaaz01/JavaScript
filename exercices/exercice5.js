//Ecrire un script qui remplit un tableau par des nombre aleatoire
//de 1 à 10
//Calculer et aficher la moyenne des elements du tableau
let N=parseInt(prompt("Donner le nombre des element"))
let tab=new Array(N)
for (let i=0; i<N ; i++)
{
    tab[i]=Math.floor(Math.random()*10+1)

}
document.writeln("Les elements du tableau : <br/>")
let u=0
for (let v of tab )
{
    u=u+v
    document.writeln(v+"<br/>")
}
document.writeln(`La somme des elements du tableau est ${u}`)