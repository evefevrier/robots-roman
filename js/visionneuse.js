/**
 * @file visionneuse.js
 * @version 1.0.0
 * Contient fonctions utilitaires, objet visionneuse et écouteurs d'événement. Dans cet ordre.
 * @author  Ève Février, efevrier@csfoy.ca   
 */
 


// FONCTIONS UTILITAIRES
/**
 * Affiche ou cache l'élément HTML strId selon si blnEstVisible est true ou false
 * @param {*} strId 
 * @param {*} blnEstVisible 
 */
function afficherCacher(strId, blnEstVisible) {
   document.getElementById(strId).hidden = !blnEstVisible;
}

/**
 * Obtenir mon indice dans la liste de codeurs
 * @param {string} strPseudo 
 */
function obtenirMonIndice(strPseudo) {
   for (let i = 0; i < arrCodeurs.length; i++) {
      if (arrCodeurs[i].pseudo == strPseudo) {
         console.log("mon indice est " + i)
      }
   }
}

/**
     * Question à Chat GPT
     * Existe-t-Il une api pour transformer une url en qrcode et servir celui-ci au format png ?
     * Réponse:
     * Oui, il existe plusieurs APIs qui peuvent être utilisées pour générer un QR code à partir d'une URL. 
     * Voici un exemple de code en JavaScript qui utilise l'API de QR code de GoQR (https://goqr.me/api/) 
     * pour générer un QR code à partir d'une URL et l'afficher sur la page
     * @type {string}
     */

 const API_URL = 'https://api.qrserver.com/v1/create-qr-code/';

 async function generateQRCode(url) {
     const response = await fetch(`${API_URL}?data=${url}&size=150x150`);
     const data = await response.blob();
     const imageUrl = URL.createObjectURL(data);
     displayImage("jukebox", imageUrl, url);
 }

 function displayImage(strId, imageUrl, url) {
     const imageElement = document.createElement('img');
     imageElement.src = imageUrl;
     const lien = document.createElement('a');
      lien.href = url;
      lien.appendChild(imageElement);
     document.getElementById(strId).appendChild(lien);
 }

/***************************************
 * Objet principal - app Visionneuse  
 * @author Prénoms Noms
 ***************************************/
const visionneuse = {

   intNmbrCodeurs: arrCodeurs.length,
   // coder en s'inspirant de l'exercice 15
   // une méthode changerRobot qui a un paramètre strMethode
   changerRobot: function (strMethode) {
      refP.innerText = "";
      switch (strMethode) {
         case "suivant":
            if (indice < this.intNmbrCodeurs - 1) {
               indice++;
            } else {
               indice = 0;
            }
            break;

         case "precedent":
            if (indice > 1) {
               indice--;
            } else {
               indice = this.intNmbrCodeurs - 1;
            }
            break;

         case "auChoix":
            let intAuChoix = document.getElementById("choisirLeRobotDe").value;
            document.getElementById("choisirLeRobotDe").value = "";
            if (intAuChoix != "") {
               indice = parseInt(intAuChoix);
            }
            break;

      }

      console.log("indice: " + indice + " sur " + (arrCodeurs.length - 1));
      console.log("C'est le robot de " + arrCodeurs[indice].pseudo);
      arrCodeurs[indice].robot.x = -600;
      this.changerCodeur();
   },
   changerCodeur: function () {
      // changer l'image
      document.getElementById("avatar").src = "media/avatars/" + arrCodeurs[indice].pseudo + ".png";
      // afficher description IA 
      document.getElementById("ia").innerHTML = arrCodeurs[indice].descriptionIA;
      // écrire dans html les infos du codeur
      document.getElementById("infosCodeur").innerHTML = `
      <strong>${arrCodeurs[indice].pseudo}</strong><br>
      🍞 : ${arrCodeurs[indice].metsFavoris.join(", ")}<br>
      🕺: ${arrCodeurs[indice].hobbies.join(", ")}<br>
      🎵: ${arrCodeurs[indice].stylesMusique.join(", ")}<br>`
 

      // faire une boucle sur urlsMusique  
      // pour chaque URL, générer un QR code
      document.getElementById("jukebox").innerHTML = "";
      for (let i = 0; i < arrCodeurs[indice].urlsMusique.length; i++) {
         generateQRCode(arrCodeurs[indice].urlsMusique[i]);
      } 
      const refTitreJukeBox = document.createElement("h2");
      refTitreJukeBox.innerText = "Jukebox de " + arrCodeurs[indice].pseudo;
      document.getElementById("jukebox").appendChild(refTitreJukeBox);


      // regénérer la liste des codeurs/personnes
      let strListeCodeurs = "";
      let strListePersonnes = "";
      let strHTML = `<option value="">Choisir le robot de</option>`;
      for (let intNoCodeur = 0; intNoCodeur < arrCodeurs.length; intNoCodeur++) {
         if (intNoCodeur == indice) {
            strHTML += `<option value="${intNoCodeur}" selected>${arrCodeurs[intNoCodeur].pseudo}</option>`;
         } else {
            strHTML += `<option value="${intNoCodeur}">${arrCodeurs[intNoCodeur].pseudo}</option>`;
         }

         strListeCodeurs += arrCodeurs[intNoCodeur].pseudo + ", ";
         strListePersonnes += `${arrCodeurs[intNoCodeur].prenom} ${arrCodeurs[intNoCodeur].nom}, `;
      }
      strListeCodeurs = strListeCodeurs.slice(0, -2);
      document.getElementById("listeCodeurs").innerHTML = strListePersonnes.slice(0, -2);
      document.getElementById("choisirLeRobotDe").innerHTML = strHTML;
   }

}

/*************************************************************
  * Écouteurs d'événement 
  *************************************************************/
document.getElementById("btnSuivant").addEventListener("click", function () {
   visionneuse.changerRobot("suivant");
});
document.getElementById("btnPrecedent").addEventListener("click", function () {
   visionneuse.changerRobot("precedent");
});
// document.getElementById("btnGo").addEventListener("click", function () {
//    visionneuse.changerRobot("auChoix");
// });
document.getElementById("choisirLeRobotDe").addEventListener("change", function () {
   visionneuse.changerRobot("auChoix");
});
/*** Clavier avec l'aide de Github CoPilot***/
window.addEventListener("keydown", function (e) {
   switch (e.key) {
      case "ArrowRight":
         visionneuse.changerRobot("suivant");
         break;
      case "ArrowLeft":
         visionneuse.changerRobot("precedent");
         break;
   }
});

/*** Roll Over ***/
/* - état survol - 'mouseover' */
document.getElementById("avatar").addEventListener("mouseover", function () {
   afficherCacher("infosCodeur", true);
});
/* - état sortie de la zone de survol - 'mouseleave' */
document.getElementById("avatar").addEventListener("mouseleave", function () {
   afficherCacher("infosCodeur", false);
});

/* au chargement de la page 'load' */
window.addEventListener("load", function () {
   visionneuse.changerCodeur();
}); 

