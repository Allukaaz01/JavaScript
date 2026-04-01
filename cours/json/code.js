let infos={
  "pers":{
    "image":"images/Artur.jpeg",
    "nom":"Alami",
    "prenom":"Rachid",
    "specialite":"DWOFS",
    "enfants":[
      {"prenom":"Aya","age":4},
      {"prenom":"Hamza","age":7}
  ]
  }
}
let img=document.getElementById('img');
let nom=document.getElementById('nom');
let prenom=document.getElementById('prenom');
let specialite=document.getElementById('sp');
let enfants=document.getElementById('enf')
function afficherInfo()
{
  img.setAttribute('src',infos["pers"].image);
  nom.textContent=infos["pers"].nom;
  prenom.textContent=infos["pers"].prenom;
  specialite.textContent=infos["pers"].specialite;
  let enfs=document.getElementById('enf');
  let child=""
  child +="<table border='1' cellpadding='5'>"
  child +="<tr><th>Prénom</th><th>Age</th></tr>"
  infos["pers"].enfants.forEach(enf=>{
    child +=`<tr>
                  <td>${enf["prenom"]}</td>
                  <td>${enf["age"]}</td>
              </tr>`
  })
child +="</table>";
enfs.innerHTML=child;
}