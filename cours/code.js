alert("Bonjour tout le monde")
//pour declarer un variable on utilise let 
//let nom="Mohamed"
//pour retourner le type d'une variable
//alert (typeof nom)
/*let age=21 //number int
let prix=100.45; // number float 
let ok=false ;// booleen
let pers={  //object
    numero :100,
    filiere:"Dev",
    note:12.45
};
let A=null; //n'existe pas ou ensemble vide 
let B ;// undefined = variable qui n'as pas été renseignée
alert (typeof pers );
alert ( pers["filiere"] );*/
//plusieurs declaration a la fois
//let n="Rayane", age=19, prix=130.38;
//pour recuperer la saisie de l'utilisateur
//let nom=prompt("taper votre nom")
//let msg=`Bienvenue ${nom}`
//document.writeln(msg);
//un script en JS qui calcule et affiche
//la somme de deux entiers saisis
// let x=Number(prompt("Tapez le premier nombre: "))
/*let y=Number(prompt("Tapez le deuxieme nombre: "))
let r=x+y
document.writeln(` <br> La somme de ${x} et ${y}: ${r}`)*/
// ecrire un script  en java script qui echange les valeur de deux entiers saisies par l'utilisateur
//let x=parseInt(prompt("Tapez le premier nombre: "))
//let y=parseInt(prompt("Tapez le deuxieme nombre: "))
//let z=x; x=y; y=z
//document.writeln(`<br/>Apres permuttation le premier nombre est ${x} et le deuxieme nombre est ${y}`)
// un script en java script qui lit deux entiers saisies de l'uu qui permet d'afficher leur somme , leur difference leur produit , leur division et leur reste
//let a=parseInt(prompt("Tapez le premier nombre: "))
//let b=parseInt(prompt("Tapez le deuxieme nombre: "))
//let som=a+b; diff=a-b; prod=a*b; div=a/b; reste=a%b
//document.writeln(`<br/>La somme de ${a} et ${b}: ${som}`+`<br/>La difference entre ${a} et ${b}: ${diff}`+`<br/>Le produit de ${a} et ${b}: ${prod}`
//    +`<br/>La division de ${a} et ${b}: ${div}`+`<br/>La reste de ${a} et ${b}: ${reste}`)














//Exercice 1
//let a= parseInt(prompt("Taper le premier nombre :"))
//let b= parseInt(prompt("Taper le deuxieme nombre :"))
//let c=a ; a=b; b=c
//document.writeln(`Apres permuttation le premier nombre est ${a} et le deuxieme est ${b}`)
//Exercice 2
//let d=parseInt(prompt("Taper le premier nombre :"))
//let e=parseInt(prompt("Taper le deuxieme nombre :"))
//let add=d+e ; sous=d-e ; mult=d*e ; div=d/e ; res=d%e
//document.writeln(`<br/> la somme est : ${add} <br/> la soustraction est ${sous} <br/> la multiplication est ${mult} <br/> la division est ${div} <br/> le reste est : ${res}`)
//exercice3
//un script en java script qui calcule le volume du sphere
//let I=Number(prompt("Donner le rayon du sphere: "))
//let V = (4/3)*Math.PI*Math.pow(I , 3)
//V=V.toFixed(2)//Pour mettre seulement 2 chiffre apres la virgule
//document.writeln(`le volume du sphère est ${V}`)
// exemple de structure alternatif
// simple choix 
//let p=Number(prompt("Taper un nombre positif ou negatif :"))
//let initial = p;
//if (p<0);
//{
//    p=-p
//}
//document.writeln(`la valeurs absolut de ${initial} est ${p}`)
//Ecrire un script qui verifie si un entier saisi par l'utilisateur est pair ou impair
let w=parseInt(prompt("Taper un entier de votre choix : "))
if (w%2==0)
{
    document.writeln(`${w} est un nombre paire `)
}
else 
{
    document.writeln(`${w} est impaire `)
}
//un script qui verifie si une annee est bissextile 
let an=parseInt(prompt("Taper une année : "))
if ((an %4==0 && an%100!==0) || (an %400==0))
{
    document.writeln(`<br/>${an} est une année bissextile`)
}
else{
    document.writeln(`<br/>${an} n'est pas une année bissextile`)
}
//un script qui affiche le maximume de trois nombre 
let X=parseInt(prompt("Taper un entier: "))
let Y=parseInt(prompt("Taper un autre entier: "))
let Z=parseInt(prompt("Taper un autre entier: "))
if (X>=Y && X>=Z)
    {
    document.writeln(`<br/>Le max est: ${X}`)
    }
else if (Y>=Z && Y>=X)
    {
    document.writeln(`<br/>Le max est: ${Y}`)
    }
else if (Z>=X && Z>=Y)
    {
    document.writeln(`<br/>Le max est: ${Z}`)
    }
// Resoudre une equation de second degres
document.writeln("la formule d'une equation de 2eme degré Ax^2+Bx+C")
let o=parseInt(prompt("Tapez A: "))
let i=parseInt(prompt("Tapez B: "))
let p=parseInt(prompt("Tapez C: "))
if (A==0)
    if (B==0)
    {
        document.writeln("Ensemble Vide")
    }
    else{
        r=-C/B
        document.writeln(`le resultat de cette équation est ${r} `)
    }
else{
    if (B**2-4*A*C<0)
    {
        
    }
}
//{
//    document.writeln("Ensemble Vide")
//}
//else if (A==0){
//    document.writeln("Cette equation admet une seule solution ")
//}