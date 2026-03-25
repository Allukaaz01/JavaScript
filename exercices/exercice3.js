//ECrire un script qui permet d'afficher la table de multiplication d'un entier saisie par l'utilisateur
let result="<table border ='1'>"
let res="</table>"
document.writeln(result)
document.writeln("<tr>")
for(let i=1 ; i<=9;i++)
{
    document.writeln("<td>"+ i+"<td/>")
}
document.writeln("<tr/>")
document.writeln(res)
//for (let i=1; i<=10 ; i++)
//{
//    document.writeln(`${m} x ${i} = ${m*i} <br/>`);
//}