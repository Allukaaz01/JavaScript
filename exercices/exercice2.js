//ECrire un script qui verifie si un entier saisie par l'utilisateur est premiers ou non 
let num=parseInt(prompt("Taper un nombre "))
let ok=true;
for (let i=2 ; i<num ; i++)
{
    if (num%i==0)
    {
        ok=false;
        break;
    }
}
if (ok)
{
            document.writeln(`${num} est un nombre premier`);
}
else{
            document.writeln(`${num} n'est pas un nombre premier`);
}