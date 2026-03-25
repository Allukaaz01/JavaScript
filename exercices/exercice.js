//ECrire un script qui permet d'afficher la table de multiplication d'un entier saisie par l'utilisateur
let m=prompt("Taper un un nombre : ")
for (let i=1; i<=10 ; i++)
{
    document.writeln(`${m} x ${i} = ${m*i} <br/>`);
}
//ECrire un script qui calcule et affiche le factoriel d'un entier saiie par l'utilisateur
let mm=prompt("Taper un nombre : ");
let a=1;
let w=1
do {
    a++;
    w=w*a;
}while (a<=mm);
document.writeln(`Le factoriel est ${w} <br/>`);