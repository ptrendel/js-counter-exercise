// On a un élément qui varie dans l'application. C'est le compteur
// On crée donc une variable qui contient cette valeur
// Au démarrage elle vaut 0
let compteur = 0;

// On déclare nos fonctions
// Mais elles ne seront executées que si on les appelles
// avec par exemple doDecrease() ou avec un écouteur d'évènement
function changeColor() {
  // je dois vérifier si la valeur compteur est inférieure, supérieure ou égale à 0
  if (compteur < 0) {
    document.getElementById("counter").style.color = "red";
  } else if (compteur > 0) {
    document.getElementById("counter").style.color = "green";
  } else if (compteur == 0) {
    document.getElementById("counter").style.color = "black";
  }
}

function doDecrease() {
  compteur = compteur - 1;
  changeColor();
  document.getElementById("counter").innerHTML = compteur;
}

function reset() {
  compteur = 0;
  changeColor();
  document.getElementById("counter").innerHTML = compteur;
}

function doIncrease() {
  compteur = compteur + 1;
  changeColor();
  document.getElementById("counter").innerHTML = compteur;
}

document.getElementById("decrease").addEventListener("click", doDecrease);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("increase").addEventListener("click", doIncrease);
