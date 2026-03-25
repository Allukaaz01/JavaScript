//exemple nous voulons afficher la date courante 
//sous forme jj/mm/aaaa
let d=new Date()
let jour=d.getDate();
let mois=d.getMonth();
mois++;
let annee=d.getFullYear();
if(jour<10) jour="0"+jour;
if(mois<10) mois="0"+mois;
console.log(`${jour}/${mois}/${annee}`);

//2iéme méthode
let dd=new Date()
let aujourdhui=new Date(d).toLocaleDateString('fr-Fr');
console.log(aujourdhui);

//pour comparer deux dates:
let dt1=new Date();
let dt2=new Date();
if(dt1===dt2)
{console.log("les dates sont égales")}
else
{
    console.log("les dates ne sont pas égales")
}

////solution pour la compmaraison des deux dates
if(dt1.getTime()===dt2.getTime())
{console.log("les dates sont égales")}
else
{
    console.log("les dates ne sont pas égales")
}