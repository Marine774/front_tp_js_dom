// Changez la couleur de fond du body en #992323
// Ne modifiez pas le code HTML de la page directement
document.getElementsByTagName("body").style.backgroundColor="#992323";

// Changez la couleur du texte du body en #fff
document.getElementsByTagName("body").style.color="#992323";

// Supprimez la ligne suivante
var workspace = null;
// Récupérez l'élément div "workspace" par son id
// Enregistrez-le dans une variable workspace
workspace = document.getElementById("workspace");

// Affichez dans la console le nombre d'éléments enfants que contient
// l'élément workspace
console.log(workspace.childElementCount()); // Chui pas sûr

// Récupérez le premier paragraphe contenu dans workspace
// vous ne devez pas ajouter d'id
// Supprimez la ligne suivante
var p = null;
// Affectez le résultat à la variable p
p = document.getElementById("workspace").firstChild; // Chui pas sûr
console.log(p);

// Ajoutez le code suivant : "<h3>Hello JS world!</h3>"
// comme enfant de workspace
// Cet élément doit être ajouté avant le premier paragraphe
// contenu dans workspace
var h = document.createElement("h3");
var text = document.createTextNode("Hello JS world!");
h.appendChild(text);
document.getElementById("workspace").appendChild(h);

const initTime = 10;

// Complétez la fonction runChrono pour qu'elle affiche un décompte
// de n à 0, dans une div (id: counter), placée sous la balise h3 précédemment ajoutée
// Vous ne devez pas toucher au code HTML, et le h3 doit continuer à s'afficher
function runChrono(n) {
  var compteur = "";
  var counter = document.createElement(div, "counter");
  document.getElementsByTagName("h3").appendChild(counter);
  for(var i = n; i <= 0; i--){
    console.log(i);
    compteur = i.toString();
    document.getElementsById("counter").appendChild(compteur );
  }
}

console.log(runChrono(10));

// Ajoutez à l'élément workspace un bouton permettant de déclencher
// le décompte lors d'un clic, avec le texte "Start countdown"
// Le bouton doit être inséré après l'élément h3
// Vous ne devez pas utiliser l'élément p pour insérer le bouton
// Le décompte est réinitialisé lorsque l'utilisateur clique une
// nouvelle fois sur le bouton
// votre code
