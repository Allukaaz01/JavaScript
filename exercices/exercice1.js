//ECrire un script qui compte le nombre d'entier pairs et im impairs entr deux entiers saisie par l'utilisateur
let p=0
let imp=0
let num1=parseInt(prompt("Taper le premier entier"));
let num2=parseInt(prompt("Taper le deuxieme entier"));

for (let nap=num1;nap<=num2;nap++)
{
    if (nap%2==0)
    {
        p++;
    }
    else{
        imp++;
    }
}
document.writeln(`Entre ${num1} et ${num2} ; il  existe ${p} entiers pairs <br/>`)
document.writeln(`Entre ${num1} et ${num2} ; il  existe ${imp} entiers impairs <br/>`)