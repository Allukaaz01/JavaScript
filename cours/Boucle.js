//boucle do while
let i=1;
do {
    document.writeln(i+"<br/>");
    i++;
} while(i<=10)
//boucle while
let b=10;
while(i<=20){
    document.writeln(i+"<br/>");
    i++;
}
//boucle for
for (let i=21; i<=30; i++){
    document.writeln(i+"<br/>")
}
//ecrire un script qui permet d'afficher la table de multiplication d'un entier saisi par l'utilisateur
m=parseInt(prompt("Tapez un nombre pour afficher la table de multiplication: "))
for (let i=1; i<=10; i++){
    document.writeln(`${m} x ${i} = ${m*i}<br/>`)
} 
//ecrire un script qui permet d'afficher le factoriel d'un entier saisi par l'utilisateur
let f=prompt("Tapez un nombre pour afficher le factoriel: ");
let x=1;
let y=1
do {
    y=y*x;
    x++
}while(x<=f);
document.writeln(`Le factoriel est ${y} <br/>`)
//ecrire un script qui compte le nombre d'entiers pairs et impairs entre deux entiers saisis par l'utilisateur
let p=0
let imp=0
let num1=parseInt(prompt("Taper le 1er nombre: "))
let num2=parseInt(prompt("Taper le 2eme nombre: "))
for (let nap=num1;nap<=num2;nap++)
{
    if (nap%2==0)
    {
        p++;
    }
    else
    {
        imp++;
    }
}
document.writeln(`Entre ${num1} et ${num2}, il y a ${p} nombres pairs<br/>`)
document.writeln(`Entre ${num1} et ${num2}, il y a ${imp} nombres impairs<br/>`)
//ecrire un script qui verifie si un entier saisi par l'utilisateur est premier ou non
let np=parseInt(prompt("Tapez un nombre pour verifier s'il est premier ou non: "))
let ok=true;
for (let i=2;i<np;i++)
{
    if (np%i==0);
    {
        ok=false;
        break;
    }
}
if (ok){
    document.writeln(`${np} est un nombre premier<br/>`);
}
else{
    document.writeln(`${np} n'est pas un nombre premier<br/>`)
}