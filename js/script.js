//*******************************************
// Robotsroman
// @author Ève Février
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
    changerPage: function (strMethode) {
        // console.log("méthode: " + strMethode);

        // gérer la réception de l'argument et affecter intIndex selon le cas
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
    },
    initialiser: function () {
        this.effacerCodeur();
        this.changerPage("auHasard");
    }
};

//*******************
// Écouteurs d'événements
//*******************
document.getElementById("tagBtnPrecedent").addEventListener("click", function () {
    visionneuse.changerPage("precedent");
});
document.getElementById("tagBtnSuivant").addEventListener("click", function () {
    visionneuse.changerPage("suivant");
});
//document.getElementById("tagBtnHasard").addEventListener("click", function () {
//    visionneuse.changerPage("auHasard");
//});
document.getElementById("avatar").addEventListener("mouseover", function (evenement) {
    visionneuse.afficherCodeur();
});
document.getElementById("avatar").addEventListener("mouseleave", function (evenement) {
    visionneuse.effacerCodeur();
});
window.addEventListener("load", function () {
    visionneuse.initialiser();
});

/* ajout d'un écouteur d'événement keydown pour changer de page sur les flèches gauche et droite */
document.addEventListener('keydown', (event) => {
    const nomTouche = event.key;

    if (nomTouche === 'ArrowRight') {
        // Pas d'alerte si seule la touche Control est pressée.
        visionneuse.changerPage("suivant");
        return;
    }
    if (nomTouche === 'ArrowLeft') {
        // Pas d'alerte si seule la touche Control est pressée.
        visionneuse.changerPage("precedent");
        return;
    }
    if (event.ctrlKey) {
        // Même si event.key n'est pas 'Control' (par ex., 'a' is pressed),
        // event.ctrlKey peut être true si la touche Ctrl est pressée dans le même temps.
        console.log(`Combinaison de ctrlKey + ${nomTouche}`);
    } else {
        console.log(`Touche pressée ${nomTouche}`);
    }
}, false);
