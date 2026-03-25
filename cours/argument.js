function somme()
{
    let som=0
    for (let i= 0; i < arguments.length; i++) {
        som=som+arguments[i]
    }
    return som
}
const s1=somme(10,20);
console.log(`La somme d'éléments : ${s1}`)
const s2=somme(10,20,14);
console.log(`La somme d'éléments : ${s2}`)

function comptePairs(tab)
{
    const parite=(n)=>n%2===0
    let compt=0
    for (let t of tab )//pour travailler avec les elements
    {
        if (parite(t)) compt++;
    }
    return compt
}
const tableau=[1,2,3,4,5,6,7,8,9]
const N=comptePairs(tableau)
console.log(`le nombre d'éléments pairs :${N}`)

function appliquerOperation(a,b,operation)
{
    return operation(a,b)
}
function add(x,y){
    return x+y
}
const result1=appliquerOperation(8,10,add)
console.log(`L resultat est : ${result1}`)
