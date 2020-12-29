//***************************
// Exercice 12 - la visionneuse
// 12-3  Définir la méthode voirImageAleatoire
// Dans le HTML on ajoute un bouton "Au hasard!"
//***************************


// Déclaration d'objet(s)
let visionneuse = {

    //attributs
    intIndex: 29, 
    tagIframe: document.getElementById("tagIframe"),
    tagInput: document.getElementById("tagInput"),
    tagP: document.getElementById("tagP"),
    tagPAuteur: document.querySelector('.auteur'),

    //méthodes
    changerIframe: function (methode) {
        console.log("méthode: " + methode);
        if (methode == "precedent") {
            if (this.intIndex > 0) {
                this.intIndex = this.intIndex - 1;
            } else {
                this.intIndex = arrData.length - 1;
            }
        } else if (methode == "suivant") {
            if (this.intIndex + 1 < arrData.length) {
                this.intIndex = this.intIndex + 1;
            } else {
                this.intIndex = 0;
            }
        } else if (methode == "auChoix") {
            let index = parseInt(this.tagInput.value);
            if (index > 0 && index < arrData.length) {
                this.intIndex = index;
            }
        } else if (methode == "auHasard") {
            this.intIndex = Math.floor(Math.random() * arrData.length);
        }
        //this.intIndex = arrData[this.intIndex];
        console.log("index: " + this.intIndex);
        //console.log("fiche:" + this.intIndex);
        this.tagIframe.src = arrURLs[this.intIndex];
        document.getElementById("avatar").src = "images/avatar" + this.intIndex+ ".png";
        document.getElementById("ia").innerHTML = arrAuteurDetails[this.intIndex].texte;
    },
    raconterBlague: function () {
        let intBlague = Math.floor(Math.random() * arrBlagues.length);
        this.tagP.innerHTML = arrBlagues[intBlague];
    },
    voirAuteur: function () {

        this.tagPAuteur.innerHTML = "<strong>" + arrAuteurDetails[this.intIndex].pseudo + "</strong>";
        this.tagPAuteur.innerHTML += "<br />&#127838; : " + arrAuteurDetails[this.intIndex].mets;
        this.tagPAuteur.innerHTML += "<br />🕺: " + arrAuteurDetails[this.intIndex].activites;
        this.tagPAuteur.innerHTML += "<br />🎵: " + arrAuteurDetails[this.intIndex].musique;
        console.log(this.tagPAuteur.innerHTML);

    },
    effacerAuteur: function () {
        this.tagPAuteur.innerHTML = "";
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
//document.getElementById("tagBtnChoisir").addEventListener("click", function () {
//    visionneuse.changerIframe("auChoix");
//});
document.getElementById("tagBtnHasard").addEventListener("click", function () {
    visionneuse.changerIframe("auHasard");
});
//document.getElementById("tagBtnBlague").addEventListener("click", function () {
//    visionneuse.raconterBlague();
//});
document.getElementById("avatar").addEventListener("mouseover", function (evenement) {
    visionneuse.voirAuteur();
});
document.getElementById("avatar").addEventListener("mouseleave", function (evenement) {
    visionneuse.effacerAuteur();
});
window.addEventListener("load", function () {
    document.querySelector('.auteur').innerHTML = "";
})
