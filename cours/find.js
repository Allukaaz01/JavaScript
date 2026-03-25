////const mx=Math.max(15,34,54)
////console.log(`le max est :${mx}`)
//
//
////const nbrs=[10,3,42,49,52,22];
////const mx=Math.max(...nbrs)
////console.log(`le max est ${mx}`)// ici le resultat va être Nan
//
//
////const nbrs=[10,3,42,49,52,22];
////const mx=Math.max(...nbrs)
////console.log(`le max est ${mx}`)//lorsqu'on a un tableau et on veut savoir son max on ecrit 
//////la methode math.max et on ajoute 3 points avant le nom du tableau
//
const joueur=[
    {id:1000,name:"Amin",score:645},
    {id:1000,name:"Amina",score:895},
    {id:1000,name:"Aman",score:285}
]

//const J=joueur.find(j=>j.id===1000)
//if(J){
//    console.log(J)
//}
//else{
//        console.log(`joueur introuvable `)
//}
//
//const P=joueur.findIndex(j=>j.id===1000)
//console.log(`l'indice du joueur est ${P+1}`)
//
//const names=["Mohamed","Anass","Anas","Rayane","Samir"]
//names.sort()
//console.log(names)

//const numbers=[12,32,14,54,33,45]
//numbers.sort(function(a,b)
//{
//    if (a>b) return 1
//    else if (a<b) return-1
//    else return 0
//})
//console.log(numbers)// si on ne fais pas la fonction il va prendre les nombres comme des chaînes de caractère
//
//const numbeers=[12,32,14,54,33,45]
//numbers.sort(function(a,b)
//{
//    return b-a  
//})

joueur.sort(function(a,b)
{
    return b.score- a.score
   
}
)
console.log(joueur)