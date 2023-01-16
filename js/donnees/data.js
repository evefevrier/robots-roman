let nombreClics = 0; // pour Easter egg de Kate

/* CODE POUR FAIRE L'EFFET DE NEIGE */
let cloudx = 100; // pour la neige de Rodrigo
let cloudy = 100;
let snowflakes = []; // array to hold snowflake objects
function makeCloud(cloudx, cloudy) {
  fill(250)
  noStroke();
  ellipse(cloudx, cloudy, 70, 50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx - 20, cloudy + 10, 70, 50);
}
// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 5 * PI);
  this.size = random(2, 6);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function (time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function () {
    fill(235, 240, 242);
    strokeWeight(.1)
    ellipse(this.posX, this.posY, this.size);
  };
}

let arrCodeurs = new Array(

  /* Groupe 1 */

  {
    prenom: "Xavier",
    nom: "Dion",
    pseudo: "xavdino",   // identifiant Github?
    metsFavoris: [
      "tartare de saumon",
      "filet mignon",
      "Crevette bangbang"
    ],
    hobbies: [
      "Sport",
      "Jeux vidéo",
      "Art"
    ],
    stylesMusique: [
      "DnB",
      "Tech House",
      "Rap"
    ],
    urlsMusique: [             // 2 par style
      "https://open.spotify.com/track/1Mze7crzF9BWo82DiAsmjj?si=a0c032427cb04ddd",
      "https://open.spotify.com/track/1LIvdWNdKmHvU0FJvw2diN?si=1f30148c17e04809",
      "https://open.spotify.com/track/2QB15REBPc0fU9CypfD55r?si=79a924a2a24b4ea1",
      "https://open.spotify.com/track/1uXPu4aSDFPLzyNcH6ASD4?si=65496c89316b43eb",
      "https://open.spotify.com/track/2Fw5S2gaOSZzdN5dFoC2dj?si=f8426807c17c41c8",
      "https://open.spotify.com/track/2e3Ea0o24lReQFR4FA7yXH?si=536368068ca34189",
    ],
    robot: {
      x: -500,
      strNom: "Quest",
      afficher: function () {
        noStroke();
        //roue autre côter
        fill(19, 70, 100);
        quad(0, 310, 0, 290, this.x + 450, 290, this.x + 460, 305);

        fill(22, 24, 25);
        circle(this.x + 250, 265, 50);
        circle(this.x + 326, 265, 50);
        circle(this.x + 402, 265, 50);

        fill(0, 0, 0);
        circle(this.x + 245, 267, 50);
        circle(this.x + 321, 267, 50);
        circle(this.x + 397, 267, 50);

        //roue arr.
        fill(5, 10, 15);
        quad(this.x + 465, 285, this.x + 470, 280, this.x + 470, 225, this.x + 450, 215);

        //yeux
        fill(0, 0, 0);
        ellipse(this.x + 467, 190, 20, 32);
        fill(255, 255, 255);
        ellipse(this.x + 466, 190, 20, 30);
        fill(0, 0, 0);
        ellipse(this.x + 468, 195, 10, 20);

        //body
        fill(5, 10, 15);
        ellipse(this.x + 193, 150, 10, 111);
        fill(8, 127, 140);
        rect(this.x + 170, 175, 250, 70);
        fill(90, 170, 149);
        quad(this.x + 170, 175, this.x + 420, 175, this.x + 470, 160, this.x + 220, 160);
        quad(this.x + 420, 245, this.x + 420, 175, this.x + 470, 160, this.x + 470, 225);
        fill(11, 24, 35);
        quad(this.x + 420, 240, this.x + 420, 235, this.x + 470, 215, this.x + 470, 220);

        //antene
        fill(8, 10, 15);
        arc(this.x + 190, 90, 80, 80, 0, 180);
        fill(19, 103, 138);
        ellipse(this.x + 190, 90, 80, 10);
        triangle(this.x + 200, 90, this.x + 190, 20, this.x + 180, 90);
        fill(5, 10, 15);
        triangle(this.x + 195, 100, this.x + 190, 20, this.x + 185, 100);
        let intCpt = 0;
        let y = 90;
        while (intCpt <= 3) {
          fill(random(255), random(255), 255);
          ellipse(this.x + 190, y, 17, 2);
          intCpt = intCpt + 1;
          y = y - 7
        }
        //roue


        fill(63, 64, 65);
        circle(this.x + 200, 280, 50);
        circle(this.x + 276, 280, 50);
        circle(this.x + 352, 280, 50);
        circle(this.x + 470, 277, 50);

        fill(22, 24, 25);
        circle(this.x + 195, 282, 50);
        circle(this.x + 271, 282, 50);
        circle(this.x + 347, 282, 50);
        circle(this.x + 465, 279, 50);

        fill(69, 196, 176);
        circle(this.x + 195, 282, 30);
        circle(this.x + 271, 282, 30);
        circle(this.x + 347, 282, 30);
        circle(this.x + 465, 279, 30);


        //roue arr.
        fill(11, 24, 35);
        quad(this.x + 465, 285, this.x + 470, 280, this.x + 420, 245, this.x + 400, 245);
        circle(this.x + 465, 279, 15);
        //yeux
        arc(this.x + 410, 205, 50, 30, 90, 270);
        fill(255, 255, 255);
        ellipse(this.x + 410, 205, 20, 30);
        fill(0, 0, 0);
        ellipse(this.x + 412, 210, 10, 20);

        //bras
        fill(11, 24, 35);
        ellipse(this.x + 271, 255, 35, 75);
        ellipse(this.x + 347, 255, 35, 75);
        ellipse(this.x + 195, 255, 35, 75);

        fill(19, 103, 138);
        ellipse(this.x + 271, 230, 35, 75);
        ellipse(this.x + 195, 240, 35, 75);
        ellipse(this.x + 347, 240, 35, 75);

      },
      placerParagraphe: function () {
        /* positionnement et style de refP */
        refP.position(8, 315);
        refP.style('width', '590px');
        refP.style('height', '17px');
        refP.style('background-color', 'rgba(155,255,255,0.5)');
        refP.style('text-align', 'center');
        refP.style('padding', '5px');
      },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom;;
      },
      decorer: function () {
        background(0, 0, 0);

        let intCpt = 0;
        while (intCpt <= 30) {
          fill(255, 255, 255);
          circle(random(width), random(250), random(1, 4));
          intCpt = intCpt + 1;
        }
        fill(1, 32, 48);
        circle(300, 1450, 2500);

      },
      arriver: function () {
        if (this.x < -30) {
          this.x = this.x + 10;
        }
      },
    },
    descriptionIA: "Bonjour ! Mon nom est Quest, je suis un laboratoire roulant pour les scientifiques qui viennent étudier l’exoplanète du nom de TRAPPIST-1 d. Je suis équipé d’un système de communication ultra développé qui me permet d’envoyer et recevoir des informations venues de la terre en une fraction de seconde. Mon habitacle vitré permet à mes passagers de faire pousser des fruits et légumes et leur offre une vue paradisiaque.", // Entre 30 et 120 mots
    autorisePublication: true  // OU false
  },
  {
    prenom: "François",
    nom: "Perreault",
    pseudo: "phoenix-four", //github = true! ;)
    metsFavoris: ["Fondue Chinoise",
      "Soupe Thai",
      "Pudding Chommeur"],
    hobbies: [
      "Dungeons & Dragons,",
      "Jeu vidéo",
      "Marche en foret"
    ],
    stylesMusique: ["Orchestral Metal",
      "Folk Metal",
      "80s Retro ambiant"],
    urlsMusique: ["https://www.youtube.com/watch?v=UlJ2Beb5Dds",
      "https://www.youtube.com/watch?v=n499M4pgc5o",
      "https://www.youtube.com/watch?v=iijKLHCQw5o",
      "https://www.youtube.com/watch?v=sv29DzgiXZA",
      "https://www.youtube.com/watch?v=UedTcufyrHc",
      "https://www.youtube.com/watch?v=h7tpVaGSk-4",],
    robot: {
      x: -500,
      strNom: "Redditnot",
      pas: 10,

      afficher: function () {
        let col = color(225);
        fill(col)
        //Corp & Bras
        line(this.x + 25, 150, this.x + 80, 150);
        line(this.x + 100, 150, this.x + 80, 150);
        rect(this.x + 60, 150, 30, 60);
        circle(this.x + 25, 150, 10);
        circle(this.x + 100, 150, 10);

        //Jonction tête
        line(this.x + 60, 130, this.x + 46, 100);
        line(this.x + 90, 130, this.x + 102, 100);

        //Jambe
        line(this.x + 90, 190, this.x + 100, 220);
        line(this.x + 60, 190, this.x + 50, 220);
        //Pied
        circle(this.x + 100, 230, 30);
        circle(this.x + 50, 230, 30);
        //Tête du robot

        translate(width / 2, height / 2);
        rotate(PI / 4.0);
        rect(this.x + -290, -80, 40, 40);
        fill(255, 10, 20)
        circle(this.x + -280, -50, 15);
        circle(this.x + -260, -70, 8);
        fill(col)
      },
      arriver: function () {
        if (this.x <= 250) {
          this.x = this.x + this.pas;
        }
      },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est" + this.strNom;
      },
      decorer: function () {
        background(204, 204, 255);
        //Lumière
        fill(255, 255, 255)
        circle(300, -35, 100)
        //plancher
        fill(255, 255, 255, 255);
        rect(0, 200, 600, 150);
        //tapis
        fill(50, 50, 50)
        rect(0, 210, 200, 100)
        fill(40, 40, 40)
        rect(0, 220, 180, 80)
        //Bureau
        fill(193, 152, 58);
        rect(380, 180, 400, 100);
        //Ecran
        fill(0, 0, 0);
        rect(400, 140, 70, 40)
        //Pied d'écran
        fill(255, 255, 255)
        rect(428, 150, 15, 30);
      },

    }, // Objet robot
    descriptionIA: "Redditnot est un vrai champion de l'analyse de données. Son travail est de déterminer les changements d'habitude des utilisateurs du média social Reddit pour prédire les courants sociaux.De la lutte antiterroriste à la prédiction de l'apparition de nouveaux mouvements sociaux, notre machine parvient à faire le pont entre la collecte de données+ et la conception de stratégie pour des organismes divers. Malheureusement, notre cher ami a la fâcheuse habitude de se laisser distraire par du contenu non-prioritaire (Vidéo de chat, memes et autres futilités). Chez SpyCorp.inc, nous sommes certains que nous arriverons a redresser ses petits défauts et le rendre 100% opérationnel d'ici un an.", // Entre 30 et 120 mots
    autorisePublication: true  // OU false
  },
  {
    prenom: "Ugo",
    nom: "Nanini",
    pseudo: "gropogo",
    metsFavoris: ["Pizza", "Spaghetti", "Linguini"],
    hobbies: ["Jeux vidéos", "Tennis", "Pêche"],
    stylesMusique: ["Rock Italien", "Rap italien", "Italo disco"],
    urlsMusique: ["https://www.youtube.com/watch?v=QN1odfjtMoo&ab_channel=ManeskinVEVO",
      "https://www.youtube.com/watch?v=mSYpXal_QcA&ab_channel=infomic",
      "https://www.youtube.com/watch?v=tU_KbOs8w2o&ab_channel=SferaEbbastaVEVO",
      "https://www.youtube.com/watch?v=-9ZZ8pKqjgc&ab_channel=ValePainOfficial",
      "https://www.youtube.com/watch?v=c6x5vyWpw-Q&list=PL73BCD65D197CD25B&ab_channel=disksalv",
      "https://www.youtube.com/watch?v=9Zbrls6n6no&list=PL73BCD65D197CD25B&index=2&ab_channel=iktf",
    ],
    robot: {
      x: -350,
      pas: 5,
      strNom: "Rocketbot",
      decorer: function () {
        fill(135, 206, 235);
        rect(0, 0, 600, 300);

        fill(124, 252, 0);
        rect(0, 300, 600, 50);

        fill(186, 140, 99);
        rect(527.5, 285, 15, 30);

        fill(9, 82, 40);
        triangle(535, 220, 555, 285, 515, 285);
      },
      afficher: function () {
        fill(202);
        triangle(this.x + 200, 10, this.x + 250, 50, this.x + 150, 50);

        fill(235);
        rect(this.x + 150, 50, 100, 40);

        fill(255);
        circle(this.x + 170, 70, 20);

        fill(0);
        line(this.x + 180, 60, this.x + 160, 55);
        line(this.x + 240, 55, this.x + 220, 60);

        fill(0);
        circle(this.x + 170, 70, 10);

        fill(255);
        circle(this.x + 230, 70, 20);

        fill(0);
        circle(this.x + 230, 70, 10);

        fill(235);
        arc(this.x + 200, 80, 10, 10, 0, PI);

        fill(202);
        rect(this.x + 177.5, 90, 45, 30);

        fill(235);
        rect(this.x + 100, 120, 200, 100, 25, 25, 0, 0);

        quad(this.x + 100, 220, this.x + 300, 220, this.x + 250, 280, this.x + 150, 280);

        rect(this.x + 220, 280, 30, 50);

        rect(this.x + 150, 280, 30, 50);

        rect(this.x + 120, 330, 60, 20);

        rect(this.x + 220, 330, 60, 20);

        fill(50);
        arc(this.x + 100, 170, 50, 60, HALF_PI, PI + HALF_PI);

        fill(235);
        rect(this.x + 25, 165, 50, 10);

        fill(50);
        circle(this.x + 25, 170, 30);

        fill(50);
        arc(this.x + 300, 170, 50, 60, PI + HALF_PI, HALF_PI);

        fill(235);
        rect(this.x + 325, 165, 50, 10);

        fill(50);
        circle(this.x + 375, 170, 30);
    },

      arriver: function () {
        if (this.x <= 85) {
          this.x = this.x + this.pas;
        }
      },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est: " + this.strNom;
      }
    }, // Objet robot
    descriptionIA: "Rocketbot est conçu pour faire des voyages extrêmement rapide dans l'espace afin de recueilli un maximum d'information sur ce vaste univers. Il est capable d'aller plus loin que l'on a jamais été dans notre système solaire à une vitesse fulgurante.", // Entre 30 et 120 mots
    autorisePublication: true // OU false
  }, {
  prenom: "Gabriel",
  nom: "Parent",
  pseudo: "gab64",
  metsFavoris: ["sushis", "pâtes", "pizza"],
  hobbies: ["lego", "jeux-video", "modèles à coller"],
  stylesMusique: ["rock", "pop rock"],
  urlsMusique: ["https://www.youtube.com/watch?v=ScNNfyq3d_w",
    "https://www.youtube.com/watch?v=ZgB2qItM76g",
    "https://www.youtube.com/watch?v=ysSxxIqKNN0",
    "https://www.youtube.com/watch?v=D9G1VOjN_84"],
  robot: {
    x: -400,
    strNom: "bb-7",
    afficher: function () {
      //couleur de remplissage:bleu
      //tête
      fill(0)
      arc(this.x + 300, 146, 80, 90, PI, 0, CHORD);
      fill(this.x + 255, 0, 0);
      circle(this.x + 300, 125, 15);
      fill(220);
      rect(this.x + 313, 74, 05, 30);

      //corps
      fill(0);
      circle(this.x + 300, 199, 105);

      //intérieur corps
      fill(220);
      circle(this.x + 301, 200, 70);
      fill(80);
      rect(this.x + 285, 185, 30, 30);

    },
    arriver: function () {
      if (this.x < 0) {
        this.x = this.x + 5
      }
    },
    direBonjour: function () {
      refP.innerText = "Bonjour mon nom est " + this.strNom;
    },
    decorer: function () {
      background(0, 0, 255);
      fill(222, 184, 135);
      rect(0, 250, 600, 600);
    },
  }, // Objet robot
  descriptionIA: "Bb-7 est un robot d'infiltration qui possède un éventail de capacité comme vision nocturne, armes, outil de défense pour protéger dans le futur la population sous le service de l'armée.",
  // Entre 30 et 120 mots
  autorisePublication: true
},
{
  prenom: "Raphaël",
  nom: "Labbé-Latreille",
  pseudo: "skybirds4545",
  metsFavoris: [
    "Lasagne",
    "Casolette",
    "Général Thao"
  ],
  hobbies: [
    "Jeux vidéos",
    "Peinture"
  ],
  stylesMusique: [
    "Glitch Hop",
    "Orchestral",
    "Dubstep"
  ],
  urlsMusique: [
    "https://www.youtube.com/watch?v=59M5z0c8YtE",
    "https://www.youtube.com/watch?v=usXhiWE2Uc0",
    "https://www.youtube.com/watch?v=ADn4S1ajMAI",
    "https://www.youtube.com/watch?v=FEiTgU-hM5k",
    "https://www.youtube.com/watch?v=twJd1CXWb8M",
    "https://www.youtube.com/watch?v=O8gTHqCWuyw",
  ],
  robot: {
    x: -450,
    xB1: -750,
    xB2: -700,
    xB3: -950,
    xEB: -200,
    r: 224,
    g: 255,
    b: 255,
    sens: 1,
    intClick: 0,
    strNom: "A-315",
    decorer: function () {
      background(224, 255, 255)
      noStroke(0)
      fill(255, 228, 176)
      rect(0, 220, 600, 300)
      fill(255, 228, 196);
      rect(0, 240, 600, 300);
    },
    afficher: function () {
      //robot supplémentaire pour envahir
      strokeWeight(1);
      stroke(170);
      fill(170);
      circle(this.xEB, 220, 60);
      rect(this.xEB - 17, 168, 30, 20);
      fill(this.r, this.g, this.b)
      rect(this.xEB - 13, 173, 28, 10);
      stroke(120)
      line(this.xEB, 168, this.xEB - 15, 140)

      //robot numéro trois
      stroke(170);
      fill(170);
      circle(this.xB2 + 200, 220, 60);
      rect(this.xB2 + 183, 168, 30, 20);
      fill(this.r, this.g, this.b)
      rect(this.xB2 + 187, 173, 28, 10);
      stroke(120)
      line(this.xB2 + 200, 168, this.xB2 + 185, 140)
      //robot numéro deux 
      stroke(190)
      //corp
      fill(190);
      circle(this.xB1 + 90, 230, 90);
      //tête
      rect(this.xB1 + 70, 150, 40, 30);
      fill(this.r, this.g, this.b)
      rect(this.xB1 + 75, 158, 38, 15);
      //antenne
      stroke(40);
      line(this.xB1 + 90, 150, this.xB1 + 70, 110)
      //robot numéro 4
      stroke(180)
      fill(180);
      circle(this.xB3 + 470, 240, 60);
      rect(this.xB3 + 453, 188, 30, 20);
      fill(this.r, this.g, this.b)
      rect(this.xB3 + 457, 193, 28, 10);
      stroke(80);
      line(this.xB3 + 470, 188, this.xB3 + 450, 165)
      //robot numéro un
      stroke(0)    //contour qui le différencit des autres
      //boule  
      fill(200);
      circle(this.x + 310, 240, 115);
      //tête
      rect(this.x + 280, 140, 55, 40);
      fill(this.r, this.g, this.b)
      rect(this.x + 280 + this.sens * 10, 150, 52.5, 20);
      //antennes
      line(this.x + 310, 140, this.x + 310 + this.sens * -20, 90);
      line(this.x + 310, 140, this.x + 310 + this.sens * -40, 80);


    },
    arriver: function () {
      //S'assure qu'ils avancent normallement.
      if (this.intClick <= 3) {
        if (this.x < 0) { this.x = this.x + 3 }
        if (this.xB1 < 0) { this.xB1 = this.xB1 + 3 }
        if (this.xB2 < 0) { this.xB2 = this.xB2 + 2 }
        if (this.xB3 < 0) { this.xB3 = this.xB3 + 4 }
      }
      //Oublie la première partie pour déclarer les nouvelles commande.
      if (this.intClick > 3) {
        this.envahirÉcran()
        this.invasion()
      }
    },
    direBonjour: function () {
      refP.innerText = "Bonjour, notre unité s'appelle " + this.strNom;
      this.intClick++
    },
    envahirÉcran: function () {
      //Announce
      refP.innerText = "Nous vous avons trouvé";
      //Change la couleur des yeux
      this.r = 255
      this.g = 0
      this.b = 0
    },
    invasion: function () {
      //avancent comme une mass vers la droite et reviens s'ils dépassent
      if (this.xEB < width) { this.xEB = this.xEB + 8 }
      if (this.xEB >= width) { this.xEB = -400 }
      if (this.xB1 < width) { this.xB1 = this.xB1 + 4 }
      if (this.xB1 >= width) { this.xB1 = -400 }
      if (this.xB2 < width) { this.xB2 = this.xB2 + 6 }
      if (this.xB2 >= width) { this.xB2 = -200 }
      if (this.xB3 < width) { this.xB3 = this.xB3 + 10 }
      if (this.xB3 >= width) { this.xB3 = -400 }
      //Le robot principal veut suivre la souris
      if (this.x + 300 < mouseX) {
        this.x = this.x + 4
        this.sens = 1
      }
      if (this.x + 300 > mouseX) {
        this.x = this.x - 4
        this.sens = -1
      }
    }
  }, // Objet robot
  descriptionIA: "Ceci est la légion A-315. En tant que pensée collective, ils peuvent facilement se séparer pour couvrir une plus grande zone et mieux trouvé leur cible. If (blnTargetFound == true) { 'ATTACK' }.", // Entre 30 et 120 mots
  autorisePublication: true  // OU false
},
  {
    prenom: "Sarah",
    nom: "Al Mahsani",
    pseudo: "sarahalm02",
    metsFavoris: ["sushi",
      "tarte aux pommes",
      "saumon"],
    hobbies: ["jeux vidéo", "lire", "voyager"],
    stylesMusique: ["pop",
      "rock",
      "rap"],
    urlsMusique: ["https://www.youtube.com/watch?v=pok8H_KF1FA&ab_channel=dojacatVEVO",
      "https://www.youtube.com/watch?v=gNi_6U5Pm_o&ab_channel=OliviaRodrigoVEVO",
      "https://www.youtube.com/watch?v=hP7ttJ4UAFc&ab_channel=RinaSawayamaVEVO",
      "https://www.youtube.com/watch?v=9Ko-nEYJ1GE&ab_channel=dojacatVEVO",
      "https://www.youtube.com/watch?v=pok8H_KF1FA&ab_channel=dojacatVEVO",
      "https://www.youtube.com/watch?v=BC19kwABFwc&ab_channel=DuaLipa"],
    robot: {

      x: - 250,
      strNom: "Lala",

      afficher: function () {
        fill(200, 8, 10);
        //tête
        circle(this.x + 290, 60, 60);
        //oeil
        fill(10, 100, 10);
        circle(this.x + 290, 60, 25);
        fill(200, 30, 50);
        circle(this.x + 290, 60, 10);
        //cou
        fill(0, 0, 10);
        circle(this.x + 290, 105, 30);
        //pied
        fill(200, 9, 50);
        arc(this.x + 290, 200, 80, 100, -0.7, PI + QUARTER_PI, CHORD);
        //corps
        fill(200, 9, 0);
        rect(this.x + 240, 121, 100, 60);
      },

      arriver: function () {
        if (this.x < 0) {
          this.x += 3;
        }
      },

      direBonjour: function () {
        refP.innerText = "Bonjour mon nom est " + this.strNom;
      },

      decorer: function () {
        rect(0, 0, 600, 100);
        fill(33, 3, 10);
        rect(0, 260, 600, 60);
        fill(0, 0, 0);
      }

    },
    descriptionIA: "Le robot Loulou est un robot de ménage intelligent. Loulou est équipé de capteurs de proximité et de vision par ordinateur qui lui permettent de percevoir et de naviguer dans son environnement de manière autonome, de plus son interface de commande et de communication permet à son utilisateur de lui donner des instructions et de recevoir des mises à jour sur ses activités. Il peut faire n'importe quelle tâche ménagère possible dans une maison; il suffit de demander !", // Entre 30 et 120 mots
    autorisePublication: true  // OU false
  },
  {
    prenom: "Élodie",
    nom: "Bonneau",
    pseudo: "progIssues",
    metsFavoris: [
      "spaghetti",
      "chocolat",
      "pain"
    ],
    hobbies: [
      "gym",
      "films",
      "cuisiner"
    ],
    stylesMusique: [
      "old school rap",
      "funk rock",
      "rock"
    ],
    urlsMusique: [
      "https://www.youtube.com/watch?v=1V_xRb0x9aw",
      "https://www.youtube.com/watch?v=S9bCLPwzSC0",
      "https://www.youtube.com/watch?v=Sb5aq5HcS1A",
      "https://www.youtube.com/watch?v=0kT5w27YxyI",
      "https://www.youtube.com/watch?v=6hzrDeceEKc",
      "https://www.youtube.com/watch?v=ErvgV4P6Fzc",
    ],
    robot: {
      strNom: "Steelman",

      x: -450,
      afficher: function () {
        //la tête
        fill(112, 128, 144);
        square(this.x + 275, 50, 50);

        //première antenne
        line(this.x + 300, 50, this.x + 300, 30);
        square(this.x + 295, 25, 10);

        //deuxième antenne
        line(this.x + 325, 75, this.x + 345, 75);
        square(this.x + 345, 70, 10);

        //troisième antenne
        line(this.x + 250, 75, this.x + 275, 75);
        square(this.x + 250, 70, 10);

        //yeux et bouche
        push();
        fill(255);
        rect(this.x + 285, 70, 10, 5);
        rect(this.x + 305, 70, 10, 5);
        rect(this.x + 290, 80, 20, 5);
        pop();

        //le corps
        //cou
        rect(this.x + 285, 100, 30, 5);

        //haut du corps
        square(this.x + 262.5, 105, 75);

        //bassin
        rect(this.x + 275, 180, 50, 5);

        //bas du coprs
        rect(this.x + 262.5, 185, 75, 30);

        // les jambes
        circle(this.x + 274.5, 228, 25);
        rect(this.x + 262, 240.5, 25, 50);
        circle(this.x + 325.5, 228, 25);
        rect(this.x + 313, 240.5, 25, 50);
      },

      arriver: function () {
        if (this.x < 0) {
          this.x = this.x + 5;
        } else {
          //le bras gauche
          push();
          circle(this.x + 250, 118.5, 25);
          translate(this.x + 234, 117);
          rotate(45);
          rect(this.x + 0, 0, 20, 60);
          pop();

          // le bras droit
          circle(this.x + 350, 118.5, 25);
          translate(this.x + 355, 134);
          rotate(-45);
          rect(this.x + 0, 0, 20, 60);
        }
      },

      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom;
      },
      decorer: function () {
        fill(176, 196, 222);
        rect(0, height, width, -100);
      },
    },

    descriptionIA: "Steelman, mon robot, est conçu pour assister les personnes âgés avec des mobilités réduites ou des maladies qui diminuent leur indépendance. Ce robot remplacera les infirmières en une version plus performante car ils n'ont pas besoin de repos. ",
    autorisePublication: true  // OU false
  },
  {
    prenom: "Maxime-Olivier",
    nom: "Bourgeois",
    pseudo: "maxoproduction",
    metsFavoris: ["Lasagne",
      "Pâte saucisses fumées",
      "pâté chinois"],
    hobbies: ["snowboard", "jeux vidéos", "musique"],
    stylesMusique: ["Rap français",
      "Rock",
      "Éléctro"],
    urlsMusique: ["https://www.youtube.com/watch?v=lKsAdTJtdcg",
      "https://youtu.be/F8do1V5ivbI?t=39",
      "https://www.youtube.com/watch?v=WxnN05vOuSM",
      "https://www.youtube.com/watch?v=X4bgXH3sJ2Q",
      "https://youtu.be/Kh4mvsw6S88",
      "https://www.youtube.com/watch?v=AFSLGv4AMs4",],
      robot: {
        x: -400,
        strNom: "Rescue-Bot.",
        afficher: function () {
          noStroke();
          //   corps
          fill(255, 200, 221);
          rect(this.x + 275, 130, 50, 150, 20);
  
          //   Base
          fill(255, 176, 204);
          rect(this.x + 200, 265, 200, 30, 20);
  
          //   tete
          fill(237, 242, 244);
          rect(this.x + 225, 100, 150, 150, 20);
  
          //   Yeux
          fill(255);
          circle(this.x + 250, 100, 25);
          circle(this.x + 350, 100, 25);
          noFill();
          fill(0);
          circle(this.x + 350, 100, 10);
          circle(this.x + 250, 100, 10);
        },
  
        arriver: function () {
          if (this.x < 0) {
            this.x += 5;
          }
        },
  
        direBonjour: function () {
          console.log("Mon nom est " + this.strNom);
        },
        direBonjour: function () {
          refP.innerText = "Bonjour mon nom est " + this.strNom;
        },
        decorer: function () {
          fill(176, 196, 222);
          rect(0, height, width, -100);
        },
      }, // Objet robot
    descriptionIA: "Rescue-Bot. très avancé capable d'apprendre et de s'adapter à n'importe quelle situation. Il serait capable de reconnaître des visages humains, de comprendre des conversations et de s'exprimer de manière naturelle. Il aurait des capteurs pour détecter les obstacles et les éviter, ainsi que des moteurs pour se déplacer et interagir avec son environnement. Il serait également capable d'analyser des données, de prendre des décisions et de les appliquer avec une grande précision. Enfin, il serait équipé d'un bras robotisé pour effectuer des tâches complexes et pour manipuler des objets.", // Entre 30 et 120 mots
    autorisePublication: true  // OU false
  },
  {
    prenom: "Perle",
    nom: "Costedoat",
    pseudo: "uwu",
    metsFavoris: [
      "Macaronis",
      "Sushis",
      "Crêpes"
    ],
    hobbies: [
      "lire",
      "jouer a genshin",
      "dormir"
    ],
    stylesMusique: [
      "pop",
      "k-pop",
      "indie"
    ],
    urlsMusique: [
      "https://www.youtube.com/watch?v=hyj4JFSErrw",
      "https://www.youtube.com/watch?v=DXGelmwqfm4",
      "https://www.youtube.com/watch?v=TQTlCHxyuu8",
      "https://www.youtube.com/watch?v=EaswWiwMVs8",
      "https://www.youtube.com/watch?v=nyuo9-OjNNg",
      "https://www.youtube.com/watch?v=mTLQhPFx2nM",
    ],
    robot: {
      x: -350,
      sens: 0,
      strNom: "marie",
      afficher: function () {

        //remplissage mauve//
        fill(90, 0, 90);

        //tête du robot//
        circle(this.x + 300, 100, 50);

        //le corps//
        rect(this.x + 276, 125, 50, 100);

        //jambe//
        fill("#22222")
        line(this.x + 300, 195, this.x + 300, 700);

        //bras droit//
        rect(this.x + 251, 125, 25, 70);

        //bras gauche//
        rect(this.x + 326, 125, 25, 70);

        //oeil
        fill("#FFFFFF");
        circle(this.x + 300, 100, 20);

        fill("#222222");
        circle(this.x + 300, 100, 9);

        //sol
        fill("#22222");
        rect(0, 225, width, 150);
      },

      decorer: function () {
        //sol
        fill("#22222");
        rect(0, 225, width, 150);
        background(209, 237, 249);
      },
      arriver: function () {
        if (this.x < 0) {
          this.x += 5;
        }
      },
      direBonjour: function () {
        refP.innerText = "Bonjour mon nom est " + this.strNom;
      }
    }, // Objet robot
    descriptionIA: "Marie, notre petit robot doté d'une intelligence artificielle avancée, est là pour vous divertir avec ses blagues médiocres (mais tellement charmantes). Grâce à ses capteurs de proximité et de vision par ordinateur, il peut naviguer de manière autonome dans son environnement et vous raconter des blagues qui vous feront (peut-être) rire. Et si vous avez besoin de lui donner des instructions, pas de problème, il a une interface de commande et de communication qui vous permet de lui parler directement.", // Entre 30 et 120 mots
    autorisePublication: true  // OU false
  },
  {
    prenom: "Kim",
    nom: "Dion",
    pseudo: "skye506",
    metsFavoris: ["crêpe", "lasagne"],
    hobbies: ["dessin", "impression 3D"],
    stylesMusique: ["pop", "rock", "kpop"],
    urlsMusique: [],
    robot: {
      x: -350,
      strNom: "D-O",
      afficher: function () {
        //circle blanc (corps)
        stroke(0, 0, 0);
        fill(255, 255, 255);
        // circle(250, 325, 200);
        circle(this.x + 250, 225, 130);

        //circle vert (corps)
        stroke(0, 0, 0);
        fill(77, 172, 71);
        // circle(250, 325, 150);
        circle(this.x + 250, 225, 100);

        //1 ligne noir (corps)
        stroke(0, 0, 0);
        // line(180, 300, 320, 300);
        line(this.x + 202, 210, this.x + 298, 210);

        //2 ligne noir (corps)
        stroke(0, 0, 0);
        // line(175, 325, 325, 325);
        line(this.x + 200, 225, this.x + 300, 225);

        //3 ligne noir (corps)
        stroke(0, 0, 0);
        // line(180, 350, 320, 350);
        line(this.x + 205, 247, this.x + 295, 247);

        //triangle (tête)
        // triangle(150, 190, 325, 100, 325, 240);
        triangle(this.x + 180, 140, this.x + 310, 90, this.x + 310, 170);

        //rectangle noir (corps)
        fill(0, 0, 0);
        // rect(225, 300, 55, 93);
        rect(this.x + 238, 225, 27.5, 46.5);

        // cercle noir (tête)
        // circle(270, 155, 20);
        circle(this.x + 270, 120, 12);

        //ligne grise (corps)
        stroke(70, 70, 70);
        // line(252, 225, 252, 400);
        line(this.x + 252, 160, this.x + 252, 275);

        //cercle gris (corps)
        fill(70, 70, 70);
        circle(this.x + 252, 225, 20);

        // entaine (tête)
        stroke(0, 0, 0);
        // line(325, 150, 350, 80);
        line(this.x + 310, 135, this.x + 350, 80);

        // cercle entaine (tête)
        // circle(350, 80, 10);
        circle(this.x + 350, 80, 10);
      },

      decorer: function () {
        background(0, 0, 255);

        //rectangle pour le sol
        fill(100, 100, 100);
        rect(0, 290, width, 20);
      },
      arriver: function () {
        if (this.x <= 0) {
          // this.x=++
          this.x += 5;
        }
      },

      direBonjour: function () {
        refP.innerText = "bonjour, mon nom est" + this.strNom;
      },
    }, // Objet robot
    descriptionIA: "D-O est un robot capable d'aider les jeunes enfants atteints d'une neurodiversité. Il est équipé d'une intelligence artificielle capable de trouver le meilleur moyen d'aider. Celle-ci apprend selon le trouble de l'enfant. Il s'adapte selon les apprentissages et les difficultés de son utilisateur.", // Entre 30 et 120 mots
    autorisePublication: true  // OU false
  },
  {
    prenom: "Olivier",
    nom: "Duclos",
    pseudo: "oduclos",
    metsFavoris: ["Pizza", "Poulet", "Hamburger"],
    hobbies: [],
    stylesMusique: [
      "Rock",
      "Punk"
    ],
    urlsMusique: [             // 2 par style
      "https://www.youtube.com/watch?v=344BmuRw4ZU",
      "https://www.youtube.com/watch?v=XZuM4zFg-60",
      "https://www.youtube.com/watch?v=WdoXZf-FZyA",
      "https://www.youtube.com/watch?v=7gVNNPv8w4Q",
    ],
    robot: {
      x: -350,
      strNom: "R4be",
      afficher: function () {
        //CORPS
        stroke(0);
        strokeWeight(3);
        fill(255, 120, 0);
        triangle(225, 240, 375, 240, 300, 100);
        //TÊTE
        fill(255, 120, 0);
        circle(300, 130, 80);
        stroke(5);
        strokeWeight(3);
        //OEIL
        fill(255);
        square(275, 110, 15);
        square(310, 110, 15);
        //BOUCHE
        fill(0);
        circle(300, 150, 25);
        fill(255);
        rect(280, 145, 40, 13, 40, 40, 40, 40);
        //LIGNE BODY
        stroke(0);
        line(259, 180, 341, 180);
        line(249, 200, 351, 200);
        line(239, 220, 361, 220);
        //LIGNE BOUCHE
        strokeWeight(2);
        line(280, 151, 320, 151);
        //LIGNE TÊTE
        strokeWeight(4);
        line(274, 60, 274, 99);
        //CERCLE SUR LIGNE
        fill(0);
        circle(274, 55, 10);
      },
      decorer: function () {
        fill(185, 65, 33);
        rect(0, 250, 600, 200);
    
        fill(200, 100, 50);
        rect(0, 0, 600, 250);
      },
      arriver: function () {
        if (this.x <= 0) {
          // this.x=++
          this.x += 5;
        }
      },
      direBonjour: function () {
        refP.innerText = "bonjour, mon nom est" + this.strNom;
      }
      
    }, // Enlever les guillemets
    descriptionIA: "Mon nom est R4be, je suis un cône qui est utilisé près des chantiers de construction. Ma boîte sonore rappelle aux automobilistes de ralentir pour améliorer la sécurité des travailleurs.", // Entre 30 et 120 mots
    autorisePublication: false  // OU false
  },
  {
    prenom: "Antoine",
    nom: "Labarre",
    pseudo: "ARTA",
    metsFavoris: [
      "pâtes",
      "poutine",
      "chocolat"
    ],
    hobbies: [
      "jouer aux jeux vidéos",
      "regarder des films",
      "jouer au soccer",
      "aller au gym",
    ],
    stylesMusique: [
      "pop",
      "rock",
      "pop rock"
    ],
    urlsMusique: [
      "https://www.youtube.com/watch?v=JGwWNGJdvx8",
      "https://www.youtube.com/watch?v=IcrbM1l_BoI",
      "https://www.youtube.com/watch?v=v2AC41dglnM",
      "https://www.youtube.com/watch?v=WyF8RHM1OCg",
      "https://www.youtube.com/watch?v=7wtfhZwyrcc",
      "https://www.youtube.com/watch?v=TO-_3tck2tg",
    ],
    robot: {
      x: -350,
      strNom: "A7-L9",
      afficher: function () {
        stroke(0);

        //tête
        fill(200, 200, 200);
        arc(this.x + 300, 100, 80, 80, PI, 0, CHORD);

        //corps
        fill(0, 0, 255);
        rect(this.x + 260, 100, 80, 85, 0);

        //jambes
        fill(255, 0, 0);
        rect(this.x + 240, 100, 20, 115, 20);
        rect(this.x + 340, 100, 20, 115, 20);
        //pieds
        fill(200, 0, 0);
        noStroke();
        rect(this.x + 234, 205, 34, 35, 5);
        rect(this.x + 334, 205, 34, 35, 5);
        circle(this.x + 251, 210, 35);
        circle(this.x + 351, 210, 35);
        //square(this.x + 230, 200, 40, 70, 55, 5, 5);
        //square(this.x + 330, 200, 40, 70, 55, 5, 5);

        //oeil
        fill(0, 200, 0);
        circle(this.x + 300, 80, 20);

        noStroke();
      },
      arriver: function () {
        if (this.x < 0) {
          this.x = this.x + 3;
        }
      },
      direBonjour: function () {
        refP.innerText = "Bonjour, je suis " + this.strNom;
      },
      decorer: function () {
        background(0, 153, 153);
        fill(200, 200, 200);
        rect(0, 200, width, 70);
        fill(0, 200, 0);
        noStroke();
      },
    },
    descriptionIA: "A7-L9, le robot, est conçu pour réparer tout ce qui est mécanique et électronique. Il peut aussi servir en tant que assistant dans tous les domaines. En gros, c'est un robot à tout faire.",
    autorisePublication: true
  },
  {
    prenom: "Maxime",
    nom: "Lebrun",
    pseudo: "maxamax",
    metsFavoris: ["Poutine", "Lasagne", "Pizza"],
    hobbies: ["Jeux-video", "Hockey", "Cinéma"],
    stylesMusique: ["Rap", "Rock", "Pop"],
    urlsMusique: [
      "https://www.youtube.com/watch?v=Zl64MRAqQxk",
      "https://www.youtube.com/watch?v=Obim8BYGnOE",
      "https://www.youtube.com/watch?v=CD-E-LDc384",
      "https://www.youtube.com/watch?v=Ckom3gf57Yw",
      "https://www.youtube.com/watch?v=dvgZkm1xWPE",
      "https://www.youtube.com/watch?v=d020hcWA_Wg"
    ],
    robot: {
      // attributs
      x: -450,
      strNom: "P1NGU",

      // méthodes
      afficher: function () { 
        //ligne pour l'antenne;
        line(this.x + 320, 50, this.x + 300, 100);
        // L'antenne

        fill(220, 30, 40);
        circle(this.x + 320, 50, 20);
        //tête

        fill(50, 50, 50);
        circle(this.x + 300, 100, 50);

        //L'oeil du robot
        fill(255, 255, 255);
        circle(this.x + 300, 100, 20);
        fill(50, 50, 50);
        circle(this.x + 300, 100, 10);

        //Cou du robot
        line(this.x + 300, 125, this.x + 300, 150);

        //corps du robot
        fill(50, 50, 50);
        rect(this.x + 272, 150, 60, 60);

        //cercle dans le corps du robot
        circle(this.x + 300, 180, 30);
        fill(255, 255, 255);
        circle(this.x + 300, 180, 15);

        //bras gauche
        line(this.x + 250, 200, this.x + 271, 160);
        circle(this.x + 250, 200, 15);
        //bras droit

        line(this.x + 330, 160, this.x + 360, 200);
        circle(this.x + 360, 200, 15);
      },
      arriver: function () {
        if (this.x <= 0) {
          this.x = this.x + 3;
        }
      },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est: " + this.strNom;
      },
      decorer: function () {
        fill(200, 200, 200);
        rect(0, 250, 600, 200);

        fill(200, 100, 50);
        rect(0, 0, 600, 250);
      },
    }, // Objet robot
    descriptionIA: "P1NGU aka le pingouin des banquises nordiques, le robot, est conçu de sorte à ce qu'il détecte le réchauffement du climat dans son coin du monde. De ce fait, il pourra ensuite transmettre ses données récoltées à ses amis les penguins qui eux, les transmettront aux scientifiques. Tout cela dans le but de prendre les démarches nécessaires pour que les scientifiques puissent sauver P1NGU ainsi que ses amis, qui depuis des décennies souffrent.", // Entre 30 et 120 mots
    autorisePublication: true
  },
  {
    prenom: "Cloé",
    nom: "Ouellette",
    pseudo: "CAANgrl17",
    metsFavoris: [
      "pizza",
      "creme glacée",
    ],
    hobbies: [
      "photographie",
      "planche à neige",
      "randonnée",
      "camping",
      "karting",
    ],
    stylesMusique: [
      "country",
    ],
    urlsMusique: [
      "https://www.youtube.com/watch?v=TDpOcp98b5k",
      "https://www.youtube.com/watch?v=VZnA-6BVN7Y",
    ],
    robot: {
      x: -300,
      strNom: "DVD2",
      pas: 5,

      afficher: function () {

        //couleur de remplissage: bleu
        fill(77, 166, 255);
        stroke(1)
        strokeWeight(1)

        //antenne
        triangle(this.x + 300, 30, this.x + 290, 40, this.x + 310, 40);
        line(this.x + 300, 40, this.x + 300, 55);

        //tete et oeil(triangle)
        square(this.x + 270, 55, 60);
        triangle(this.x + 300, 65, this.x + 280, 90, this.x + 320, 90)

        //premier rectangle + bras
        rect(this.x + 250, 130, 100, 40);
        line(this.x + 210, 150, this.x + 250, 150)
        line(this.x + 390, 150, this.x + 350, 150)

        //deuxieme rectangle (corps)
        rect(this.x + 250, 180, 100, 40);

        //arc (roue)
        fill(0, 0, 0)
        arc(this.x + 300, 220, 80, 80, 0, 3.14);

        //lignes (corps)
        strokeWeight(3)
        line(this.x + 300, 116, this.x + 300, 129);
        line(this.x + 300, 171, this.x + 300, 179);

        //oeil (point)
        strokeWeight(6)
        point(this.x + 300, 80)

        //bouche
        strokeWeight(1)
        noFill()
        stroke(255)
        arc(this.x + 300, 100, 30, 20, 0, 3.14)

      },

      arriver: function () {
        if (this.x < 0) {
          this.x = this.x + this.pas;
        }
      },

      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom + "!";
      },

      decorer: function () {
        strokeWeight(0);

        //arrière-plan haut ("ciel" bleu)
        fill(219, 234, 248);
        rect(0, 0, 600, 210);

        //arrière-plan bas ("gazon" vert)
        fill(23, 111, 0);
        rect(0, 210, 600, 140);

        //Batisses arrieres
        fill(68, 68, 68);
        rect(30, 100, 30, 110);
        fill(243, 192, 0);

        let premierY = 105;
        for (let intCpt = 0; intCpt < 7; intCpt++) {
          square(35, premierY, 5);
          square(48, premierY, 5);
          premierY = premierY + 15;
        };

        fill(78, 78, 78);
        rect(65, 120, 25, 90);
        fill(243, 202, 49);

        let troisiemeY = 125;
        for (let intCpt = 0; intCpt < 5; intCpt++) {
          square(70, troisiemeY, 5);
          square(80, troisiemeY, 5);
          troisiemeY = troisiemeY + 15;
        };

        fill(73, 73, 73);
        rect(85, 80, 30, 130);
        fill(225, 178, 0);

        let cinquiemeY = 85;
        for (let intCpt = 0; intCpt < 8; intCpt++) {
          square(90, cinquiemeY, 5);
          square(103, cinquiemeY, 5);
          cinquiemeY = cinquiemeY + 15;
        };

        fill(68, 68, 68);
        rect(120, 150, 30, 60);
        fill(243, 192, 0);

        let septiemeY = 155;
        for (let intCpt = 0; intCpt < 4; intCpt++) {
          square(126, septiemeY, 6);
          square(138, septiemeY, 6);
          septiemeY = septiemeY + 15;
        };

        //lumiere + vaisseau
        fill(255, 240, 144, 150)
        triangle(70, 290, 500, 50, 400, 290);
        fill(217, 142, 157);
        ellipse(485, 50, 30, 10);
        stroke(100, 0, 20);
        strokeWeight(1);
        fill(124, 0, 24);
        ellipse(480, 60, 90, 20);

      },

    }, // Objet robot
    descriptionIA: "À robot DVD2, sa spécialité, ce sont les films. Tu es dans le bois? Dans le désert? En montagne? Et tu as une envie soudaine d'écouter un film? La bonne nouvelle est que si tu es accompagné de DVD2, tu pourras en écouter un sans problème. DVD2 est une bibliothèque sur roue avec une tonne de films à ta disposition. Et il ne possède pas en lui que des simples titres, il a un projecteur intégré au niveau de son œil qui lui permet de projeter n'importe quel film à n'importe quel endroit et à toute heure. N’est-ce pas formidable? ",
    autorisePublication: true  // OU false
  },

  {
    prenom: "Axel",
    nom: "Roberge",
    pseudo: "gossipProg",
    hobbies: ["sport", "gaming", "dessin", "mode", "garçons", "nourriture"],
    metsFavoris: [
      "Sushi",
      "Bavette de boeuf",
      "Hamburger"
    ],
    stylesMusique: [
      "Hip-Hop",
      "R&B",
      "Pop"
    ],
    urlsMusique: [             // 2 par style
      "https://www.youtube.com/watch?v=88jaOGIXnnc&ab_channel=SleepyHallow",
      "https://www.youtube.com/watch?v=SPlOfpaY_qc&ab_channel=SleepyHallowVEVO",
      "https://www.youtube.com/watch?v=3nweeAWiHxQ&ab_channel=GoldCoastVibes",
      "https://www.youtube.com/watch?v=y7ogiYZDsLI&ab_channel=ImanProductions",
      "https://www.youtube.com/watch?v=gNi_6U5Pm_o&ab_channel=OliviaRodrigoVEVO",
      "https://www.youtube.com/watch?v=5GJWxDKyk3A&ab_channel=BillieEilishVEVO",
    ],
    robot: {
      x: -400,
      strNom: "Bubble",
      intClick: 1,

      afficher: function () {
        let orange = color(250, 70, 20);
        let blanc = color(255, 255, 255);
        let noir = color(0, 0, 0);
        let bleu = color(0, 0, 255);

        strokeWeight(4);

        fill(orange);
        circle(this.x + 200, 100, 75);

        fill(blanc);
        circle(this.x + 200, 100, 35);

        fill(noir);
        circle(this.x + 200, 100, 20);

        fill(blanc);
        circle(this.x + 205, 98, 10);

        fill(bleu);
        rect(this.x + 150, 140, 100, 100);

        //mes bras//
        fill(noir);
        rect(this.x + 100, 150, 50, 30);
        rect(this.x + 250, 150, 50, 30);
        //mes jambes//
        rect(this.x + 150, 240, 30, 30);
        rect(this.x + 220, 240, 30, 30);

        //les mains//
        fill(orange);
        circle(this.x + 165, 270, 30);
        circle(this.x + 235, 270, 30);
        //les pieds//
        circle(this.x + 100, 165, 30);
        circle(this.x + 300, 165, 30);

        line(this.x + 230, 75, this.x + 255, 40);
        line(this.x + 172, 75, this.x + 145, 40);
        circle(this.x + 145, 40, 10);
        circle(this.x + 255, 40, 10);

        fill(blanc);
        circle(this.x + 210, 170, 25);
        circle(this.x + 230, 195, 15);
        rect(this.x + 205, 210, 10, 10);
      },
      arriver: function () {
        if (this.x - 100) {
          this.x = this.x + 5;
        }
      },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom;
        this.intClick++
      },
      decorer: function () {
        strokeWeight(2);
        fill(255, 160, 122);
        rect(0, height, width, -150);
      },
      danger: function () {
        if (intClick == 3) {
          refP.innerText = "VOUS ÊTES EN DANGER";
          fill(255, 0, 0);
          circle(this.x + 200, 100, 20);

        }
        if (intClick > 3) {
          strokeWeight(1);
          fill(72, 209, 204)

          refP.innerText = "Pardonnez-moi..";
        }
      }
    },
    descriptionIA: "Bubble, mon robot est conçu pour assister les plus jeunes durant les heures de gardiennage. il sais cuisiner des repas, jouer avec les enfants et faire toute sorte d'activités bricolage.De plus, il peut faire des bulles d'ou son nom Bubble.", // Entre 30 et 120 mots
    autorisePublication: true  // OU false
  },

  /* Groupe 2 */
  {
    prenom : "Sarah",
    nom : "Dufour",
    pseudo : "sikrieria",
    metsFavoris : [
        " Tourtiere du Saguenay ",
        " Patée chinois de mon chum",
        " Du bonheur en canne "
    ],
    hobbies:[
      " Gamer sur ma tour " ,
      " Dessiner / Peinturer / Artisationner " ,
      " Dongeon et Dragon " ,
    ],
    stylesMusique : [
        " Retro ",
        " Classique ",
        " Musique de Jeux Videos "
    ],
    urlsMusique : [             // 2 par style
        "https://www.youtube.com/watch?v=GxLbTAA6gK0",
        "https://www.youtube.com/watch?v=8Qx2lMaMsl8",
        "https://www.youtube.com/watch?v=_mVW8tgGY_w",
        "https://www.youtube.com/watch?v=e2oZtvjg5oA",
        "https://www.youtube.com/watch?v=nRe3xFeyhVY&t=5142s",
        "https://www.youtube.com/watch?v=dLe40q0g3Vw&t=138s",
    ],
    robot : {
      strNom :"Lovely_42" ,
      x : -350,
     
     decorer() {
          // Background //
       fill (0,0,75)
       strokeWeight (10)
       rect (0,0,600,125,0,0,60,60)
       fill (90)
       strokeWeight (5)
       rect (-10,200,630,350)
     },
     
     afficher() {
           // --Arc-tete-- //
       stroke (225)
       strokeWeight (3)
       fill (45,0,170)
       arc (this.x +300,105,75,75,PI,0)
       strokeWeight (2)  
       line (this.x +275,105,this.x +266,90)
       line (this.x +280,105,this.x +272,84)
       line (this.x +285,105,this.x +279,76)
       line (this.x +290,105,this.x +286,70)
       fill(0)
       ellipse (this.x +270,105,10)
       // Gauche ^, Droite v //
       line (this.x +325,105,this.x +332,90)
       line (this.x +320,105,this.x +327,83)
       line (this.x +315,105,this.x +320,76)
       line (this.x +310,105,this.x +312,70)
       fill (0)
       ellipse (this.x +330,105,10)
   
       // Tete //
       stroke (0)
       fill (180,140,30)
       ellipse (this.x +300,105,50)
       ellipse (this.x +310,105,5)
       ellipse (this.x +290,105,5)
       // Cou //
       rect (this.x +295,129,10,25,5) //(x,y,wi,hei,rad)
     
       // Epaule //
       stroke (200)
       fill (40,40,150)
       ellipse (this.x +277,165,30)
       ellipse (this.x +325,165,30)
     
       // Jupe / Jambe //
       fill (0)
       rect (this.x +250,280,100,50,50,50,10,10)
       rect (this.x +265,213,70,70,60,60,10,10)
       // Corps //
       rect (this.x +273,153,55,70,25,25,5,5) // (x,y,wi,hei,rad(top),rad(top),rad(bot),rad(bot))//
     },
     
     arriver(){
       if (this. x <= 0)
         this.x = this.x + 5;
     },
     
     direBonjour() {
      refP.innerText ="Bonjour, je suis " + this.strNom + " que puis-je?";
       },
     
     placerParagraphe:function(){
   /* positionnement et style de refP */
   refP.position(0, 290);
   refP.style('width', '600px');
   refP.style('height', '30px');
   refP.style('background-color', 'rgba(155,255,255,0.5)'); refP.style('text-align', 'center'); 
   refP.style('padding-top', '15px');
   },  
   },
    descriptionIA : "Lovely_42 est une gentille aide prête à vous aider dans le compostage de vos aliments grâce à un intelligence artificielle avancée qui lui permettra de faire du compost de façon intelligente. Et elle peut détruire les sacs de plastiques..! WOW! ", // Entre 30 et 120 mots
    autorisePublication : true 
  },
  {
    prenom: "Alex Jordan",
    nom: "Mpele",
    pseudo: "al_x_jordan14",
    metsFavoris: [
      "poulet",
      "bu"
    ],
    hobbies: [
    ],
    stylesMusique: [
      "Gangsta rap",
      "Drill",
      "Rage"
    ],
    urlsMusique: [
      "https://www.youtube.com/watch?v=W5_RPT0WPYw",
      "https://www.youtube.com/watch?v=d89yIVwuWj4",
      "https://www.youtube.com/watch?v=PmUnzgNETNo",
      "https://www.youtube.com/watch?v=z9gnR0W_VA8",
      "https://www.youtube.com/watch?v=m",
      "https://www.youtube.com/watch?v=Cszp89gslTg",
    ],
    robot: {
      x: -450,
      strNom: "Jordan xp-12",
      afficher: function () {
        // le corps
        fill(this.x + 75, 105, 170);
        rect(this.x + 150, 120, 120, 90, 10, 10);
        // la tête
        fill(this.x + 22, 255, 255);
        rect(this.x + 175, 50, 70, 25)
        rect(this.x + 173, 75, 74, 45)
        //épaule gauche
        fill(this.x + 25, 5, 225)
        rect(this.x + 115, 130, 35, 15)
        //épaule droite
        fill(this.x + 25, 5, 225)
        rect(this.x + 270, 130, 35, 15)
        //bras gauche
        fill(240)
        rect(this.x + 128, 145, 16, 40)
        //bras droit 
        fill(240)
        rect(this.x + 276, 145, 16, 40)
        //main gauche
        fill(240)
        rect(this.x + 120, 185, 30, 20)
        //main droite
        fill(this.x + 243)
        rect(this.x + 270, 185, 30, 20)
        //bas du corps
        fill(this.x + 255, 240, 245);
        rect(this.x + 170, 210, 80, 25);
        //jambe gauche
        fill(this.x + 250, 250, 250);
        rect(this.x + 180, 235, 25, 40);
        //jambe droite
        fill(this.x + 250, 250, 250);
        rect(this.x + 210, 235, 25, 40);
        // oeil gauche
        fill(this.x + 0, 0, 0);
        rect(this.x + 185, 60, 18);
        //oeil droit
        fill(this.x + 0, 0, 0);
        rect(this.x + 220, 60, 18);
        //bouche
        fill(this.x + 0, 0, 0);
        rect(this.x + 200, 88, 23, 13);
      },
      arriver: function () {
        if (this.x < 0) {
          this.x = this.x + 5;
        }
      },
      decorer: function () { },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom;
      },
    },
    descriptionIA: "Je suis une version robotisée d'Alex Jordan, votre camarade. J'ai été conçu pour trouver des solutions qui aideraient à ralentir le rythme de reproduction humaine. Bien sûr ces solutions n'incluent pas l'éradication de la race comme l'a suggéré mon créateur.",
    autorisePublication: true
  },
  {
    prenom: "Élisabeth",
    nom: "Bilodeau",
    pseudo: "LizzyWanders",
    metsFavoris: [
      "Raviolis",
      "Bol Poulet Rouge",
      "Quessadillas"
    ],
    hobbies: [],
    stylesMusique: [
      "Metal/punk/rock",
      "Rap",
      "Indie/Folk",
      "Reggae",
    ],
    urlsMusique: [
      "https://youtu.be/TpohVYomw2o",
      "https://youtu.be/jEi84ULGlR0",
      "https://youtu.be/2FqJz2jaB-Y",
      "https://youtu.be/tGFSLlWDeK8",
      "https://youtu.be/FKHRb438nCE",
      "https://youtu.be/foj3lB7vtDo",
      "https://youtu.be/vTEKg1Ly0zY",
      "https://youtu.be/AObC5VKMdEc",
      "https://youtu.be/w4XdnD5c334",
      "https://youtu.be/2iIA-MPim-Q",
      "https://youtu.be/aBJLkt5seJk",
      "https://youtu.be/QcApqnvj8fY"
    ],
    robot: {
      x: -250,
      strNom: "Qwibi",

      afficher: function () {
        //Tête
        fill(197, 221, 223)
        ellipse(this.x + 300, 127, 110, 60)

        fill(255)
        //Antennes
        line(this.x + 260, 107, this.x + 235, 75)
        line(this.x + 340, 107, this.x + 367, 75)
        //Bout des antennes et cou
        fill(212, 197, 223)
        circle(this.x + 233, 72, 7)
        circle(this.x + 370, 72, 7)
        arc(this.x + 300, 137, 10, 6, 0, PI)
        arc(this.x + 300, 157, 40, 25, 0, PI)


        fill(197, 221, 223)

        rect(this.x + 265, 170, 70, 85)
        //Épaules et jambes
        fill(212, 197, 223)
        circle(this.x + 260, 165, 20)
        circle(this.x + 340, 165, 20)
        circle(this.x + 280, 267, 23)
        circle(this.x + 320, 267, 23)
        circle(this.x + 243, 237, 15)
        circle(this.x + 357, 237, 15)

        //yeux
        fill(0)
        circle(this.x + 270, 125, 10)
        circle(this.x + 330, 125, 10)

        //lignes des bras
        line(this.x + 255, 173, this.x + 245, 230)
        line(this.x + 345, 173, this.x + 358, 230)

      },
      arriver: function () {
        if (this.x < 0) {
          this.x = this.x + 5
        }
      },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est Qwibi !";
      },
      decorer: function () {
        background(178, 235, 242);
        fill(141, 110, 99);
        rect(2, 270, 330, 30);
        fill(41, 98, 255);
        rect(2, 300, 600, 50);

      }
    },
    descriptionIA: "Qwibi est un robot équipé de propulseurs qui lui servent à avancer dans l'eau. Sa mission est de récupérer les déchets dans l'océan.", // Entre 30 et 120 mots
    autorisePublication: true
  },
  {
    prenom: "Lorie-Anne",
    nom: "Côté",
    pseudo: "artificialOxygen",
    metsFavoris: ["poutine", "risotto", "macarons à la noix de coco"],
    hobbies: ["dessin", "peinture", "lecture"],
    stylesMusique: ["rock",],
    urlsMusique: ["https://www.youtube.com/watch?v=7AQSLozK7aA&list=LL&index=7", "https://www.youtube.com/watch?v=Nv-cni9Sjpk&list=LL&index=13"],
    robot: {
      x: 600,
      strNom: "Bobot",

      afficher: function () {

        //Corps rectangulaire du robot

        stroke(43, 20, 50);
        strokeWeight(2);
        fill(116, 64, 130);
        rect(this.x + 40, 70, 100, 140, 10);

        //Antenne N1

        stroke(43, 20, 50);
        strokeWeight(3);
        fill(43, 20, 50);
        rect(this.x + 60, 30, 3, 50);

        //Antenne N2

        stroke(43, 20, 50);
        strokeWeight(2);
        fill(43, 20, 50);
        rect(this.x + 77, 50, 3, 30);

        //Oeil N2

        stroke(0);
        strokeWeight(2);
        fill(0);
        circle(this.x + 90, 135, 18);

        stroke(0);
        strokeWeight(2);
        fill(70);
        circle(this.x + 90, 135, 13);

        stroke(0);
        strokeWeight(1);
        fill(250);
        circle(this.x + 90, 140, 5);

        stroke(0);
        strokeWeight(1);
        fill(250);
        circle(this.x + 95, 132, 7);

        //Jambe

        stroke(43, 20, 50);
        strokeWeight(2);
        fill(43, 20, 50);
        rect(this.x + 80, 210, 10, 40);

        //Roue

        stroke(0);
        strokeWeight(2);
        fill(50);
        circle(this.x + 85, 250, 35);

        stroke(0);
        strokeWeight(1);
        fill(100);
        circle(this.x + 85, 250, 20);

        //Détails 
        stroke(43, 20, 50);
        strokeWeight(2);
        line(this.x + 40, 120, this.x + 140, 120);

        stroke(43, 20, 50);
        strokeWeight(2);
        line(this.x + 40, 170, this.x + 140, 170);

        stroke(43, 20, 50);
        strokeWeight(2);
        fill(250);
        rect(this.x + 100, 190, 30, 10);

        //Oeil N1

        stroke(0);
        strokeWeight(2);
        fill(250);
        circle(this.x + 60, 120, 33);

        stroke(43, 20, 50);
        strokeWeight(2);
        line(this.x + 42, 120, this.x + 72, 110);

        stroke(0);
        strokeWeight(1);
        fill(0);
        circle(this.x + 60, 117, 5);
      },
      arriver: function () {

        //Décrémenter la position x du robot par 5

        this.x = this.x - 5;

        //Si la position x du rebot est inférieur à la moitié du canevas
        //Affecter la valeur width/2 à la position x du robot

        if (this.x < width / 2) {
          this.x = width / 2
        }

      }, direBonjour: function () {

        refP.innerText = "Bonjour. " + this.strNom + " pour vous servir.";

      }, decorer: function () {
            
          noStroke();
          fill(218, 200, 224);
          rect(1, 1, 599);

          noStroke();
          fill(167, 150, 174);
          rect(1, 200, 599);
      }
    }, // Objet robot
    descriptionIA: "Bobot, prononcé bo-botte est un robot analyste. À l'aide de sa caméra, il peut prendre en photo diverses espèces invasives (non originaires du Canada et dangereuses pour notre écosystème) d'origine animale ou végétale afin qu'elles puissent servir au recensement des espèces invasives au Québec et pour aider à mieux contrôler leur population. Avec ses antennes, il peut capter le réseau presque n'importe où pour transmettre ses données au gouvernement.", // Entre 30 et 120 mots
    autorisePublication: true  // OU false
  },
  {
    prenom: "Laurie",
    nom: "Martineau",
    pseudo: "lm",
    metsFavoris: ["mac n' cheese",
      "tartare",
      "sushi"],
    hobbies: ["randonnée", "aller magasiner", "écouter de la musique"],
    stylesMusique: ["pop",
      "rap",
      "hip-hop"],
    urlsMusique: ["https://www.youtube.com/watch?v=aCF7nOGqD6w",
      "https://www.youtube.com/watch?v=oybwO_9Q5iY",
      "https://www.youtube.com/watch?v=d6F4B5KxRo8",
      "https://www.youtube.com/watch?v=B3f_2RlS9uM",
      "https://www.youtube.com/watch?v=1LBm1lTt-rQ",
      "https://www.youtube.com/watch?v=vNBgJ49b9Ag",],
    robot: {
      x: -300,
      strNom: "Écko",
      afficher: function () {

        //Tête du robot
        fill(0, 86, 27);
        circle(this.x + 300, 50, 60);

        //Cou du robot
        fill(0, 55, 15);
        rect(this.x + 290, 80, 20, 20);

        //Haut corps du robot
        fill(0, 86, 27);
        rect(this.x + 270, 100, 60, 60);
        fill(200, 230, 0);
        square(this.x + 290, 90, 20, 20);
        fill(255, 255, 215);
        square(this.x + 290, 120, 20, 20);

        //Bras gauche du robot
        fill(0, 55, 15);
        rect(this.x + 250, 105, 20, 60);
        //Bras droit du robot
        rect(this.x + 330, 105, 20, 60);

        //Jambe droite
        fill(0, 86, 27);
        rect(this.x + 305, 190, 20, 60);

        //Jambe gauche
        fill(0, 86, 27);
        rect(this.x + 275, 190, 20, 60);

        //Bas du corps
        rect(this.x + 285, 160, 30, 40);

      },
      decorer: function () {
        background(45, 45, 56);
        fill(10, 140, 54);
        rect(0, 250, 600, 100);
        fill(135, 206, 250);
        rect(0, 0, 600, 250);
        fill(188, 72, 60);
        rect(0, 0, 220, 250);
        fill(137, 207, 240)
        rect(30, 40, 60, 70);
        fill(137, 207, 240)
        rect(30, 130, 60, 70);
        fill(137, 207, 240)
        rect(120, 130, 60, 70);
        rect(120, 40, 60, 70);
      },
      arriver: function () {
        if (this.x < 0) {
          this.x = this.x + 5
        }
      },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom;
      }
    }, // Objet robot
    descriptionIA: "Écko est un robot écoresponsable, qui ramasse les déchets dans les lieux publics. Il se promène que ce soit dans les parcs, dans les musées ou dans les écoles afin d'y faire régner la propreté. Il s'occupe que les ordures se retrouvent dans la poubelle grâce à son aide. Il a aussi un système de tri intégré à son programme qui lui permet de placer les matériaux recyclables et autres dans le bac approprié", // Entre 30 et 120 mots
    autorisePublication: false
  },
  {
    prenom: "Kate",
    nom: "Undercoffler",
    pseudo: "kateundercoffler",   // identifiant Github?
    metsFavoris: [
      "les patates",
      "general tao tofu",
      "crème glacée molle au choco"
    ],
    hobbies: ["Coudre les vêtements historiques", "Faire la musique", "Peinturer avec mes aquarelles"],
    stylesMusique: [
      "Synth-pop",
      "Jazz",
      "Funk"
    ],
    urlsMusique: [             // 2 par style
      "https://www.youtube.com/watch?v=fyyiJc0Wk2M",
      "https://www.youtube.com/watch?v=aGSKrC7dGcY",
      "https://www.youtube.com/watch?v=hgFi-iqX1mQ&list=PLS4jAfE9d3aKgMbBH2e6g1xKDpFaDA77t&index=3",
      "https://www.youtube.com/watch?v=MYPVQccHhAQ",
      "https://www.youtube.com/watch?v=le0BLAEO93g",
      "https://www.youtube.com/watch?v=eadlsXIVf1w",
    ],
    robot: {
      x: -400,
      strNom: "R0-Z !",

      decorer: function () {
        fill(230, 230, 250);
        rect(0, 0, 600, 300);
        fill(255, 160, 122);
        rect(0, 220, 600, 200);

        if (nombreClics < 7) {
          fill(85, 107, 47);
          strokeWeight(0);
          rect(70, 40, 30, 190, 19);
          rect(35, 120, 100, 20, 19);
          rect(35, 80, 20, 60, 19);
          rect(115, 80, 20, 60, 19);
        } else {
          fill(85, 107, 47);
          line(85, 55, 85, 75);
          line(75, 55, 85, 75);
          line(95, 55, 85, 75);
          strokeWeight(0);
          rect(65, 65, 40, 128, 30);
          rect(35, 120, 100, 20, 19);
          rect(35, 100, 20, 40, 19);
          rect(115, 120, 20, 40, 19);
          rect(35, 200, 20, 40, 19);

          quad(65, 175, 75, 190, 52, 210, 35, 205);

          rect(85, 170, 20, 50, 19);
          rect(85, 200, 50, 20, 19);
          fill(0, 0, 0);
          strokeWeight(9);
          point(75, 95);
          point(95, 95);
          ellipse(85, 120, 2, 14);
        }



        fill(255, 255, 51);
        strokeWeight(2);
        triangle(310, 20, 300, 50, 320, 50);
        triangle(310, 180, 300, 150, 320, 150);
        triangle(390, 100, 360, 90, 360, 110);
        triangle(230, 100, 260, 90, 260, 110);
        triangle(250, 160, 270, 120, 290, 140);
        triangle(370, 160, 350, 120, 330, 140);
        triangle(370, 40, 350, 80, 330, 60);
        triangle(250, 40, 270, 80, 290, 60);
        circle(310, 100, 100);



      },



      afficher: function () {
        strokeWeight(1);
        stroke(0);

        //fill du corps
        fill(255, 218, 185);

        // la tête
        line(this.x + 290, 80, this.x + 310, 80);

        // oreille à la gauche
        triangle(this.x + 266, 80, this.x + 276, 65, this.x + 290, 80);

        // oreille à la droite
        triangle(this.x + 310, 80, this.x + 324, 65, this.x + 334, 80);

        //le visage
        arc(
          this.x + 300,
          100,
          80,
          80,
          0 - QUARTER_PI + 0.25,
          PI + QUARTER_PI - 0.25,
          CHORD
        );

        //le corps
        ellipse(this.x + 300, 190, 80, 100);

        //le queue
        line(this.x + 320, 234, this.x + 395, 160);

        //stroke pour les yeux
        stroke(95, 158, 160);
        strokeWeight(5);

        //l'oeil gauche
        point(this.x + 285, 100);

        //l'oeil droite
        point(this.x + 315, 100);

        //stroke pour le nez
        stroke(255, 192, 203);

        //le nez
        point(this.x + 300, 110);

        //stroke pour la bouche
        stroke(0);
        strokeWeight(2);

        //les moustaches
        line(this.x + 307, 115, this.x + 350, 105);
        line(this.x + 307, 120, this.x + 350, 115);
        line(this.x + 293, 115, this.x + 250, 105);
        line(this.x + 293, 120, this.x + 250, 115);

        //la bouche
        line(this.x + 300, 123, this.x + 300, 115);
        noFill(0);
        arc(this.x + 300, 110, 23, 26, QUARTER_PI, PI - QUARTER_PI);
      },
      arriver: function () {
        if (this.x <= 0) {
          this.x = this.x + 10;
        }
      },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom;
        nombreClics++;
      },
    },
    descriptionIA: "R0 - Z est un robot chaton qui peut identifier et trouver les chatons ayant besoin d'aide dans votre quartier. Avec l'aide d'IA, elle va identifier si les chatons sont orphelins et s'ils sont en danger, et puis elle va envoyer l'emplacement dans un message, de combien de chatons sont présents et leur état pour qu'ils soient sauvés De plus, R0 - Z va choisir le bon refuge avec des bonnes ressources." // Entre 30 et 120 mots
    , autorisePublication: true   // OU false
  },
  {
    prenom: "Isabel",
    nom: "Hurtado",
    pseudo: "IH",
    metsFavoris: ["Sushi", "Fruit de mer", "Ravioli"],
    hobbies: ["danser", "musique", "cuisiner"],
    stylesMusique: ["Rap", "Pop", "R&B"],
    urlsMusique: [
      "https://www.youtube.com/watch?v=aCF7nOGqD6w",
      "https://www.youtube.com/watch?v=oybwO_9Q5iY",
      "https://www.youtube.com/watch?v=d6F4B5KxRo8",
      "https://www.youtube.com/watch?v=B3f_2RlS9uM",
      "https://www.youtube.com/watch?v=1LBm1lTt-rQ",
      "https://www.youtube.com/watch?v=vNBgJ49b9Ag"],
    robot: {
      x: -350,
      strNom: "Salsa",
      afficher: function () {
        // couleur remplissage pour le corps
        fill(this.x + 255, 105, 170);
        triangle(this.x + 140, 210, this.x + 210, 108, this.x + 280, 210);
        // la tête
        fill(this.x + 224, 255, 255);
        rect(this.x + 175, 50, 70);
        //bas du corps
        fill(this.x + 255, 240, 245);
        rect(this.x + 170, 210, 80, 25);
        //ecran
        rect(this.x + 195, 150, 30, 30);
        //Première roue
        fill(this.x + 250, 250, 250);
        circle(this.x + 180, 250, 30);
        //deuxième roue
        fill(this.x + 250, 250, 250);
        circle(this.x + 240, 250, 30);
        //ligne première roue
        line(this.x + 165, 250, this.x + 195, 250);
        line(this.x + 180, 235, this.x + 180, 265);

        //ligne deuxième roue
        line(this.x + 225, 250, this.x + 255, 250);
        line(this.x + 240, 235, this.x + 240, 265);
        // oeil gauche
        fill(this.x + 0, 0, 0);
        circle(this.x + 190, 70, 20);
        //oeil droit
        fill(this.x + 0, 0, 0);
        circle(this.x + 230, 70, 20);
        //bouche
        fill(this.x + 0, 0, 0)
        line(this.x + 190, 100, this.x + 220, 100);
      },
      decorer: function () {
        background(232, 233, 224);
        fill(100, 196, 216);
        square(300, 2, 130);
        fill(100, 196, 216);
        square(170, 2, 130);
        fill(0, 0, 0)
        rect(297, 2, 5, 130);
        fill(0, 0, 0);
        rect(170, 60, 260, 6);
        rect(1, 150, 600, 6);
        fill(122, 151, 140)
        rect(1, 155, 600, 100);
        fill(209, 210, 201);
        rect(1, 255, 600, 42);



      },

      arriver: function () {
        if (this.x < 0) {
          this.x = this.x + 6
        }
      },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom;
      }
    }, // Objet robot
    descriptionIA: "", // Entre 30 et 120 mots
    autorisePublication: false // OU false
  },
  {
    prenom: "Félix",
    nom: "Vermette",
    pseudo: "captainfil",
    metsFavoris: ["Poutine", "burger d'orignal"],
    hobbies: ["jeux vidéo", "musique"],
    stylesMusique: ["Electronic"],
    urlsMusique: ["https://open.spotify.com/track/5isHndEunT9J7bv4Mz9jgs?si=cf1b0a55a3644d2e",
      "https://open.spotify.com/track/1bweOqaO6SIGRRMupc7zMm?si=ab54867ba30348c3"],
    robot: {
      x: -100,
      strnom: "",
      afficher: function () {

        //wheel
        fill(0);
        arc(this.x + 32, 250, 65, 45, 0, PI);

        arc(this.x + 97, 250, 65, 45, 0, PI);

        //neck
        strokeWeight(0)
        fill(200, 200, 250);
        rect(this.x + 50, 90, 15, 20)

        strokeWeight(0);
        fill(200, 230, 250)
        rect(this.x + 65, 90, 15, 20)

        strokeWeight(3);
        line(this.x + 50, 90, this.x + 50, 110);
        line(this.x + 65, 90, this.x + 65, 110);
        line(this.x + 80, 90, this.x + 80, 110);
        line(this.x + 57, 90, this.x + 57, 110);
        line(this.x + 73, 90, this.x + 73, 110)

        //frame
        fill(175);
        strokeWeight(3);
        rect(this.x, 110, 130, 140);

        strokeWeight(2);
        fill(100, 150, 250);
        rect(this.x + 100, 120, 20, 120);

        fill(175);
        circle(this.x + 110, 130, 10);
        circle(this.x + 110, 145, 10);

        //head
        strokeWeight(3);
        fill(175);
        rect(this.x, 40, 130, 50);

        line(this.x + 50, 55, this.x + 50, 75);
        line(this.x + 65, 65, this.x + 35, 65);

        line(this.x + 100, 55, this.x + 100, 75);
        line(this.x + 85, 65, this.x + 115, 65);

        strokeWeight(3)
        fill(200, 20, 20);
        triangle(this.x, 10, this.x + 140, 40, this.x, 40)

        //extra
        fill(255, 216, 17)
        rect(this.x - 30, 130, 30, 20)
        rect(this.x - 23, 120, 15, 10)
        fill(121)
        rect(this.x - 30, 150, 30, 60)
      },

      arriver: function () {
        if (this.x < 210) {
          this.x = this.x + 5
        }
      },

      direBonjour: function () {
        let h = hour();
        let m = minute();

        if (m <= 9) {
          m = "0" + m;
        }
        let time = "il est " + h + ":" + m;

        let list = ["Bonjour ! Mon nom est J1mmy", "BEEP BOOP", "WAAAA", "H E L L O", "j'ai besoin de changer mes batteries", "let me=J1mmy !", time, " :) "];

        refP.innerText = random(list);

      },

      decorer: function () {

        fill(224, 201, 97);
        strokeWeight(0);
        rect(0, 0, 20, 300);
        rect(75, 0, 20, 300);
        rect(150, 0, 20, 300);
        rect(225, 0, 20, 300);
        rect(300, 0, 20, 300);
        rect(375, 0, 20, 300);
        rect(450, 0, 20, 300)


        fill(255);
        strokeWeight(0);
        rect(0, 210, 600, 50)

        fill(240);
        rect(0, 215, 600, 10)

        fill(139, 119, 97);
        strokeWeight(10);
        stroke(126, 98, 69);
        rect(500, -10, 150, 300);

        strokeWeight(1);
        stroke(0);
        rect(520, 100, 100, 125);
        rect(520, 0, 100, 75);


        strokeWeight(0)
        fill(165, 135, 107);
        strokeWeight(0);
        rect(0, 240, 600, 110);

      },


    }, // Objet robot
    descriptionIA: "J1mmy est un robot d'aide aux personnes agés qui est spécialisé en assistance sociale. Il est capable de converser pendant des heures dans multiples langages différents. Seul défaut, le modèle présentement sur le marché fonctionne uniquement avec des batteries. ( Plusieur réponse au clic disponible )",
    autorisePublication: true  // OU false
  },
  {
    prenom : "Ualikhan",
    nom : "Butabayev",
    pseudo : "Valikh.92",   // identifiant Github?
    metsFavoris : [
        "Du poulet",
        "Sushi",
        "Lasagne"
    ],
    hobbies:[],
    stylesMusique : [
        "Rap",
        "R&B",
        "Hip-Hop"
    ],
    urlsMusique : [             // 2 par style
        "https://www.youtube.com/watch?v=yD_v9Ol38BE",
        "https://www.youtube.com/watch?v=2sQhtLBIjww",
        "https://www.youtube.com/watch?v=BK72YNkZwQ4",
        "https://www.youtube.com/watch?v=mTQOzfcdZpQ",
        "https://www.youtube.com/watch?v=I4DjHHVHWAE",
        "https://www.youtube.com/watch?v=hT_nvWreIhg",
    ],
    robot : {
      x: -450,
      strNom: "Beast",
      afficher: function () {
       let c = color(204, 204, 255);
    fill(c);
    
     noStroke();
      
      square(this.x+250, 20, 120);
      
      circle(this.x+310, 75, 10)
      
      circle(this.x+250, 20, 10)
      
      circle(this.x+370, 20, 10)
      
       ellipse(this.x+310, 150, 55, 200);  
    
      fill(112, 128, 144); 
      circle(this.x+310, 250, 80);
      
      fill(112, 128, 144); 
      rect(this.x+282, 35, 60, 65);
      
      fill(255, 255, 230); 
      rect(this.x+295, 40, 35, 60, 35);
      
      fill(0, 0, 0); 
      circle(this.x+312, 70, 25);
    
      arc(this.x+310, 120, 42, 50, 32, PI + QUARTER_PI);
    
      stroke(0) 
      
    
      fill(255,255,255)
      circle(this.x+312.5, 70, 10)
      },
      arriver: function () {
        if (this.x < 0) {
          this.x = this.x + 5;
        }
      },
      decorer:function(){

      },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom;;
      },
    }, // Enlever les guillemets
    descriptionIA : "Allo, je m'appelle Tom, je suis le robot le plus intelligent et le plus rapide qui existe sur cette planète, je suis un robot très utile au quotidien, je suis là pour garder la maison propre, vous emmener aux bons endroits et, en principe, vous aider dans votre routine.", // Entre 30 et 120 mots
    autorisePublication : true  
  },
  /* Groupe 3 */

  {
    prenom: "Mathieu",
    nom: "Beauregard",
    pseudo: "dog03",
    metsFavoris: ["Saumon", "Curry", "Spaghetti"],
    hobbies: ["Jeux Vidéos", "Golf", "Musique"],
    stylesMusique: ["Pop", "Rock", "Kpop"],
    urlsMusique: ["https://www.youtube.com/watch?v=hQrmtwhztnc&ab_channel=brakence",
      "https://www.youtube.com/watch?v=osE9DTIr7hg&ab_channel=Aries",
      "https://www.youtube.com/watch?v=k6FHqmjAZOk&ab_channel=CVLTE-Topic",
      "https://www.youtube.com/watch?v=U8tWoNZI77k&ab_channel=demxntia",
      "https://www.youtube.com/watch?v=IVBW7sI8IhY&ab_channel=RAIN%27sOfficialChannel",
      "https://www.youtube.com/watch?v=sWLn54IrDiw&ab_channel=JYPEntertainment",],
    robot: {
      x: -350,
      strNom: "Boris",
      afficher: function () {
        strokeWeight(2);
        fill(25, 25, 112);
        triangle(this.x + 300, 30, this.x + 250, 60, this.x + 350, 60);

        strokeWeight(2);
        fill(147, 112, 219);
        rect(this.x + 280, 60, 40, 50);

        strokeWeight(2);
        fill(50, 205, 50);
        circle(this.x + 300, 80, 20);

        strokeWeight(6);
        line(this.x + 260, 120, this.x + 210, 190);

        strokeWeight(6);
        line(this.x + 340, 120, this.x + 400, 65);

        strokeWeight(2);
        fill(147, 112, 219);
        rect(this.x + 260, 100, 80, 100);

        strokeWeight(7);
        line(this.x + 300, 200, this.x + 300, 220);

        strokeWeight(2);
        fill(100, 149, 237);
        circle(this.x + 300, 250, 60);

        strokeWeight(2);
        fill(0, 0, 205);
        circle(this.x + 300, 250, 15);

      },

      arriver: function () {
        if (this.x < 0) {
          this.x = this.x + 3;
        }
      },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom + "!";
      },
      decorer: function () {
        strokeWeight(0);
        fill(56, 209, 74);
        rect(0, 240, 600, 110);

        strokeWeight(0);
        fill(250, 230, 50);
        circle(500, 50, 50);

      },
    },
    descriptionIA: "Boris, le robot, est conçu pour assister les personnes de troisième âge. Par exemple, Boris va les notifier pour prendre leurs médicaments et va les garder en santé avec des diagnostics personnalisés.", // Entre 30 et 120 mots
    autorisePublication: true  // OU false
  },
  {
    prenom: "Jean-Philippe",
    nom: "Côté",
    pseudo: "jpcote14",   // identifiant Github?
    metsFavoris: [
      "Poulet General Tao",
      "Eggroll",
      "poutine bbq"
    ],
    hobbies: [],
    stylesMusique: [
      "Jazz",
      "Metal",
      "populaire"
    ],
    urlsMusique: [             // 2 par style
      "https://www.youtube.com/watch?v=r-Z8KuwI7Gc&ab_channel=JazzTuna",
      "https://www.youtube.com/watch?v=d1-uICLQwlM&ab_channel=KOCHRECORDS",
      "https://www.youtube.com/watch?v=IKlG91yp4sQ&ab_channel=JasonMraz-Topic",
      "https://www.youtube.com/watch?v=hwQqqtdZ66o&ab_channel=Fran%C3%A7oisLeduc",
      "https://www.youtube.com/watch?v=ttoJ-Ro0L04&ab_channel=Wintersun-Topic",
      "https://www.youtube.com/watch?v=Ic5vxw3eijY&ab_channel=Estelle",
    ],
    robot: {
      x: -300,
      y: 0,
      pas: 3,
      strNom: "Prison Mike",
      contenu: "Bonjour, mon nom est ",

      afficher: function () {
        //antenne
        fill(200, 0, 0);
        rect(this.x + 295, this.y + 22, 8, 20, 10);
        square(this.x + 295, this.y + 37, 8, 100, 100, 0);

        //tete
        fill(200, 0, 0);
        rect(this.x + 275, this.y + 45, 50, 75, 20);

        //cornes

        fill(190);

        arc(this.x + 313, this.y + 51, 14, 50, 11, QUARTER_PI); // droite

        arc(this.x + 280, this.y + 54, 14, 50, 11, QUARTER_PI); // gauche

        // yeux
        fill(220, 200, 0);
        circle(this.x + 300, this.y + 75, 20);
        fill(220, 0, 0);
        circle(this.x + 300, this.y + 75, 10);

        // Bouche

        fill(220, 200, 0);
        rect(this.x + 288, this.y + 100, 25, 12, 10);

        //dent du bas

        fill(255);
        let px = this.x + 290;
        let intLimiteXbouche = this.x + 304;
        while (px <= intLimiteXbouche) {
          let py = this.y + 111;
          let intEspacement = 3;
          triangle(px + 1, py, px + 7, py, px + 4, py - 5);
          px = px + intEspacement;
        }
        //dents du haut
        px = this.x + 290;
        let intLimiteXbouche2 = this.x + 304;
        while (px <= intLimiteXbouche2) {
          let py = this.y + 101;
          let intEspacement = 3;
          let intLimiteXbouche2 = this.x + 304;
          triangle(px + 1, py, px + 7, py, px + 4, py + 5);
          px = px + intEspacement;
        }

        line(this.x + 288, this.y + 105, this.x + 312, this.y + 105); // ligne horizontal

        //corps
        fill(200, 0, 0);
        rect(this.x + 263, this.y + 120, 75, 100, 15);

        //queue
        push();
        noFill();
        stroke(255, 102, 0);
        curve(this.x + 350, this.y + 200, this.x + 350, this.y + 200, this.x + 400, this.y + 150, this.x + 73, this.y + 100);
        pop();
        fill(200, 0, 0);
        triangle(this.x + 397, this.y + 132, this.x + 420, this.y + 152, this.x + 395, this.y + 162);

        // bras gauche
        rect(this.x + 244, 128, 20, 60, 20, 0, 5, 5);
        circle(this.x + 254, this.y + 195, 25);
        circle(this.x + 243, this.y + 206, 8);
        circle(this.x + 253, this.y + 208, 8);
        circle(this.x + 263, this.y + 206, 8);

        // bras droite
        rect(this.x + 336, this.y + 128, 20, 60, 0, 20, 5, 5);
        circle(this.x + 346, this.y + 195, 25);
        circle(this.x + 337, this.y + 206, 8);
        circle(this.x + 347, this.y + 208, 8);
        circle(this.x + 357, this.y + 206, 8);

        //Jambe Gauche

        rect(this.x + 272, this.y + 219, 20, 60, 3, 3, 0, 0);
        square(this.x + 272, this.y + 273, 20, 50, 5, 5);

        // jambe droite

        rect(this.x + 309, this.y + 219, 20, 60, 3, 3, 0, 0);
        square(this.x + 309, this.y + 273, 20, 50, 5, 5);
      },

      arriver: function () {
        this.x = this.x + this.pas;
        if (this.x >= 20) {
          this.pas = 0;
        }
      },
      direBonjour: function () {
        refP.innerText = `My name is ${this.strNom} and I never got caught, neither. `;
      },

      decorer: function () {
        background(0, 220, 255, 150);
        //route

        //gazon
        fill(0, 200, 0);
        rect(0, 240, 600);

        //asphalte
        fill(75);
        rect(-10, 250, 650, 300);

        //ligne jaune
        fill(255, 255, 0);
        rect(0, 275, 70, 7);

        //ligne jaune
        fill(255, 255, 0);
        rect(150, 275, 70, 7);

        //ligne jaune
        fill(255, 255, 0);
        rect(300, 275, 70, 7);

        //ligne jaune
        fill(255, 255, 0);
        rect(450, 275, 70, 7);

        //ligne jaune
        fill(255, 255, 0);
        rect(596, 275, 70, 7);

        //soleil
        fill(255, 255, 0);
        ellipse(50, 50, 60, 60);

        if (this.x >= this.pas) {
          //route
          background(0);

          //gazon
          fill(0, 100, 0);
          rect(0, 245, 600);

          //asphalte
          fill(75);
          rect(-10, 250, 650, 300);

          //ligne jaune
          fill(255, 255, 0);
          rect(0, 275, 70, 7);

          //ligne jaune
          fill(255, 255, 0);
          rect(150, 275, 70, 7);

          //ligne jaune
          fill(255, 255, 0);
          rect(300, 275, 70, 7);

          //ligne jaune
          fill(255, 255, 0);
          rect(450, 275, 70, 7);

          //ligne jaune
          fill(255, 255, 0);
          rect(596, 275, 70, 7);

          //etoiles
          fill(255, 255, 100, 4);
          for (i = 0; i < 30; i++) {
            ellipse(50, 50, i);
            ellipse(210, 80, i);
            ellipse(280, 60, i);
            ellipse(50, 180, i);
            ellipse(320, 150, i);

            ellipse(50, 50, i);
            ellipse(150, 80, i);
            ellipse(450, 60, i);
            ellipse(500, 130, i); //
            ellipse(540, 20, i);
          }
          fill(230, 230, 180);
          ellipse(50, 50, 5, 5);
          ellipse(210, 80, 5, 4);
          ellipse(280, 60, 2, 2);
          ellipse(50, 180, 4, 4);
          ellipse(320, 150, 8, 9);

          ellipse(50, 50, 3, 3);
          ellipse(150, 80, 4, 4);
          ellipse(450, 60, 5, 5);
          ellipse(500, 130, 6, 6);
          ellipse(540, 20, 7, 7);

          //lune
          fill(255, 255, 100, 4);
          for (i = 0; i < 36; i++) {
            ellipse(50, 50, i * 3);
          }
          fill(230, 230, 180);
          push();
          noStroke();
          ellipse(50, 50, 60, 60);
          pop();
        }
      },

      placerParagraphe: function () {
        refP.position(8, 297);
        refP.style("width", "600px");
        refP.style("height", "30px");
        refP.style("background-color", "rgba(0,0,0, 0.5)");
        refP.style("color", "goldenrod");
        refP.style("border", "goldenrod", "1px", "solid");
        refP.style("text-align", "center");
        refP.style("padding-top", "15px");
      },
    },
    descriptionIA: "Bob Vance est un robot qui sert à conseiller son propriétaire par rapport aux dilemmes moraux qui tourmente leur esprit. Malheureusement, son programmeur est légèrement diabolique, ce qui amène Bob Vance à prodiguer des conseils de mauvaise qualités et pousse ses utilisateurs à commettre des actes de mauvais goût.",
    autorisePublication: true
  },
  {
    prenom: "Alexandra",
    nom: "Dias da Rocha",
    pseudo: "alexandradias",   // identifiant Github?
    metsFavoris: [
      "Ramen au boeuf",
      "Poulet citronnelle",
      "Vacherin"
    ],
    hobbies: [],
    stylesMusique: [
      "Sigur ros",
      "Mogwai",
      "Muse"
    ],
    urlsMusique: [             // 2 par style
      "https://www.youtube.com/watch?v=mZTb8WxEW78",
      "https://www.youtube.com/watch?v=jQi77xni1p8",
      "https://www.youtube.com/watch?v=luM6oeCM7Yw",
      "https://www.youtube.com/watch?v=MP9evk0f7Qg&t=1413s",
      "https://www.youtube.com/watch?v=O2IuJPh6h_A",
      "https://www.youtube.com/watch?v=w8KQmps-Sog",

    ],
    robot: {
      x: -400,
      strNom: "Pointe des neiges",


      //methode afficher le robot
      afficher: function () {

        //nuage

        strokeWeight(0.2);
        stroke(255);
        fill(this.x + 8, 68, 68);
        circle(this.x + 400, 230, 30);
        fill(this.x + 8, 88, 88);
        circle(this.x + 370, 250, 60);
        fill(this.x + 8, 108, 108);
        circle(this.x + 310, 240, 92);
        fill(this.x + 8, 218, 218);
        circle(this.x + 290, 260, 50);
        fill(this.x + 8, 128, 128);
        circle(this.x + 250, 240, 60);
        fill(this.x + 8, 138, 138);
        circle(this.x + 230, 240, 100);
        fill(this.x + 8, 238, 238);
        circle(this.x + 230, 240, 70);
        fill(this.x + 8, 148, 148);
        circle(this.x + 200, 210, 80);
        fill(this.x + 8, 218, 218);
        circle(this.x + 160, 230, 30);
        fill(this.x + 8, 168, 168);
        circle(this.x + 140, 240, 60);
        fill(this.x + 8, 88, 88);
        circle(this.x + 170, 250, 40);
        fill(this.x + 8, 208, 208);
        circle(this.x + 180, 260, 30);


        //couleur des pieds  
        fill(this.x + 8, 58, 58);
        strokeWeight(0.2);
        stroke(255);
        //forme des jambes

        rect(this.x + 205, 205, 85, 3, 20, 15, 10, 5);
        rect(this.x + 210, 210, 85, 3, 20, 15, 10, 5);
        rect(this.x + 215, 215, 85, 3, 20, 15, 10, 5);


        //couleur du corps
        // le this.x me permet d'incrémenter ma valeur RGB en avancant   
        fill(this.x + 11, 158, this.x + 158);
        noStroke();
        //forme du corps
        circle(this.x + 250, 80, 100);

        //couleur des yeux
        fill(this.x + 8, 58, 58);
        noStroke()
        //forme des yeux
        circle(this.x + 280, 80, 35);

        fill(this.x + 255);
        noStroke()
        circle(this.x + 280, 82, 7);

        //ajout circle
        fill(this.x + 159, 193, 49);
        stroke(1)
        circle(this.x + 250, 80, 8);

        fill(this.x + 4, 41, 64);
        stroke(1)
        circle(this.x + 280, 53, 4);

        //couleur des antennes
        fill(this.x + 8, 58, 58);
        stroke(this.x + 8, 58, 58)

        //forme du bec
        strokeWeight(2); // Default
        fill(this.x + 11, 158, this.x + 158);
        line(this.x + 300, 90, this.x + 330, 100);

        //forme des antennes
        strokeWeight(1);
        fill(this.x + 219, 242, 39);
        triangle(this.x + 250, 45, this.x + 255, 75, this.x + 260, 55);
        triangle(this.x + 300, 15, this.x + 260, 55, this.x + 257, 75);

        //jambes
        fill(this.x + 8, 58, 58);
        strokeWeight(2);
        // stroke(2);
        line(this.x + 243, 130, this.x + 243, 205);
        line(this.x + 253, 130, this.x + 253, 205);
        line(this.x + 263, 130, this.x + 263, 205);
      },


      // methode arriver
      arriver: function () {
        if (this.x < 0) {
          this.x = this.x + 5;
        }
      },

      placerParagraphe: function () {
        // refP.position(8,290);
        refP.position(8, 308);
        refP.style('width', '600px');
        refP.style('heigth', '60px');
        refP.style('background-color', 'rgba(155,255,255,0.5');
        refP.style('text-align', 'center');
        refP.style('padding-top', '16px');
        refP.style('padding-bottom', '16px');
        refP.style('margin', '0');
      },

      decorer: function () {
        let c = color(229, 228, 190);
        background(c);
        // fill(this.x + 8,208,208);
        strokeWeight(1);

        let c1 = color(4, 41, 64);
        fill(c1);
        triangle(18, 18, 18, 360, 81, 360);

        let c2 = color(0, 92, 83);
        fill(c2);
        triangle(180, 108, 18, 360, 81, 360);

        let c3 = color(159, 193, 49);
        fill(c3);
        // triangle(280, 108, 18, 360, 81, 360);
        triangle(235, 138, 18, 360, 81, 360);

        let c4 = color(219, 242, 39);
        fill(c4);
        ellipse(552, 44, 72, 72);

        let c5 = color(4, 41, 64);
        fill(c5);
        triangle(288, 180, 351, 360, 288, 360);

        let c6 = color(219, 242, 39);
        fill(c6);
        triangle(388, 160, 320, 360, 285, 360);
        // triangle(303, 180, 351, 360, 288, 60);

        let c7 = color(0, 92, 83);
        fill(c7);
        stroke(255);
        strokeWeight(1);
        arc(479, 300, 280, 280, PI, TWO_PI);

        //lines bottom
        fill(this.x + 8, 58, 58);
        strokeWeight(1);
        // stroke(2);
        line(0, 340, 600, 340);
        line(0, 345, 600, 345);
        line(0, 335, 600, 335);
        // line(this.x + 253, 130, this.x + 253, 205);
        // line(this.x + 263, 130, this.x + 263, 205);
      },

      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom;
      },
    },
    // Enlever les guillemets

    descriptionIA: "Je suis Pointe des neiges, pas très habile avec mon allure simpliste, mes formes arrondies et ma coupe dernier cri, je reste malgré tout un assistant bienveillant. Conçu pour l'accompagnement des enfants DYS, je m'adapte à leurs difficultés de manière ludique et évolutive. Chaque tâche qui m'est confiée est pour moi une source d'apprentissage. Je m'émerveille jour après jour des progrès accomplis.", // Entre 30 et 120 mots
    autorisePublication: true  // OU false
  },
  {
    prenom: "Rodrigo",
    nom: "Garay",
    pseudo: "psycho",   // identifiant Github?
    metsFavoris: [
      "Pupusa",
      "General Tao",
      "Tacos"
    ],
    hobbies: [
      "Soccer",
      "Course",
    ],
    stylesMusique: [
      "Rap",
      "Indie Rock",
      "Pop"
    ],
    urlsMusique: [             // 2 par style
      "https://www.youtube.com/watch?v=Amsc3rUBQHA",
      "https://www.youtube.com/watch?v=g3h8-wyytQY",
      "https://www.youtube.com/watch?v=UA5eLw-lZ2Q",
      "https://www.youtube.com/watch?v=QqRp22nqfBs",
      "https://www.youtube.com/watch?v=z5T_XOm4lPg",
      "https://www.youtube.com/watch?v=Sj9uqdzg6sk",
    ],
    robot: {
      x: -450,
      strNom: "Alejandro",
      afficher: function () {

        /* Reset des lignes */
        stroke(0)
        strokeWeight(1)
        // L'antenne
        line(this.x + 300, 10, this.x + 300, 50);

        // Le bas
        fill(255, 178, 108)
        circle(this.x + 300, 200, 150);

        // La tête
        fill(255, 200, 102)
        circle(this.x + 300, 75, 100);

        // L'oeil
        fill(255, 255, 255)
        circle(this.x + 300, 70, 50);
        fill(0, 0, 0)
        ellipse(this.x + 300, 70, 30, 50);
        fill(255, 255, 255)
        ellipse(this.x + 300, 70, 10, 15)

        // Le corps
        fill(255, 255, 102);
        rect(this.x + 200, 125, 200, 100);

        // Les bras
        fill(265, 210, 0)
        rect(this.x + 150, 125, 50, 75);
        rect(this.x + 400, 125, 50, 75);
      },
      arriver: function () {
        this.x = this.x + 4;
        if (this.x >= 0) {
          this.x = 0;
        }
      },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom + "!";
      },
      decorer: function () {

    background(88, 136, 166);
        /* Settings pour la neige */
        let t = frameCount / 60; // update time

        // create a random number of snowflakes each frame
        for (let i = 0; i < random(5); i++) {
          snowflakes.push(new snowflake()); // append snowflake object
        }

        // loop through snowflakes with a for..of loop
        for (let flake of snowflakes) {
          flake.update(t); // update snowflake position
          flake.display(); // draw snowflake
        }

        makeCloud(cloudx, cloudy - 50);
        makeCloud(cloudx + 200, cloudy - 60)
        makeCloud(cloudx + 350, cloudy - 40);
        fill(220)
        noStroke();
        cloudx += 0.5;

        if (cloudx >= 700) {
          cloudx = -350;
        }

        /* Neige au sol */
        fill(243, 249, 250);
        rect(0, 220, 1000, 3000);

      }
    }, // Enlever les guillemets
    descriptionIA: "Alejandro, le robot, est conçu pour les gens qui ont besoin d’un peu de joie dans leur vie. Il a une multitude de tours de magie plates, de blagues de papa pas drôles et de commentaires inutiles, mais l’important, c’est qu’il apporte un peu de compagnie et d’humour aux personnes qui en ont besoin!", // Entre 30 et 120 mots
    autorisePublication: true  // OU false
  },
  {
    prenom: "Emily",
    nom: "Lagrange",
    pseudo: "H340",
    metsFavoris: [
      "Poutine",
      "Ramen",
      "Macaroni"],
    hobbies: [
      "Piano",
      "Gamer",
    ],
    stylesMusique: ["Pop"],
    urlsMusique: [
      "https://youtu.be/Jn6-TItCazo",
      "https://youtu.be/nyuo9-OjNNg"],
    robot: {
      x: -400,
      strNom: 'H340',
      afficher: function () {
        fill(0);
        rect(this.x + 260, 15, 10, 55);
        fill(0);
        rect(this.x + 330, 15, 10, 55);

        //tête + couleur
        fill(0, 200, 200);
        circle(this.x + 300, 100, 100);

        //cou + couleur
        fill(0, 200, 200);
        circle(this.x + 300, 175, 50);

        //corp + couleur
        fill(150, 0, 150);
        square(this.x + 260, 200, 80);

        //jambes + couleur
        fill(0, 200, 200);
        circle(this.x + 280, 290, 20);
        circle(this.x + 320, 290, 20);

        //bras + couleur
        fill(150, 0, 150);
        square(this.x + 240, 200, 20);
        square(this.x + 340, 200, 20);
        fill(0);
        rect(this.x + 190, 205, 50, 5);
        rect(this.x + 360, 205, 50, 5);

        //bouche + couleur
        fill(200, 180, 180);
        rect(this.x + 275, 115, 50, 10);

        //yeux + couleur 
        fill(0, 100, 150);
        circle(this.x + 280, 90, 20);
        circle(this.x + 320, 90, 20);
        fill(0);
        circle(this.x + 280, 90, 10);
        circle(this.x + 320, 90, 10);
      },

      arriver: function () {
        if (this.x < 0) {
          this.x = this.x + 3
        }
      },

      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom;
      },
      decorer: function () {
        fill(119, 181, 254)
        rect(0, 0, 600)
        fill(100, 100, 100)
        rect(0, 300, 600)
        fill(250, 253, 15)
        circle(500, 70, 90)
        fill(56, 62, 66)
        rect(30, 160, 80, 140)
        fill(155, 155, 155)
        rect(35, 165, 20)
        fill(155, 155, 155)
        rect(60, 165, 20)
        fill(155, 155, 155)
        rect(85, 165, 20)
        fill(155, 155, 155)
        rect(85, 190, 20)
        fill(155, 155, 155)
        rect(60, 190, 20)
        fill(155, 155, 155)
        rect(35, 190, 20)
        fill(155, 155, 155)
        rect(35, 215, 20)
        fill(155, 155, 155)
        rect(60, 215, 20)
        fill(155, 155, 155)
        rect(85, 215, 20)
        fill(155, 155, 155)
        rect(85, 240, 20)
        fill(155, 155, 155)
        rect(60, 240, 20)
        fill(155, 155, 155)
        rect(35, 240, 20)
        fill(96, 96, 96)
        rect(60, 265, 20, 35)
        fill(155, 155, 155)
        rect(35, 265, 20)
        fill(155, 155, 155)
        rect(85, 265, 20)

      }

    },
    // Objet robot
    descriptionIA: "H340, le robot, est conçu pour faire des tâches ménagères ou difficiles dans un domicile. Mais aussi à l'extérieur pour ramasser les déchets polluants notre planète comme le plastique. Grâce à ses actions quotidiennes il réduit la pollution et améliore notre qualité de vie. ", // Entre 30 et 120 mots
    autorisePublication: true  // OU false
  },
  {
    prenom: "Loick",
    nom: "L'Espérance",
    pseudo: "colinaros123",
    metsFavoris: ["shushi", "poutine", "ramen"],
    hobbies: ["jeux video", "musique", "manga/anime"],
    stylesMusique: ["trap japonais", "jpop", "kpop"],
    urlsMusique: [
      "https://www.youtube.com/watch?v=1jGepjiR3FE",
      "https://www.youtube.com/watch?v=S5cHBB9tVos",
      "https://www.youtube.com/watch?v=Zhx1n6uvgUE",
      "https://www.youtube.com/watch?v=Qp3b-RXtz4w",
      "https://www.youtube.com/watch?v=nKU4OVH18mE",
      "https://www.youtube.com/watch?v=7C2z4GqqS5E",
    ],
    robot: {
      x: -350,
      sens: 1,
      strNOM: "Yohann",

      decorer: function () {
        fill(0, 165, 0);
        rect(0, 250, 1000, 3000);
      },

      afficher: function () {
        //tete//
        strokeWeight(2);
        fill(128);
        square(this.x + 200, 50, 90);
        rect(this.x + 200, 120, 90, 2);
        fill(255);
        square(this.x + 210, 60, 30);
        square(this.x + 250, 60, 30);
        strokeWeight(6);
        point(this.x + 219, 70, 30);
        point(this.x + 260, 70, 30);

        //corp//
        fill(128);
        strokeWeight(2);
        rect(this.x + 195, 150, 100, 140);
        rect(this.x + 220, 140, 50, 10);
        rect(this.x + 165, 150, 30, 120);
        rect(this.x + 295, 150, 30, 120);
      },
      arriver: function () {
        this.x = this.x + 6 * this.sens;

        if (this.x >= 50) {
          this.x = 50;
        }
        if (this.x <= -350) {
          this.x = -350;
        }
      },

      direBonjour: function () {
        if (this.x >= 0) {
          refP.innerText = "bonjour mon nom est " + this.strNOM;
        }
      },
      direAurevoir: function () {
        this.sens = this.sens * -1;
        refP.innerText = this.strNOM + " vous dit aurevoir";
      },
    }, // Objet robot
    descriptionIA:
      "Un robot qui analyse le comportement des personnes pour savoir comment les calmer lors de moment de crise comme un feu. Analyse pour savoir quel est le meilleur choix; qui faut-il sauver en premier; etc...", // Entre 30 et 120 mots
    autorisePublication: true, // OU false
  },
  {
    prenom: "Raphael",
    nom: "Mercier",
    pseudo: "water",   // identifiant Github?
    metsFavoris: [
      "crepe",
      "pizza",
      "tacos"
    ],
    hobbies: ["hockey", "baseball", "basketball"],
    stylesMusique: [
      "hip-hop",
      "rap",
    ],
    urlsMusique: [             // 2 par style
      "https://www.youtube.com/watch?v=BuMBmK5uksg",
      "https://www.youtube.com/watch?v=wXhTHyIgQ_U",

      "https://www.youtube.com/watch?v=x6LBEoIF1mk",
      "https://www.youtube.com/watch?v=yEYCCiXLPTw",
    ],
    robot: {
      x: -350,
      afficher: function () {
        stroke(0);
        //tete
        fill(255, 255, 255)
        circle(this.x + 300, 100, 80)

        //visage
        circle(this.x + 283, 90, 20);
        fill(255, 0, 0);
        circle(this.x + 283, 90, 12);
        circle(this.x + 317, 90, 14);
        fill(255, 255, 255);
        circle(this.x + 317, 90, 3);
        triangle(this.x + 317, 115, this.x + 300, 90, this.x + 283, 115);

        //body
        rect(this.x + 250, 140, 100, 120);

        //bras
        rect(this.x + 140, 140, 110, 20);
        rect(this.x + 350, 140, 110, 20);

        //jambes
        rect(this.x + 250, 260, 30, 40);
        rect(this.x + 320, 260, 30, 40);

        //coeur
        fill(255, 0, 0);
        circle(this.x + 300, 175, 30);
      },

      arriver: function () {
        if (this.x < 0) {
          this.x += 1;
        }
        else
          this.x = 0;
      },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom;
      },

      decorer: function () {
        fill(00, 200, 200);
        rect(0, 250, 1000, 250);

        noStroke();
        fill(255);
        ellipse(100, 100, 200, 40);
        ellipse(120, 60, 100, 100);
        ellipse(70, 70, 80, 80);
        ellipse(160, 90, 50, 50);


      }
    },

    descriptionIA: "Mon robot va devenir un comédien pour les humains. Son but est de faire rire les humains peuplant cette Terre. Il veut aussi devenir acteur pour la chaine télévisée Adult Swimm. ", // Entre 30 et 120 mots
    autorisePublication: false  // OU false
  },
  {
    prenom: "Jeremy",
    nom: "Fraser",
    pseudo: "jer",
    metsFavoris: ["LA BAVETTE !!!", "Saumon", "Steak"],
    hobbies: ["jeux vidéos", "piano", "jogging"],
    stylesMusique: ["jazz", "rock/métal", "orchestrale"],
    urlsMusique: ["https://www.youtube.com/watch?v=ylXk1LBvIqU So What - Miles Davis",
      "https://www.youtube.com/watch?v=XtxsYF4e3uM Rush - Seatbelts",
      "https://www.youtube.com/watch?v=ojx8dyes__8 In the blood - Darren Korb et Ashley Barret",
      "https://www.youtube.com/watch?v=ojx8dyes__8 Sky should be high - Daisuke Ishiwatari",
      "https://www.youtube.com/watch?v=dVq-IlSe6CA&list=OLAK5uy_nlG-_QuIzyFhyo0Z15Pwaln1oEzXHPptU&index=156 - Thème du crédit de fin de Final Fantasy 7 Remake - Nobuo Uematsu",
      "https://www.youtube.com/watch?v=n0TTcu89AC8 Blood upon the snow - Bear McCreary et Hozier"],
    robot: {

      x: -410,
      pas: 4,
      strNom: 'R0B0',
      y1Bras: 228.8,
      y2Bras: 180,
      pasVBras: 30,
      afficher: function () {

        fill(80, 80, 80);
        rect(this.x + 300, 185, 20, 20);
        //le cou

        circle(this.x + 310, 275, 45);
        //la roue

        fill(120, 120, 120);
        circle(this.x + 310, 150, 80);
        //la tête

        noFill(0);
        circle(this.x + 339, 240, 12);
        circle(this.x + 339, 240, 25);
        line(this.x + 339, 270, this.x + 345, 240)
        //fil bras/corps

        fill(120, 120, 120);
        rect(this.x + 279, 205, 60, 80);
        //le corps

        line(this.x + 330, 205, this.x + 330, 185);
        //fils corps/tête :0

        fill(100, 100, 100);
        line(this.x + 354, this.y1Bras, this.x + 400, this.y2Bras);
        circle(this.x + 354, 227.8, 9);
        rect(this.x + 339, 215, 15, 25);
        fill(80, 80, 80);
        circle(this.x + 400, this.y2Bras, 9);
        //le bras méchanique

        fill(210, 210, 220);
        circle(this.x + 300, 145, 20);
        fill(100, 130, 0)
        circle(this.x + 300, 145, 14);
        //gros cercle
        circle(this.x + 325, 150, 6);
        circle(this.x + 325, 140, 6);
        //les yeux ;b

        fill(210, 210, 210);
        rect(this.x + 310, 213, 20, 20);
        fill(90, 90, 90);
        circle(this.x + 315, 218, 3);
        circle(this.x + 325, 218, 3);
        rect(this.x + 319, 223.5, 7, 4);
        //Pad sur haut corps :p

        fill(210, 210, 210);
        rect(this.x + 287, 254, 45, 25);
        fill(120, 120, 120);
        rect(this.x + 311, 258, 17, 17);
        rect(this.x + 292, 258, 12, 5);
        fill(50, 190, 100);
        circle(this.x + 298, 270, 5);
        fill(240, 0, 0);
        circle(this.x + 319.8, 266.5, 13);
        //Pad sur bas corps 

        fill(90, 90, 90);
        line(this.x + 290, 115, this.x + 290, 90);
        circle(this.x + 290, 90, 3);
        line(this.x + 281, 122, this.x + 281, 100)
        circle(this.x + 281, 100, 3);
        //les antennes 

      },

      arriver: function () {

        this.x = this.x + this.pas;
        // this.pas = this.pas * 0;

        if (this.x >= 0) {
          this.pas = 0;
        }
      },

      bougerBras: function () {
        if (mouseX > 2 * width / 3) {
          this.y2Bras = this.y2Bras + this.pasVBras;
        }
        if (this.y2Bras > 3 * height / 4) {
          this.pasVBras = 0;
        }

      },

      decorer: function () {

        background(13, 210, 255);

        // soleil
        noStroke();
        fill(255);
        circle(500, 85, 50, 25);

        // colline
        stroke(0);
        fill(30, 150, 20);
        ellipse(400, 310, 450, 100);

        fill(30, 150, 20);
        ellipse(160, 310, 450, 100);

        fill(30, 150, 20);
        ellipse(10, 310, 450, 150);

        // Route
        fill(60);
        rect(0, 299, width, 51);


      },

      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom + ". Comment puis-je vous aidez?";
      },

    }, // Objet robot
    descriptionIA: "R0B0, doté de son bras mécanique, de ses multiples boutons et de sa boite vocale, est en mesure de répondre à vos besoins. Iel sait reconnaître les différentes émotions de son utilisateur et répond en tenant compte de ces dernières.", // Entre 30 et 120 mots
    autorisePublication: true,  // OU false
  },
  {
    prenom: "Mathieu",
    nom: "Thérien",
    pseudo: "tpred",
    metsFavoris: [
      "burger",
      "poutine",
    ],
    hobbies: [
      "faire du sport",
      "gamer",
    ],
    stylesMusique: [
      "pop-rock",
      "rock",
      "pop"
    ],
    urlsMusique: [
      "https://www.youtube.com/watch?v=7wtfhZwyrcc",
      "https://www.youtube.com/watch?v=mWRsgZuwf_8",
      "https://www.youtube.com/watch?v=DYed5whEf4g",
      "https://www.youtube.com/watch?v=ZgB2qItM76g",
      "https://www.youtube.com/watch?v=1nv9br7P7g0",
      "https://www.youtube.com/watch?v=fmI_Ndrxy14",
    ],
    robot: {
      x: -250,
      strNom: "Dikolo",


      afficher: function () {
        stroke(0);
        fill(130, 130, 130);

        //roue milieu
        circle(this.x + 315, 180, 50)

        //chapeau (partie 1)
        fill(255, 199, 71)
        circle(this.x + 315, 60, 50)

        //la tete
        fill(255, 255, 255)
        circle(this.x + 315, 85, 50)

        //chapeau (partie 2)
        fill(255, 199, 71)
        ellipse(this.x + 315, 60, 100, 20)

        //oeil gauche
        fill(0, 0, 255)
        circle(this.x + 305, 80, 10)

        //oeil droit
        circle(this.x + 325, 80, 10)

        //le corps
        fill(255, 255, 0)
        rect(this.x + 290, 110, 50, 70)

        //epaule gauche
        fill(162, 0, 255)
        triangle(this.x + 290, 110, this.x + 290, 140, this.x + 250, 140)

        //roue gauche
        fill(130, 130, 130)
        circle(this.x + 260, 190, 20)

        //bras gauche
        fill(255, 255, 0)
        rect(this.x + 250, 140, 20, 50)

        //epaule droite
        fill(162, 0, 255)
        triangle(this.x + 340, 110, this.x + 340, 140, this.x + 380, 140)

        //roue droite
        fill(130, 130, 130)
        circle(this.x + 370, 190, 20)

        //bras droit
        fill(255, 255, 0)
        rect(this.x + 360, 140, 20, 50)

        //epaulette gauche
        fill(0, 251, 255)
        triangle(this.x + 290, 110, this.x + 290, 100, this.x + 260, 110)

        //epaulette droite
        triangle(this.x + 340, 100, this.x + 340, 110, this.x + 370, 110)

        //bec
        fill(255, 0, 0)
        triangle(this.x + 310, 90, this.x + 320, 90, this.x + 315, 100)

      },

      arriver: function () {
        if (this.x < -20) {
          this.x = this.x + 3
        } else {
          this.x = -20
        }
        
      },
      direBonjour: function () { 
        document.getElementById("pBonjour").innerText = "Bonjour, mon nom est " + this.strNom + "!"
      }, 
      decorer: function () {
        //gazon
        fill(0, 200, 0)
        rect(0, 175, 601, 176)

        //ciel
        fill(0, 200, 255)
        rect(0, 0, 601, 175)

        //champs
        fill(175, 100, 0)
        rect(30, 185, 560, 175)

        //ligne culture
        fill(0, 0, 0)
        line(100, 200, 100, 351)
        line(170, 200, 170, 351)
        line(240, 200, 240, 351)
        line(310, 200, 310, 351)
        line(380, 200, 380, 351)
        line(450, 200, 450, 351)
        line(520, 200, 520, 351)

        //culture ligne 1
        noFill()
        circle(65, 225, 30)
        fill(175, 100, 0)
        noStroke()
        rect(45, 220, 40, 25)

        noFill()
        stroke(0)
        circle(65, 275, 30)
        fill(175, 100, 0)
        noStroke()
        rect(45, 270, 40, 25)

        noFill()
        stroke(0)
        circle(65, 325, 30)
        fill(175, 100, 0)
        noStroke()
        rect(45, 320, 40, 25)

        //culture ligne 2
        noFill()
        stroke(0)
        circle(135, 225, 30)
        fill(175, 100, 0)
        noStroke()
        rect(115, 220, 40, 25)

        noFill()
        stroke(0)
        circle(135, 275, 30)
        fill(175, 100, 0)
        noStroke()
        rect(115, 270, 40, 25)

        noFill()
        stroke(0)
        circle(135, 325, 30)
        fill(175, 100, 0)
        noStroke()
        rect(115, 320, 40, 25)

        //culture ligne 3
        noFill()
        stroke(0)
        circle(205, 225, 30)
        fill(175, 100, 0)
        noStroke()
        rect(185, 220, 40, 25)

        noFill()
        stroke(0)
        circle(205, 275, 30)
        fill(175, 100, 0)
        noStroke()
        rect(185, 270, 40, 25)

        noFill()
        stroke(0)
        circle(205, 325, 30)
        fill(175, 100, 0)
        noStroke()
        rect(185, 320, 40, 25)

        //culture ligne 4
        noFill()
        stroke(0)
        circle(275, 225, 30)
        fill(175, 100, 0)
        noStroke()
        rect(255, 220, 40, 25)

        noFill()
        stroke(0)
        circle(275, 275, 30)
        fill(175, 100, 0)
        noStroke()
        rect(255, 270, 40, 25)

        noFill()
        stroke(0)
        circle(275, 325, 30)
        fill(175, 100, 0)
        noStroke()
        rect(255, 320, 40, 25)

        //culture ligne 5
        noFill()
        stroke(0)
        circle(345, 225, 30)
        fill(175, 100, 0)
        noStroke()
        rect(325, 220, 40, 25)

        noFill()
        stroke(0)
        circle(345, 275, 30)
        fill(175, 100, 0)
        noStroke()
        rect(325, 270, 40, 25)

        noFill()
        stroke(0)
        circle(345, 325, 30)
        fill(175, 100, 0)
        noStroke()
        rect(325, 320, 40, 25)

        //culture ligne 6
        noFill()
        stroke(0)
        circle(415, 225, 30)
        fill(175, 100, 0)
        noStroke()
        rect(395, 220, 40, 25)

        noFill()
        stroke(0)
        circle(415, 275, 30)
        fill(175, 100, 0)
        noStroke()
        rect(395, 270, 40, 25)

        noFill()
        stroke(0)
        circle(415, 325, 30)
        fill(175, 100, 0)
        noStroke()
        rect(395, 320, 40, 25)

        //culture ligne 7
        noFill()
        stroke(0)
        circle(485, 225, 30)
        fill(175, 100, 0)
        noStroke()
        rect(465, 220, 40, 25)

        noFill()
        stroke(0)
        circle(485, 275, 30)
        fill(175, 100, 0)
        noStroke()
        rect(465, 270, 40, 25)

        noFill()
        stroke(0)
        circle(485, 325, 30)
        fill(175, 100, 0)
        noStroke()
        rect(465, 320, 40, 25)

        //culture ligne 8
        noFill()
        stroke(0)
        circle(555, 225, 30)
        fill(175, 100, 0)
        noStroke()
        rect(535, 220, 40, 25)

        noFill()
        stroke(0)
        circle(555, 275, 30)
        fill(175, 100, 0)
        noStroke()
        rect(535, 270, 40, 25)

        noFill()
        stroke(0)
        circle(555, 325, 30)
        fill(175, 100, 0)
        noStroke()
        rect(535, 320, 40, 25)

        //cloture barre horizontale
        stroke(1)
        fill(120, 60, 17)
        rect(0, 125, 600, 15)

        //cloture barre vertical
        rect(50, 110, 15, 65)
        rect(150, 110, 15, 65)
        rect(250, 110, 15, 65)
        rect(350, 110, 15, 65)
        rect(450, 110, 15, 65)
        rect(550, 110, 15, 65)

      },
    },
    descriptionIA: "Dikolo est un robot de l’ONU. Il va dans les pays en besoins pour créer des champs cultivables malgré les sécheresses. Il entretient par la suite ces champs jusqu’à ce que la population puisse les entretenir sans Dikolo.",
    autorisePublication: true
  },
  {
    prenom: "Annabelle",
    nom: "Ouellet",
    pseudo: "aouellet2241268",   // identifiant Github?
    metsFavoris: [
      "Bananes",
      "Chocolat",
      "Steak"
    ],
    hobbies: [
      "écouter de la musique",
      "chanter",
      "jouer de la guitare",
    ],
    stylesMusique: [
      "K-Pop",
      "Pop",
      "Rock"
    ],
    urlsMusique: [             // 2 par style
      "https://www.youtube.com/watch?v=aPd9exmH17o",
      "https://www.youtube.com/watch?v=bagFQCTHXy8",
      "https://www.youtube.com/watch?v=-MZ8guTxcFU",
      "https://www.youtube.com/watch?v=1SsZ1KJ8TXM",
      "https://www.youtube.com/watch?v=VdOkQ6THDVw",
      "https://www.youtube.com/watch?v=AhnZEmnuzgM",
    ],
    robot: {
      x: -350,
      strNom: "Lolly",
      afficher: function () {
        /* tête du robot */
        // rectangle
        fill(228, 130, 228);
        rect(this.x + 200, 80, 100, 60);

        /* cou du robot*/
        // rectangle
        fill(248, 170, 250);
        rect(this.x + 230, 140, 40, 40);
        /* roue du robot*/
        // élipse
        fill(230, 20, 170);
        ellipse(this.x + 250, 240, 69, 69);


        /* corps du robot*/
        fill(255, 120, 218);
        square(this.x + 215, 180, 70);
        /* yeux du robot*/
        // circle
        fill(0, 0, 0);
        circle(this.x + 220, 115, 15);
        fill(0, 0, 0);
        circle(this.x + 280, 115, 15);
        /* bouche du robot*/
        line(this.x + 240, 120, this.x + 260, 120);
        /* antennes du robot*/
        line(this.x + 200, 70, this.x + 220, 80);
        line(this.x + 280, 80, this.x + 300, 70);
      },
      arriver: function () {
        if (this.x <= 35) {
          this.x = this.x + 3
        }
      },
      direBonjour: function () {
        refP.innerText = "Bonjour, mon nom est " + this.strNom;
      },
      decorer: function () {
        fill(225, 135, 56);
        rect(0, height * 2 / 3, width, height);
        fill(255, 245, 255);
        rect(0, 0, width, 235);
      }

    },
    descriptionIA: "<cite>Lolly</cite> serait un bon robot accompagnateur pour démarrer la vie des jeunes enfants. Par exemple, dans les garderies, <cite>Lolly</cite> pourrait proposer des activités amusantes et en même temps qui pourront permettre à l'enfant d'apprendre des matières préscolaires avant de commencer l'école lorsque le jeune aura proche de 5 ans. Ce robot peut aider les gens de tout genre, tout trouble. Par exemple, <cite>Lolly</cite> saura soulager quelqu'un s'il s'est fait mal ou si quelque chose ne va pas. Cela pourra aussi diminuer la pénurie de main d'œuvre dans les garderies après deux ans de pandémie.", // Entre 30 et 120 mots
    autorisePublication: true  // OU false
  },
  {
    prenom : "Léa",
    nom : "Marois",
    pseudo : "heyliya",   // identifiant Github?
    metsFavoris : [
        "Hamburger",
        "Pâtes Pesto",
        "Oeuf"
    ],
    hobbies:[],
    stylesMusique : [
        "Musical",
        "Indie Rock",
        "Soft"
    ],
    urlsMusique : [             // 2 par style
        "https://www.youtube.com/watch?v=fp8r8UQLhbg",
        "https://www.youtube.com/watch?v=eh6-ZfWdnLQ",
        "https://www.youtube.com/watch?v=KvaxYUfGHnk",
        "https://www.youtube.com/watch?v=Np_YDbq9iBs",
        "https://www.youtube.com/watch?v=f91pN50q-4Y",
        "https://www.youtube.com/watch?v=_BMBDY01kPk",
    ],
    robot : {
  x: -350,
  strNom: "Chibo",
  
  afficher: function() {
  let middleX = width/2
  let middleY = height/2
  
  stroke(0)
  strokeWeight(1)
  
  //connection
  {
    //connection head
    stroke(0)
    strokeWeight(1)
    fill(106,159,235);
    rect(this.x + middleX-10, middleY-115, 20, 40);
  
    //connection bottom
    stroke(0)
    strokeWeight(1)
    fill(106,159,235);
    rect(this.x + middleX-10, middleY-20, 20, 40);
  }
  
  //head 
  {
    stroke(0)
    strokeWeight(1)
    fill(77,250,65);
    triangle(this.x + middleX, middleY-80, this.x + middleX-30, middleY-130, this.x + middleX+30, middleY-130);
  }
    
  
  // eye
  {
    stroke(0)
    strokeWeight(1)
    fill(255)
    circle(this.x + middleX, middleY-115, 20)
  
    noStroke()
    fill(62, 240, 234)
    circle(this.x + middleX, middleY-115, 15)
  
    stroke(0)
    strokeWeight(10)
    point(this.x + middleX, middleY-115)
    }
  
  //mouth
  {
    noStroke()
    fill(255)
    triangle(this.x + middleX, middleY-90, this.x + middleX-7, middleY-100, this.x + middleX+7, middleY-100 )
    }
  
  //body
  {
    stroke(0)
    strokeWeight(1)
    fill(207, 72, 202)
    square(this.x + middleX-30, middleY-75, 60)
  }
  
  //wheel
  {
    fill(211,230,229)
    stroke(150)
    strokeWeight(1)
    circle(this.x + middleX, middleY+50, 100)
  
    arc(this.x + middleX, middleY+25, 25, 50, PI+HALF_PI, HALF_PI)
    arc(this.x + middleX, middleY+75, 25, 50, HALF_PI, PI+HALF_PI)
    arc(this.x + middleX+25, middleY+50, 50, 25, 0, PI)
    arc(this.x + middleX-25, middleY+50, 50, 25, PI, 0)
  
  //center wheel
    fill(106,159,235)
    circle(this.x + middleX, middleY+50, 30)
  
    stroke(50)
    strokeWeight(15)
    point(this.x + middleX, middleY+50)
    }
  },
  
  arriver: function() {
    if (this.x < 0){
      this.x = this.x + 3
    }
  },
  decorer: function() {
    
  },
  direBonjour: function(){
    refP.innerText = "Bonjour, mon nom est " + this.strNom;
  }
  }, // Enlever les guillemets
    descriptionIA : "Chibo se promène dans les rues et détecte les déchets puis il les rapporte à des poubelles ou dans le recyclage. Même si il n'a pas de bras, il essaie de faire de son mieux.", // Entre 30 et 120 mots
    autorisePublication : true
  }
);


// Filtre les codeurs qui ne veulent pas être publiés
arrCodeurs = arrCodeurs.filter(codeur => codeur.autorisePublication == true);
