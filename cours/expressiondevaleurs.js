//expression de fonction

/*let message=function()
{
    console.log("Hello world !")
}
message() //appel de la fonction

let message=()=>console.log("Halo !") //pour une seule instruction on peut enlever les acollades
message() //appel de la fonction

//fonction avec un seul param
function message(nom)
{
    alert(`Bienvenue ${nom} dans notre site web`)
}
n=prompt("Tapez votre nom : ")
message(n); 

//expression de fonction avec un param
let message=function(nom)
{
    alert(`bienvenue ${nom} a ma page`);
}
nm=prompt("taper ton nom:");
message(nm)

//function flechee avec un parametre
let message=nom=>alert(`bienvenue ${nom} a ma page`)
nm=prompt("taper voter nom");
message(nm)*/

//expression ordinaire avec return
/* function som(a,b)
{
    return a+b;
} */

//expression de fonction avec return
/* let som=function(a,b){return a+b;} */

//fonction fléchée avec return
/* let somme=(a,b)=>{return a+b} */

//ou bien
/* let somme=(a,b)=>a+b;
let x=Number(prompt("Donner le premier nombre: "))
let y=Number(prompt("Donner le deuxième nombre: "))
document.writeln(`La somme de ${x} et ${y} est ${somme(x,y)}`)
let s=somme(x,y)
document.writeln(`La somme de ${x} et ${y} est : ${s}`) */

//fonction qui ecris "Bonjour" dans trois langues differentes suivi d'un pseudo

/* let message=function(pseudo)
{
    console.log(`Bonjour ${pseudo}`)
    console.log(`Namaste ${pseudo}`)
    console.log(`Nasilsin ${pseudo}`)
    document.writeln(`Bonjour ${pseudo}<br/>`)
    document.writeln(`Bonjorno ${pseudo}<br/>`)
    document.writeln(`Hola ${pseudo}<br/>`)
}
nm=prompt("Tapez votre pseudo: ")
message(nm)
 */

//Modifier la fonction de la question precedente de telle facon que l'utilisateur puisse choisir la langue désirée
/* function message(rep, pseudo)
{ 
    
    if (rep==='fr')
        {
        document.writeln("Bonjour "+pseudo)
    }
    else if (rep==='in'){
        document.writeln("Namaste "+pseudo)
    }
    else if (rep==='ger') {
        document.writeln("Halo "+pseudo)
    }   
    else {
        alert("Langue inconnue")
    }
}
l=prompt("Choisir une langue(fr,in,ger): ")
p=prompt("Tapez votre pseudo: ")
message(l,p) */

//Ecrire la fonction parite qui recoit un entier, verifie si cet entier est pair (true) ou non (false)
/* function parite(x)
{
    if (x%2===0)
    {
        return true
    }
    else {
        return false
    }
} 
let L=parseInt(prompt("Taper un entier: "));
p=parite(L);
let result= p?`${L} est pair`:`${L} est impair`;
document.writeln(result);*/

//methode 2
/* function parite(n)
{
    return n%2===0;
}
let L=parseInt(prompt("Taper un entier: "));
p=parite(L);
let result= p?`${L} est pair`:`${L} est impair`;
document.writeln(result); */

//methode 3
/* let parite=function(n)
{
    return n%2===0;
}
let L=parseInt(prompt("Taper un entier: "));
p=parite(L);
let result= p?`${L} est pair`:`${L} est impair`;
document.writeln(result); */
/* let parite=n=>n%2===0
let L=parseInt(prompt("Taper un entier: "));
p=parite(L);
let result= p?`${L} est pair`:`${L} est impair`;
document.writeln(result); */

/* let premier=function(n)
{
    let ok=true
    for (let i=2; i<n; i++)
    {
        if (n%i==0)
        {
            ok=false
            break
        }
    }
    return ok
}
let N=parseInt(prompt("Taper un entier: "))
p=premier(N)
let result=p?`${N} est premier`:`${N} n'est pas premier`
document.writeln(result) */

//calculer la somme des elements d'un tableau
//methode 1
/* function somme(T)
{
    let som=0;
    for (let i=0; i<T.length; i++)
    {
        som=som+T[i];
    }
    return som;
} */
//methode 2
function somme(T)
{
    let som=0;
    for (let i of T)
    {
        som=som+i;
    }
    return som;
}
N=parseInt(prompt("donner la taille du tableau: "));
let tab=new Array(N);
for (i=0; i<N; i++)
{
    tab[i]=parseInt(prompt("taper un entier: "));
}
let s=somme(tab);
document.writeln(`<h3>la somme des éléments: ${s}</h3>`)