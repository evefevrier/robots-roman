//*******************************************
// Robotsroman - partie 2 - gérer les données du développeur
// @author Prénom Nom
//*******************************************

// Déclaration d'objet(s)
let visionneuse = {

    //attributs
    intIndex: 29, 
    tagIframe: document.getElementById("tagIframe"), 
    
    // attribut optionnel
    tagPCodeur: document.getElementById('codeur'),
    // tagPCodeur: document.querySelector('.codeur'),

    //méthodes
    changerIframe: function (strMethode) {
        
        // Étape 2 
        // gérer la réception de l'argument et affecter intIndex selon le cas
        // console.log("méthode: " + strMethode);
        if (strMethode == "precedent") {
            if (this.intIndex > 0) {
                this.intIndex = this.intIndex - 1;
            } else {
                this.intIndex = arrURLs.length - 1;
            }
        
        
        } else if (strMethode == "suivant") {
            if (this.intIndex < arrURLs.length - 1) {
                this.intIndex = this.intIndex + 1;
            } else {
                this.intIndex = 0;
            } 
        
        
        } else if (strMethode == "auHasard") {
            this.intIndex = Math.floor(Math.random() * arrURLs.length);
        
        } 
        //console.log("index: " + this.intIndex); 
        
        // affecter la nouvelle source au tagIframe
        this.tagIframe.src = arrURLs[this.intIndex];
        
        
        
        // Volet 2 - Étape 4
        // Affecter une nouvelle source à l'image d'avatar du codeur
        document.getElementById("avatar").src = "images/" + arrCodeurDetails[this.intIndex].pseudo + ".png";
        // Remplacer le innerHTML du paragraphe de description du robot
        document.getElementById("ia").innerHTML = arrCodeurDetails[this.intIndex].texte;
    }, 
    afficherCodeur: function () {
        // Dans le paragraphe du codeur
        // Afficher en gras le pseudo du codeur
        this.tagPCodeur.innerHTML = "<strong>" + arrCodeurDetails[this.intIndex].pseudo + "</strong>";
        // Afficher ses plats préférés après l'icône &#127838;  
        this.tagPCodeur.innerHTML += "<br /> &#127838; : " + arrCodeurDetails[this.intIndex].mets;
        // Afficher ses activités préférés après l'icône 🕺  
        this.tagPCodeur.innerHTML += "<br />🕺: " + arrCodeurDetails[this.intIndex].activites;
        // Afficher ses styles de musiques préférés après l'icône 🎵
        this.tagPCodeur.innerHTML += "<br />🎵: " + arrCodeurDetails[this.intIndex].musique;
    },
    effacerCodeur: function () {
        // Effacer le contenu du paragraphe du codeur
        this.tagPCodeur.innerHTML = "";
    }
};

//*******************
// Écouteurs d'événements
//*******************
document.getElementById("tagBtnPrecedent").addEventListener("click", function () {
    visionneuse.changerIframe("precedent");
});
document.getElementById("tagBtnSuivant").addEventListener("click", function () {
    visionneuse.changerIframe("suivant");
}); 
document.getElementById("tagBtnHasard").addEventListener("click", function () {
    visionneuse.changerIframe("auHasard");
}); 
// VOLET 2
document.getElementById("avatar").addEventListener("mouseover", function (evenement) {
    visionneuse.afficherCodeur();
});
document.getElementById("avatar").addEventListener("mouseleave", function (evenement) {
    visionneuse.effacerCodeur();
});
window.addEventListener("load", function () {
    visionneuse.effacerCodeur();
});
