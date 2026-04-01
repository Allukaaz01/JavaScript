let infos = {
  'image':"images/Artur.jpeg",
  'nom':"Alami",
  'prenom':"Rachid",
  'specialite':"DWOFS",
}
let img = document.getElementById('img');
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let specialite = document.getElementById('sp');

function afficherInfos(){
  img.setAttribute('src', infos["images"])
}