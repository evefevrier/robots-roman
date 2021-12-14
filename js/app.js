 /***************************************
  * app Visionneuse (Main) 
  * @author Ève Février
  * 
  * @todo Si scroll faire disparaitre tagP
  * @todo Adapter pour le mobile (écran étroit)
  * @todo À chaque changement de robot replacer l'option en sélection de la liste déroulante
  * @todo ROBOT - ajouter de l'animation : 
  *       faire bouger le fond comme pour Benjamin OU animation d'ambiance
  * @todo ROBOT - ajouter de l'interactivité : 
  *       au clic, en disant son "bonjour...""
  *       il se remet en route pour traverser l'écran
  *       un autre clic, le bonjour s'efface et il revient
  * @todo modifier la structure de données 
  *       conserver uniquement arrCodeurs 
  *       en lui ajoutant un attribut 
  *       robot : {objRobot}
  *       Exemple:
  //    { 
  //      /* robot 0 */
  //      nom: "Marika Robitaille",
  //      pseudo: "marz",
  //      mets: "sushis et dumplings, tacos et fajitas",
  //      musique: "indie rock, emo rap, hyperpop",
  //      activites: "faire de la musique, jouer à Valorant et sortir avec mes amis:)",
  //      texte: "Kiki, le robot, est conçu pour trier des déchets directement en les jetant. Ce qui se recycle est envoyé dans un tube. Ce qui ne se recycle pas, dans un autre. Les tubes sont alimentés par énergie solaire, tout comme le robot lui-même. Ces tubes mène chacun à une genre d'usine, qui, rendu là, j'espère, ne brulera pas les déchets."
  //      robot: {strNom:"Kiki", x = -390, decorer: function...}
  //    }
  /* 
  /*********************************************************/

  /* Objet principal - app Visionneuse */
 visionneuse = {
   changerRobot: function (strMethode) { 
     tagP.html("...");
     switch (strMethode) {
       case "suivant":
         if (intNoRobot < arrRobots.length - 1) {
           intNoRobot++;
         } else {
           intNoRobot = 0;
         }
         break;
       case "precedent":
         if (intNoRobot > 0) {
           intNoRobot--;
         } else {
           intNoRobot = arrRobots.length - 1;
         }
         break;
       case "auChoix":
         // récupérer le value de l'option choisie
         let strChoix = document.getElementById("tagSelect").value;
         // obtenir une sous-chaine excluant la lettre r du début
         strChoix = strChoix.substring(1); 
         // convertir en nombre
         intChoix = parseInt(strChoix);
         // si nombre valide, affecter intChoix à la variable globale intNoRobot
         if (intChoix >= 0 && intChoix < arrRobots.length) {
           intNoRobot = intChoix;
         }
         break;
       default:
         break;
     }
     this.reInitialiser();
    //  console.log ("intNoRobot " + intNoRobot );
   },
   changerCodeur: function () {
    //  console.log(arrCodeurs[intNoRobot]);
    /* changer la source de la balise image pour afficher l'avatar du codeur */
     document.getElementById('avatar').src = "images/" + arrCodeurs[intNoRobot].pseudo + ".png"
     
    /* afficher la description du robot */
     document.querySelector(".codeur__texte").innerText = arrCodeurs[intNoRobot].texte;
     
    /* afficher les infos du codeur dans la balise figcaption */
     let strHTML = "<strong>" + arrCodeurs[intNoRobot].pseudo + "</strong>";
       // afficher ses plats préférés après l'icône &#127838;
     strHTML += "<br /> &#127838; : " + arrCodeurs[intNoRobot].mets;
       // afficher ses activités préférés après l'icône 🕺
     strHTML += "<br />🕺: " + arrCodeurs[intNoRobot].activites;
       // afficher ses styles de musiques préférés après l'icône 🎵
     strHTML += "<br />🎵: " + arrCodeurs[intNoRobot].musique;
     document.getElementById("infosCodeur").innerHTML = strHTML;
   }, 
   reInitialiser: function () { 
     this.changerCodeur();
     afficherCacher("infosCodeur", false);
     document.getElementById('tagSelect')[0].selected = true; 
   }
 };

 /**
  * 
  * @param {*} strId 
  * @param {*} blnEstVisible 
  */
 function afficherCacher(strId, blnEstVisible) {
  document.getElementById(strId).hidden = !blnEstVisible;
}

 /*************************************************************
  * Écouteurs d'événement
  * @todo ajouter la possibilité d'utiliser les flèches clavier
  * @todo ajouter la possibilité de swiper
  *************************************************************/
 document.getElementById("btnSuivant").addEventListener("click", function () {
   visionneuse.changerRobot("suivant");
 });
 document.getElementById("btnPrecedent").addEventListener("click", function () {
   visionneuse.changerRobot("precedent");
 });
 document.getElementById("btnGo").addEventListener("click", function () {
   visionneuse.changerRobot("auChoix");
 });
 document.getElementById("tagSelect").addEventListener("change", function () {
  visionneuse.changerRobot("auChoix");
});
 /* au chargement de la page 'load' */
 window.addEventListener("load", function () {
   visionneuse.reInitialiser(); 
   document.querySelector('canvas').style.width = '100%';
 });
 /* roll over - état survol - 'mouseover' */
 document.getElementById("avatar").addEventListener("mouseover", function () {
   afficherCacher("infosCodeur", true);
 });
 /* roll over - état sortie de la zone de survol - 'mouseleave' */
 document.getElementById("avatar").addEventListener("mouseleave", function () {
   afficherCacher("infosCodeur", false);
 });

 /* ajout des flèches pour se déplacer */
window.addEventListener('keydown', function(objEvenement){
  // console.log(objEvenement);
  if(objEvenement.key == "ArrowLeft"){
    visionneuse.changerRobot("precedent");
  } else if (objEvenement.key == "ArrowRight"){
    visionneuse.changerRobot("suivant");
  }
});

 