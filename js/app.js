/***************************************************************
 * Variables globales et fonctions de P5JS
 * 
 * @todo OBSERVER le rôle de la variable globale indice
 * @todo CHANGER son affectation initiale par un tirage au sort
 * @todo NE PAS MODIFIER le reste du code de ce fichier
 * 
 ***************************************************************/

/* variables globales */
const refP = document.getElementById("pBonjour");
const refSelect = document.getElementById("choisirLeRobotDe");

let indice;  

/* fonctions de P5JS */
function setup() { 
  /* Avant d'affecter indice il faut vérifier les autorisations de publication */
  indice = 0;  // en vedette  
  // indice = Math.floor(Math.random() * arrCodeurs.length); // au hasard    
  // console.log("indice: " + indice + " sur " + (arrCodeurs.length - 1));
  // console.log("C'est le robot de " + arrCodeurs[indice].pseudo);

  let canevas = createCanvas(600, 350);
  canevas.parent('sketch-holder'); 
  frameRate(60);
  refP.innerText = "Cliquer sur le robot pour le faire parler";
}

function draw() {
  /* les réglages suivants ne devraient pas être nécessaires */
    background(220); 
    stroke(0);
    strokeWeight(1)
  /* instructions de dessin */
    arrCodeurs[indice].robot.decorer();
    arrCodeurs[indice].robot.afficher();
    arrCodeurs[indice].robot.arriver();
}

function mousePressed() {
  if(mouseX > 0 && mouseX < width && mouseY < height){
    arrCodeurs[indice].robot.direBonjour();
  } 
}

 

/* Animation Matrix */

//  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()_+-=[]{}|;':,./<>?";

//  const matrixAnimation = document.querySelector(".matrix-animation");


//  window.addEventListener("load", function () {


//      console.log("window.innerWidth: " + window.innerWidth);
//      for (let cptLargeur = 0; cptLargeur < window.innerWidth; cptLargeur = cptLargeur + 30) {
//          for (let i = 0; i < 50; i++) {
//              const char = document.createElement("div");
//              char.innerHTML = chars[Math.floor(Math.random() * chars.length)];
//              char.classList.add("char");
//              const intDeploiement = Math.floor(Math.random() * 30);
//              char.style.top = i * intDeploiement + "px";
//              char.style.left = cptLargeur + "px";
//              char.style.setProperty("--delay", Math.random()); 
//              char.style.setProperty("opacity", Math.random()); 
//              matrixAnimation.appendChild(char);
//          }
//      }

//      const charElements = matrixAnimation.querySelectorAll(".char");

//      setInterval(function () {
//         //  console.log("setInterval1");
//          charElements.forEach(function (char) {
//              let top = parseInt(char.style.top);
//              if (top < -20) {
//                  top = 1000;
//              }
//              const intDeplacement = Math.floor(Math.random() * 30);
//              char.style.top = top - intDeplacement + "px";

//          });
//      }, 50); // 50ms

//  });

//  window.addEventListener("resize", function () {
//     //  console.log("window.innerWidth: " + window.innerWidth);
//      for (let cptLargeur = 0; cptLargeur < window.innerWidth; cptLargeur = cptLargeur + 30) {
//          for (let i = 0; i < 50; i++) {
//              const char = document.createElement("div");
//              char.innerHTML = chars[Math.floor(Math.random() * chars.length)];
//              char.classList.add("char");
//              const intDeploiement = Math.floor(Math.random() * 30);
//              char.style.top = i * intDeploiement + "px";
//              char.style.left = cptLargeur + "px";
//              char.style.setProperty("--delay", Math.random()); 
//              char.style.setProperty("opacity", Math.random()); 
//              matrixAnimation.appendChild(char);
//          }
//      }

//      const charElements = matrixAnimation.querySelectorAll(".char");

//      setInterval(function () {
//         //  console.log("setInterval2");
//          charElements.forEach(function (char) {
//              let top = parseInt(char.style.top);
//              if (top < -20) {
//                  top = 1000;
//              }
//              const intDeplacement = Math.floor(Math.random() * 30);
//              char.style.top = top - intDeplacement + "px";

//          });
//      }, 50); // 50ms

//  });
