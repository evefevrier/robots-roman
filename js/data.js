/* variables globales */
let tagP;
let visionneuse;
let intNoRobot;
let arrRobots = [
  /* Robot 0, celui de Marika */
  {
    x: -390,
    strNom: "Kiki",

    decorer: function () {
      fill(255, 216, 216);
      rect(0, 0, 600, 260, 0, 0, 0, 0);
      fill(168, 117, 42);
      rect(0, 260, 600, 45, 0, 0, 0, 0);
      fill(127, 81, 13);
      rect(60, 30, 80, 115, 0, 0, 0, 0);
      noFill();
      stroke(0);
      strokeWeight(3);
      rect(65, 35, 70, 105, 0, 0, 0, 0);
      fill(177, 242, 245);
      rect(65, 35, 70, 105)
    },

    afficher: function () {
      noFill();
      stroke(205, 92, 92);
      strokeWeight(11);

      strokeWeight(13);
      line(this.x + 273, 130, this.x + 240, 184);
      line(this.x + 240, 184, this.x + 280, 220);
      line(this.x + 330, 130, this.x + 380, 90);
      line(this.x + 380, 90, this.x + 370, 60);

      fill(205, 92, 92);
      noStroke();
      circle(this.x + 300, 84, 65);
      circle(this.x + 300, 150, 80);
      rect(this.x + 260, 150, 80, 80, 0, 0, 5, 5);
      rect(this.x + 280, 230, 10, 50, 0, 0, 2, 2);
      rect(this.x + 310, 230, 10, 50, 0, 0, 2, 2);
      circle(this.x + 263, 200, 25);
      circle(this.x + 366, 50, 25);

      fill(255);
      rect(this.x + 280, 265, 10, 10);
      rect(this.x + 310, 265, 10, 10);

      fill(0);
      rect(this.x + 270, 270, 20, 10, 5, 0, 2, 0);
      rect(this.x + 300, 270, 20, 10, 5, 0, 2, 0);

      fill(255);
      circle(this.x + 288, 75, 11);
      circle(this.x + 312, 75, 11);

      fill(139, 69, 19);
      circle(this.x + 288, 75, 5);
      circle(this.x + 312, 75, 5);
      ellipse(this.x + 300, 96, 37, 10);
    },

    arriver: function () {
      if (this.x <= 0) {
        this.x += 1.5;
      }
    },

    direBonjour: function () {
      tagP.html("Bonjour, mon nom est " + this.strNom + ".");
    },
  },
  /* Robot 1, celui de Rosalie */
  {
    // attributs
    x: -400,
    strNom: "Robbie",
    pas: 5,
    // méthodes
    afficher: function () {

      strokeWeight(1);
      stroke(0);
      //tête
      fill(192, 192, 192);
      circle(this.x + 300, 50, 100);
      //corps
      rect(this.x + 230, 100, 150, 150);
      //jambes
      line(this.x + 260, 250, this.x + 260, 270);
      line(this.x + 340, 250, this.x + 340, 270);
      //pieds
      circle(this.x + 250, 280, 30);
      circle(this.x + 350, 280, 30);
      //corps-rectangles
      rect(this.x + 250, 120, 110, 30);
      rect(this.x + 250, 160, 110, 30);
      rect(this.x + 250, 200, 110, 30);
      fill("pink");
      rect(this.x + 260, 205, 25, 20);
      fill("lavender");
      rect(this.x + 325, 165, 25, 20);
      fill("lime");
      rect(this.x + 260, 125, 25, 20);
      //yeux
      fill(175, 238, 238);
      circle(this.x + 280, 50, 20);
      circle(this.x + 320, 50, 20);
      fill(0, 0, 0);
      circle(this.x + 280, 50, 8);
      circle(this.x + 320, 50, 8);
      fill(255, 255, 255);
      circle(this.x + 282, 48, 5);
      circle(this.x + 322, 48, 5);
      //bouche
      fill(0, 0, 0);
      arc(this.x + 300, 70, 60, 35, 0, PI);
      //dents
      fill(255, 255, 255);
      circle(this.x + 280, 75, 10);
      circle(this.x + 290, 75, 10);
      circle(this.x + 300, 75, 10);
      circle(this.x + 310, 75, 10);
      circle(this.x + 320, 75, 10);
    },
    arriver: function () {
      if (this.x <= 0) {
        this.x = this.x + this.pas;
      }
    },
    direBonjour: function () {
      // afficher le paragraphe
      tagP.html('Salut, je suis le fabuleux robot prénommé ' + this.strNom);
    },
    decorer: function () {
      // couleur de fond
      background('LightCyan');
      // couleur de "plancher"
      // tagP.style('background-color', 'skyblue');
    },
  },
  /* Robot 2, celui de Giselle */
  {
    //attributs
    x: -350,
    strNom: "Poupou",

    //méthode
    afficher: function () {
      fill(224, 224, 224);
      strokeWeight(4);
      square(this.x + 100, 20, 200);
      fill(94, 229, 99);
      circle(this.x + 150, 100, 60);
      fill(132, 55, 239);
      circle(this.x + 150, 110, 40);
      fill(102, 255, 230);
      circle(this.x + 150, 110, 20);
      fill(255, 255, 153);
      circle(this.x + 250, 100, 60);
      fill(255, 0, 127);
      circle(this.x + 250, 110, 40);
      fill(255, 128, 0);
      circle(this.x + 250, 110, 20);
      fill(224, 224, 224);
      rect(this.x + 135, 220, 130, 60);
      fill(224, 224, 224);
      rect(this.x + 265, 240, 20, 20);
      fill(224, 224, 224);
      rect(this.x + 115, 240, 20, 20);
      fill(255, 153, 153);
      arc(this.x + 200, 150, 110, 100, 0, PI, CHORD);
      fill(255, 255, 255);
      circle(this.x + 160, 155, 10);
      fill(255, 255, 255);
      circle(this.x + 180, 155, 10);
      fill(255, 255, 255);
      circle(this.x + 200, 155, 10);
      fill(255, 255, 255);
      circle(this.x + 220, 155, 10);
      circle(this.x + 240, 155, 10);

    },
    arriver: function () {
      if (this.x < 100) {
        this.x = this.x + 1;
      }
    },
    decorer: function () {
      fill(0, 153, 0);
      strokeWeight(0);
      rect(0, 250, width, 100);

      fill(153, 204, 255);
      rect(0, 0, width, 250);
    },
    direBonjour: function () {
      tagP.html("Bonjour, mon nom est " + this.strNom);
    },
  },
  /* Robot 3, celui de Marianne */
  {
    x: -350,
    strNom: "Markus",

    afficher: function () {
      fill(221, 6, 221);
      stroke(0);
      strokeWeight(4);
      //corp
      circle(this.x + 300, 100, 70);
      rect(this.x + 265, 139, 70, 90);
      fill(0);
      stroke(175);
      strokeWeight(4);

      //roue
      circle(this.x + 280, 248, 30);
      circle(this.x + 320, 248, 30);

      //antenne
      line(this.x + 300, 65, this.x + 290, 20);
      circle(this.x + 290, 20, 15);
      //oeil
      fill(0);
      stroke(255);
      strokeWeight(1);
      circle(this.x + 300, 100, 30);
      fill(0);
      stroke(0, 255, 0);
      strokeWeight(4);
      circle(this.x + 300, 100, 10);

      //ventilation
      stroke(75)
      strokeWeight(3)
      line(this.x + 290, 160, this.x + 310, 160);
      line(this.x + 290, 165, this.x + 310, 165);
      line(this.x + 290, 170, this.x + 310, 170);

      //boutons
      fill(0, 0, 255);
      stroke(0);
      strokeWeight(1);
      circle(this.x + 285, 185, 10);
      fill(255, 0, 0);
      circle(this.x + 300, 185, 10);
      fill(0, 255, 0);
      circle(this.x + 315, 185, 10);

    },

    decorer: function () {
      background(220)
      //plancher
      strokeWeight(0);
      fill(125, 96, 26);
      rect(0, 265, width, 100);

      //fenêtre
      fill(0, 255, 0);
      strokeWeight(0)
      rect(402, 150, 145, 18);
      fill(0, 150, 255);
      strokeWeight(0)
      rect(402, 20, 145, 130);


      stroke(125, 96, 26);
      strokeWeight(5);
      line(400, 170, 400, 20);
      line(550, 20, 550, 170);
      line(400, 170, 550, 170);
      line(400, 20, 550, 20);
      line(475, 20, 475, 170);
      line(400, 95, 550, 95);


    },

    arriver: function () {
      this.x += 4
      while (this.x >= 0) {
        this.x--

      }

    },
    direBonjour: function () {
      tagP.html("Bonjour! Mon nom est " + this.strNom);
    }
  },
  /* Robot 4, celui d'Éloïse */
  {
    x: -350,
    strNom: "Kaneki",
    decorer: function () {
      background(16, 82, 45);
      //terre//
      fill(0, 128, 128);
      rect(0, 0, 600, 275);
      //lune//
      fill(211, 211, 211);
      circle(40, 50, 70);
      fill(255, 255, 224);
      circle(57, 65, 15);
      fill(255, 255, 224);
      circle(46, 53, 15);
    },

    afficher: function () {
      noStroke();
      fill(220, 220, 220);
      triangle(this.x + 200, 50, this.x + 160, 140, this.x + 230, 140);

      //tête//
      noStroke();
      fill(220, 20, 60);
      ellipse(this.x + 200, 60, 200, 80);

      noStroke();
      fill(220, 220, 220);
      triangle(this.x + 200, 300, this.x + 140, 140, this.x + 250, 140);

      strokeWeight(2);
      stroke(0);
      line(this.x + 179, 100, this.x + 215, 100);
      line(this.x + 167, 128, this.x + 225, 128);
      line(this.x + 172, 115, this.x + 221, 115);
      line(this.x + 140, 140, this.x + 250, 140);
      line(this.x + 147, 158, this.x + 244, 158);
      line(this.x + 153, 175, this.x + 240, 175);
      line(this.x + 158, 190, this.x + 235, 190);
      line(this.x + 164, 208, this.x + 229, 208);
      line(this.x + 171, 226, this.x + 223, 226);
      line(this.x + 178, 246, this.x + 218, 246);
      line(this.x + 185, 263, this.x + 212, 263);
      line(this.x + 191, 279, this.x + 207, 279);

      //oreilles//
      noStroke();
      fill(220, 220, 220);
      circle(this.x + 100, 50, 20);
      noStroke();
      fill(220, 220, 220);
      circle(this.x + 300, 50, 20);

      //yeux//
      noStroke();
      fill(0);
      circle(this.x + 160, 60, 15);

      noStroke();
      fill(0);
      circle(this.x + 230, 60, 15);
    },

    arriver: function () {
      if (this.x < 100) this.x = this.x + 1;
    },

    direBonjour: function () {
      tagP.html("Bonjour, mon nom est " + this.strNom + " AKA le robot anti-mine");
    }
  },
  /* Robot 5, celui de Xavier */
  {
    x: -350,
    strNomRobot: "SynG",

    afficher: function () {
      fill(169, 169, 169);

      stroke(128, 128, 128);

      strokeWeight(3);

      //antène
      line(this.x + 310, 30, this.x + 310, 50);

      //tête
      circle(this.x + 310, 80, 60);

      //épaules
      rect(this.x + 260, 130, 100, 20);

      //torse
      rect(this.x + 270, 130, 80, 40);

      //hanches
      rect(this.x + 275, 210, 70, 20);

      //bras gauche
      rect(this.x + 240, 130, 20, 60);

      //bras droit
      rect(this.x + 360, 130, 20, 60);

      //jambe gauche
      rect(this.x + 275, 230, 20, 70);

      //jambe droite
      rect(this.x + 325, 230, 20, 70);

      //tronc
      square(this.x + 290, 170, 40);

      //cou
      square(this.x + 300, 110, 20);

      //pied gauche
      triangle(this.x + 275, 280, this.x + 275, 300, this.x + 250, 300);

      //pied droit
      triangle(this.x + 345, 280, this.x + 345, 300, this.x + 365, 300);

      //main gauche
      triangle(this.x + 240, 190, this.x + 260, 190, this.x + 260, 210);

      //main droite
      triangle(this.x + 360, 190, this.x + 380, 190, this.x + 360, 210);
      //genoux gauche
      arc(this.x + 275, 250, 20, 20, HALF_PI, PI + HALF_PI);
      //genoux droit
      arc(this.x + 345, 250, 20, 20, PI + HALF_PI, HALF_PI);

      //oeil
      fill(250, 0, 0);

      stroke(128, 128, 128);

      ellipse(this.x + 310, 70, 40, 15);

      //point
      strokeWeight(10);

      stroke(250, 0, 0);

      point(this.x + 310, 30);

    },
    arriver: function () {
      if (this.x < 0) {
        this.x++;
      }

    },
    direBonjour: function () {
      tagP.html("Bonjour, mon nom est " + this.strNomRobot);
    },
    decorer: function () {
      background(220);
    }
  },
  /* Robot 6, celui de Laurianne */
  {
    // attributs
    x: -400,
    strNom: "Jet",
    pas: 5,
    // méthodes
    afficher: function () {
      strokeWeight(1);
      // couleur de remplissage : Rose
      fill(215, 158, 189);

      // la tête
      rect(this.x + 280, 90, 50, 50);

      // la bouche
      line(this.x + 290, 130, this.x + 320, 130);

      // le cou
      rect(this.x + 290, 140, 30, 10);

      // Bras gauche
      rect(this.x + 240, 150, 20, 50);

      // bras droit
      rect(this.x + 350, 150, 20, 50);

      // jambe gauche
      rect(this.x + 260, 240, 30, 50);

      // jambe droite
      rect(this.x + 320, 240, 30, 50);

      // le corp
      fill(106, 131, 180);
      rect(this.x + 260, 150, 90, 90);

      // antenne gauche
      line(this.x + 300, 90, this.x + 280, 70);

      // antenne droite;
      line(this.x + 310, 90, this.x + 330, 70);

      // oeil gauche
      fill(255);
      circle(this.x + 290, 110, 15);
      fill(0);
      circle(this.x + 290, 110, 5);

      // oeil droit
      fill(255);
      circle(this.x + 320, 110, 15);
      fill(0);
      circle(this.x + 320, 110, 5);
    },
    arriver: function () {
      if (this.x <= 0) {
        this.x = this.x + this.pas;
      }
    },
    direBonjour: function () {
      // afficher le paragraphe
      tagP.html('Bonjour, mon nom est ' + this.strNom + " ! Venez découvrir qui je suis !");
    },
    decorer: function () {
      // couleur de fond
      background((187, 210, 225));
      // couleur de "plancher"
      // tagP.style('background-color', 'pink');
    }
  },
  /* Robot 7, celui de Andréanne */
  {
    x: -400,
    strNom: "George",
    decorer: function () {
      background(255, 217, 179);
      fill(148, 148, 184);
      rect(0, 200, 600, 350);
    },
    afficher: function () {
      // la tête
      fill(128, 223, 255);
      triangle(this.x + 300, 90, this.x + 255, 40, this.x + 345, 40);

      //les yeux
      fill(255, 255, 51);
      rect(this.x + 290, 50, 20, 10, 20);

      // le cou
      fill(255, 255, 255);
      square(this.x + 290, 90, 20);

      // le tronc
      fill(0);
      rect(this.x + 270, 110, 60, 80);
      fill(255, 255, 255);
      triangle(this.x + 270, 110, this.x + 330, 110, this.x + 300, 150);
      fill(0);
      square(this.x + 290, 190, 20);

      // Bras gauche
      fill(0);
      rect(this.x + 230, 140, 40, 10);
      rect(this.x + 220, 120, 10, 30);
      fill(128, 223, 255);
      circle(this.x + 225, 110, 20);

      // Bras droit
      fill(0);
      rect(this.x + 330, 140, 40, 10);
      rect(this.x + 370, 120, 10, 30);
      fill(128, 223, 255);
      circle(this.x + 375, 110, 20);

      // Base
      fill(0);
      rect(this.x + 210, 210, 180, 40);
      fill(160, 160, 160);
      circle(this.x + 240, 270, 40);
      circle(this.x + 360, 270, 40);
    },
    arriver: function () {
      if (this.x <= 0) {
        this.x = this.x + 2;
      }
    },
    direBonjour: function () {
      tagP.html("Bonjour ... eum ... Humain?, mon nom est " + this.strNom);
    },
  },
  /* Robot 8, celui de Samuel */
  {
    strNom: "HDA.44",
    x: -500,
    /* Ajout de la méthode décorer */
    decorer: function () {
      background(220);
    },
    afficher: function () {
      //color fill : silver
      fill(153, 175, 200);
  
      //head
      rect(this.x + 170, 20, 230, 120);
  
      //ears
      fill(156, 175, 225);
      rect(this.x + 120, 20, 50, 110);
      rect(this.x + 400, 20, 50, 110);
  
      //screen-eyes
      fill(218, 238, 1);
      ellipse(this.x + 285, 80, 180, 55);
      fill(255, 255, 224);
      circle(this.x + 285, 80, 20);
  
      //body
      fill(152, 175, 199);
      rect(this.x + 240, 140, 90, 120);
  
      fill(128, 128, 128);
      rect(this.x + 100, 140, 140, 30);
      rect(this.x + 330, 140, 160, 30);
  
      //wheel
      fill(185, 0, 0);
      rect(this.x + 270, 260, 33, 40);
    },
    arriver: function () {
      /* Ajouter la condition pour arrêter au milieu */
      if (this.x < 0) {
        /* Ajuster la vitesse */
        this.x = this.x + 2;
      }
    },
    /* Bien placer les méthodes dans l'objet */
    direBonjour: function () {
      tagP.html("Bonjour, mon nom est " + this.strNom);
    },
  },
  /* Robot 9, celui de Benjamin */
  {
    x: -370,
    decorX: 0,
    strNom: "Roboto Roberto",
    afficher: function () {
      strokeWeight(1);
      //   Antenne du robot
      line(this.x + 350, 115, this.x + 330, 85);
      fill(0, 240, 0);
      circle(this.x + 330, 85, 5);
      //   tête du robot
      fill(220);
      circle(this.x + 340, 130, 40);
      fill(255, 255, 0);
      ellipse(this.x + 350, 125, 15, 5);
      //   corps du robot
      fill(220);
      circle(this.x + 300, 200, 120);
      fill(0, 240, 0);
      circle(this.x + 340, 180, 15);
      fill(0);
      line(this.x + 175, 170, this.x + 235, 170);
      line(this.x + 165, 185, this.x + 225, 185);
      line(this.x + 155, 200, this.x + 215, 200);
      //     Faire avancer le robot
      this.x += +5;
    },

    decorer: function () {
      background(0, 200, 255);

      // this.decorX vaut 0 au départ
      //     Route 
      fill(0);
      rect(0, 250, 1500, 100);

      fill(255, 255, 0);
      rect(this.decorX + 600, 250, 50, 7.5);

      rect(this.decorX - 600, 250, 50, 7, 5);
      rect(this.decorX - 675, 250, 50, 7, 5);
      rect(this.decorX - 750, 250, 50, 7, 5);

      rect(this.decorX + 75 - 600, 250, 50, 7.5);
      rect(this.decorX + 150 - 600, 250, 50, 7.5);
      rect(this.decorX + 225 - 600, 250, 50, 7.5);
      rect(this.decorX + 300 - 600, 250, 50, 7.5);
      rect(this.decorX + 375 - 600, 250, 50, 7.5);
      rect(this.decorX + 450 - 600, 250, 50, 7.5);
      rect(this.decorX + 525 - 600, 250, 50, 7.5);
      rect(this.decorX + 600 - 600, 250, 50, 7, 5);
      rect(this.decorX + 675 - 600, 250, 50, 7, 5);
      rect(this.decorX + 750 - 600, 250, 50, 7, 5);
      rect(this.decorX + 825 - 600, 250, 50, 7, 5);
      rect(this.decorX + 900 - 600, 250, 50, 7, 5);

      rect(this.decorX, 250, 50, 7.5);
      rect(this.decorX + 75, 250, 50, 7.5);
      rect(this.decorX + 150, 250, 50, 7.5);
      rect(this.decorX + 225, 250, 50, 7.5);
      rect(this.decorX + 300, 250, 50, 7.5);
      rect(this.decorX + 375, 250, 50, 7.5);
      rect(this.decorX + 450, 250, 50, 7.5);
      rect(this.decorX + 525, 250, 50, 7.5);

      rect(this.decorX + 600, 250, 50, 7.5);
      rect(this.decorX + 675, 250, 50, 7.5);
      rect(this.decorX + 750, 250, 50, 7.5);
      rect(this.decorX + 825, 250, 50, 7, 5);


      //     Bâtiments
      fill(105, 105, 105);
      rect(this.decorX + 75, 200, 35, 50);
      rect(this.decorX + 110, 180, 35, 70);
      //     antennes des bâtiments
      stroke(0);
      line(this.decorX + 81.5, 200, this.decorX + 81.5, 190);
      line(this.decorX + 78, 196, this.decorX + 85, 193);
      line(this.decorX + 78, 194, this.decorX + 85, 191);
      line(this.decorX + 138.5, 180, this.decorX + 138.5, 170);
      line(this.decorX + 135, 174, this.decorX + 142, 176);
      line(this.decorX + 135, 172, this.decorX + 142, 174);
      //     fenêtres
      fill(30, 144, 255);
      rect(this.decorX + 78, 205, 7, 10);
      rect(this.decorX + 89.5, 205, 7, 10);
      rect(this.decorX + 100, 205, 7, 10);
      rect(this.decorX + 78, 220, 7, 10);
      rect(this.decorX + 89.5, 220, 7, 10);
      rect(this.decorX + 100, 220, 7, 10);
      rect(this.decorX + 78, 235, 7, 10);
      rect(this.decorX + 89.5, 235, 7, 10);
      rect(this.decorX + 100, 235, 7, 10);

      rect(this.decorX + 113, 188, 7, 10);
      rect(this.decorX + 124.5, 188, 7, 10);
      rect(this.decorX + 135, 188, 7, 10);
      rect(this.decorX + 113, 203, 7, 10);
      rect(this.decorX + 124.5, 203, 7, 10);
      rect(this.decorX + 135, 203, 7, 10);
      rect(this.decorX + 113, 218, 7, 10);
      rect(this.decorX + 124.5, 218, 7, 10);
      rect(this.decorX + 135, 218, 7, 10);
      rect(this.decorX + 113, 233, 7, 10);
      rect(this.decorX + 124.5, 233, 7, 10);
      rect(this.decorX + 135, 233, 7, 10);

    },

    arriver: function () {
      if (this.x >= 0) {
        this.x = 0;
        this.decorX -= 10;
        if (this.decorX < -225) {
          this.decorX = 675;
        }
      }
    },

    direBonjour: function () {
      tagP.html("Bonjour, le plus rapide des robots c'est moi, " + this.strNom + " !");
    },
  },
  /* Robot 10, celui de Michel */
  {
    y: -150,
    strNomRobot: "Ronaldo Gonzales!",
    decorer: function () {
      // Le ciel bleu
      fill(0, 191, 255);
      rect(0, 0, 600);
      // L'horizon
      fill(135, 206, 235);
      rect(0, 250, 600);

      //la pluie
      line(50, this.y + 60, 50, this.y + 150);
      line(90, this.y + 120, 90, this.y + 260);
      line(140, this.y + 180, 140, this.y + 300);
      line(180, this.y + 100, 180, this.y + 280);
      line(220, this.y + 40, 220, this.y + 180);
      line(260, this.y + 130, 260, this.y + 250);
      line(450, this.y + 80, 450, this.y + 150);
      line(500, this.y + 130, 500, this.y + 300);
      line(550, this.y + 100, 550, this.y + 200);
    },

    afficher: function () {
      //choisir la couleur de remplissage
      fill(30, this.y + 160, 45);

      // la tête
      rect(300, this.y + 60, 60, 60);

      //le cou
      rect(320, this.y + 120, 20, 30);

      //le corps
      rect(300, this.y + 150, 60, 90);

      //les ailes
      triangle(300, this.y + 155, 100, this.y + 250, 290, this.y + 240);
      triangle(360, this.y + 155, 550, this.y + 250, 370, this.y + 240);

      //le sourire
      arc(330, this.y + 100, 40, 40, 0, PI, CHORD);

      //la roue
      arc(330, this.y + 240, 60, 60, 0, PI, CHORD);

      //le soleil
      fill(255, 215, 0);
      arc(500, 0, 110, 70, 0, PI, CHORD);

      //les yeux
      stroke(0);
      strokeWeight(4);
      point(315, this.y + 80);
      point(345, this.y + 80);

      //les cheveux
      line(360, this.y + 60, 380, this.y + 100);
      stroke(0);
      line(360, this.y + 60, 390, this.y + 100);
      stroke(0);
      line(360, this.y + 60, 370, this.y + 100);
      stroke(0);
      line(300, this.y + 60, 280, this.y + 100);
      stroke(0);
      line(300, this.y + 60, 270, this.y + 100);
      stroke(0);
      line(300, this.y + 60, 290, this.y + 100);
      stroke(0);

      //les bras
      line(300, this.y + 150, 270, this.y + 90);
      line(360, this.y + 150, 380, this.y + 90);
    },
    arriver() {
      if (this.y < 3) {
        this.y = this.y + 1;
      }
    },
    direBonjour: function () {
      tagP.html("Holà, ye suis " + this.strNomRobot + " Ye remplace Superman durant son congé d'automne!");
    }
  },
  /* Robot 11, celui de Justin */
  {

    x: -350,
    strNomRobot: "Henri",
    decorer: function () {
      //paysage
      background(0, 155, 255)
      fill(20, 60, 20);
      rect(0, 250, 600, 100);
      //rocher
      fill(90, 90, 90);
      rect(0, 190, 350, 60);
    },
    afficher: function () {
      strokeWeight(2);

      //tête
      fill(50, 50, 50);
      circle(this.x + 300, 60, 50);
      line(this.x + 325, 60, this.x + 330, 30);
      line(this.x + 275, 60, this.x + 270, 30);
      circle(this.x + 330, 30, 10);
      circle(this.x + 270, 30, 10);
      circle(this.x + 290, 50, 10);
      circle(this.x + 310, 50, 10);
      rect(this.x + 290, 60, 20, 10);
      //line(this.x + 295, 65,this.x+287,58)
      // line(this.x + 300, 65,this.x+300,58)
      // line(this.x + 305, 65,this.x+313,58)
      //corp
      circle(this.x + 300, 120, 70);
      //bras
      line(this.x + 265, 120, this.x + 255, 150);
      line(this.x + 335, 120, this.x + 345, 150);
      //jambes gauche
      line(this.x + 285, 152, this.x + 280, 190);
      rect(this.x + 260, 180, 20, 10);
      //jambe droite
      line(this.x + 315, 152, this.x + 320, 190);
      rect(this.x + 320, 180, 20, 10);
      fill(0, 0, 0);
      line(this.x + 255, 25, this.x + 255, 50);
      circle(this.x + 250, 50, 10);
      //note2
      line(this.x + 350, 80, this.x + 350, 55);
      circle(this.x + 345, 80, 10);
      line(this.x + 370, 80, this.x + 370, 55);
      circle(this.x + 365, 80, 10);
      line(this.x + 350, 55, this.x + 370, 55);
      //note3

      line(this.x + 235, 90, this.x + 235, 115);
      circle(this.x + 240, 90, 10);

    },
    arriver: function () {
      if (this.x < 0) this.x = this.x + 1;
    },
    direBonjour: function () {

      tagP.html("Hey toi, je suis " + this.strNomRobot + " et j'adore jouer de la musique");

    }

  },
  /* Robot 12, celui de Alexis */
  {
    //attributs
    x: -350,
    strNom: "Flim",
    // methodes
    decorer: function () {
      background(220);
      //ciel
      fill(0, 191, 255);
      rect(0, 0, 600);
      //sol
      fill(100, 255, 0);
      rect(0, 190, 600);
    },
    afficher: function () {
      //tête
      stroke(0);
      fill(255, 255, 255);
      line(this.x + 265, 75, this.x + 265, 65);
      line(this.x + 275, 75, this.x + 275, 65);
      square(this.x + 255, 75, 30);
      square(this.x + 265, 95, 10);
      square(this.x + 265, 105, 10);
      //yeux
      strokeWeight(3);
      point(this.x + 265, 85);
      point(this.x + 275, 85);
      //corps
      strokeWeight(1);
      circle(this.x + 270, 140, 50);
      line(this.x + 220, 140, this.x + 245, 140);
      line(this.x + 270, 140, this.x + 295, 140);
      square(this.x + 265, 165, 10);
      //jambes
      quad(
        this.x + 240,
        175,
        this.x + 300,
        175,
        this.x + 300,
        200,
        this.x + 240,
        200
      );
      line(this.x + 250, 200, this.x + 250, 220);
      line(this.x + 290, 200, this.x + 290, 220);
    },

    arriver: function () {
      if (this.x < 35) {
        this.x = this.x + 1;
      }
    },
    direBonjour: function () {
      tagP.html("Bonjour mon nom est " + this.strNom);
    },
    easterEgg: function () {
      console.log("prout");
    },
  },
  /* Robot 13, celui de Guillaume */
  {
    strNomDuRobot: "Exo",
    x: -350,
    decorer: function () {

      fill(0, 160, 0);
      rect(0, 100, 600, 250);

      fill(0, 200, 245);
      rect(0, 0, 600, 210);
    },
    afficher: function () {

      // la tête
      fill(10, 100, 200);
      rect(this.x + 270, 60, 60, 60);

      // le cou
      fill(100, 100, 100);
      rect(this.x + 290, 120, 20, 30);

      // la roue
      fill(0);
      ellipse(this.x + 300, 245, 55);

      fill(200, 200, 200);
      ellipse(this.x + 300, 245, 45);

      // le corps
      fill(10, 100, 200);
      rect(this.x + 250, 150, 100, 95);

      // l'oeil
      fill(255, 255, 255);
      ellipse(this.x + 300, 90, 28, 22);

      // les cils
      point(this.x + 285, 79);
      point(this.x + 294, 74);
      point(this.x + 306, 74);
      point(this.x + 316, 79);

      // la pupille
      stroke(5);
      strokeWeight(19);
      point(this.x + 300, 90);

      // l'antenne gauche
      strokeWeight(5);
      line(this.x + 290, 60, this.x + 275, 35);

      // l'antenne droite
      strokeWeight(5);
      line(this.x + 310, 60, this.x + 325, 35)
    },
    arriver: function () {

      if (this.x < 0) {

        this.x = this.x + 4;
      }
    },
    direBonjour: function () {
      tagP.html('Bonjour, je me présente, mon nom est ' + this.strNomDuRobot + '.');
    }
  },
  /* Robot 14, celui de Louis-Philippe */
  {
    x: -380,
    strNom: "Bob",
    /* Manquait la méthode décorer */
    decorer: function () {
      background(200);
    },
    afficher: function () {
strokeWeight(1);
      //le visage
      rect(this.x + 250, 50, 75, 50, 5);
      rect(this.x + 265, 40, 45, 10);
      rect(this.x + 245, 67, 5, 15);
      rect(this.x + 325, 67, 5, 15);
      circle(this.x + 275, 65, 10);
      circle(this.x + 300, 65, 10);
      circle(this.x + 275, 65, 5);
      circle(this.x + 300, 65, 5);
      rect(this.x + 285, 73, 5, 7);
      rect(this.x + 265, 84, 45, 7);
      rect(this.x + 278, 100, 20, 15);

      // Le bas du corps et les jambe
      rect(this.x + 260, 206, 16, 20);
      rect(this.x + 300, 200, 16, 20);
      circle(this.x + 270, 200, 20);
      circle(this.x + 307, 200, 20);
      circle(this.x + 288, 180, 50);
      rect(this.x + 235, 115, 105, 50, 5);
      rect(this.x + 240, 165, 95, 12, 3);
      rect(this.x + 260, 236, 16, 30);
      rect(this.x + 300, 236, 16, 30);
      circle(this.x + 268, 228, 20);
      circle(this.x + 308, 228, 20);
      rect(this.x + 255, 266, 26, 10, 5);
      rect(this.x + 295, 266, 26, 10, 5);

      // le corps
      rect(this.x + 225, 123, 10, 20);
      rect(this.x + 340, 123, 10, 20);
      rect(this.x + 215, 128, 10, 10);
      rect(this.x + 205, 123, 15, 20);
      rect(this.x + 207, 143, 10, 40);
      rect(this.x + 350, 128, 10, 10);
      rect(this.x + 355, 123, 15, 20);
      rect(this.x + 358, 143, 10, 40);
      circle(this.x + 212, 190, 20);
      circle(this.x + 363, 190, 20);
    },
    arriver: function () {
      if (this.x < 0) {
        this.x = this.x + 1;
      }
    },
    direBonjour: function () {
      tagP.html("Bonjour, mon nom est " + this.strNom); 
      console.log("Bonjour, mon nom est " + this.strNom); 
    }
  },
  /* Robot 15, celui de Clodiane */
  {
    x: 300,
    strNom: "Bob",

    decorer: function () {
      background(192);
      fill(160, 162, 163);
      strokeWeight(0);
      rect(0, 270, 600, 150);
      // hublots
      fill(105);
      circle(100, 120, 120);
      circle(400, 120, 120);
      // mur
      rect(250, 0, 15, 270);
      rect(550, 0, 15, 270);
      rect(0, 260, 600, 10);
      // vis
      circle(240, 10, 7);
      circle(275, 10, 7);
      circle(540, 10, 7);
      circle(575, 10, 7);
      circle(240, 250, 7);
      circle(275, 250, 7);
      circle(540, 250, 7);
      circle(575, 250, 7);
      // fenetre
      fill(173, 216, 230);
      circle(100, 120, 90);
      circle(400, 120, 90);
      fill(255);
      // nuage 1
      ellipse(105, 136, 60, 15);
      circle(115, 125, 25);
      circle(130, 130, 15);
      circle(102, 130, 22);
      circle(97, 130, 18);
      // nuage 2
      ellipse(405, 136, 60, 15);
      circle(415, 125, 20);
      circle(430, 130, 15);
      circle(402, 125, 30);
      circle(383, 130, 20);
    },

    afficher: function () {
      // // point 0
      // strokeWeight(15);
      // point(300, 0);

      //Roue
      strokeWeight(0);
      fill(0);
      circle(this.x + 130, 300, 45);
      fill(160, 162, 163);
      circle(this.x + 130, 300, 30);

      //Jambe
      strokeWeight(5);
      line(this.x + 135, 225, this.x + 170, 255);
      line(this.x + 170, 255, this.x + 130, 300);
      strokeWeight(15);
      point(this.x + 170, 255);
      point(this.x + 130, 300);

      //Corps
      fill(255);
      strokeWeight(0);
      circle(this.x + 135, 105, 120);
      rect(this.x + 75, 105, 120, 120);
      fill(75)

      //Oeil
      fill(200);
      ellipse(this.x + 100, 105, 45, 65);
      fill(20);
      ellipse(this.x + 95, 105, 35, 55);
      fill(255);
      circle(this.x + 90, 120, 10);

      //Bras
      fill(20);
      strokeWeight(5);
      line(this.x + 175, 180, this.x + 215, 105);

      //Main
      strokeWeight(16);
      point(this.x + 215, 105);
      strokeWeight(0);
      triangle(this.x + 207, 105, this.x + 223, 105, this.x + 223, 80);
      triangle(this.x + 215, 97, this.x + 215, 113, this.x + 240, 97);
    },

    arriver: function () {
      if (this.x > 165) {
        this.x--;
      }
    },

    direBonjour: function () {
      tagP.html("Bonjour, mon est Bob... parfois. Ça dépend de mon humeur. En fait, mon nom est jack.");
      console.log("Bonjour. Nom nom est " + this.strNom);
    },
  },
  /* Robot 16, celui de Isaac */
  {
    x: -600,
    strNom: "Kevin",

    direBonjour: function () {
      tagP.html("Hey, je m'appelle " + this.strNom + " et j'adore les civics")
    },

    decorer: function () {
      background(220);
      fill(0, 0, 255)
      // rect(0, 300, 420, 50)
    },

    afficher: function () {

      //le cou
      fill(142, 68, 173);
      rect(this.x + 280, 100, 40, 30);

      //la tête
      fill(142, 68, 173);
      circle(this.x + 300, 60, 100);
      strokeWeight(1);

      //les yeux
      fill(255);
      ellipse(this.x + 280, 40, 30, 20);
      ellipse(this.x + 320, 40, 30, 20);
      fill(0);
      circle(this.x + 280, 40, 10);
      circle(this.x + 320, 40, 10);

      //le nez
      triangle(this.x + 300, 60, this.x + 310, 70, this.x + 290, 70);

      //le bouche
      fill(255);
      arc(this.x + 300, 90, 50, 40, 0, PI + QUARTER_PI, CHORD);
      fill(0);
      arc(this.x + 300, 90, 30, 30, 0, PI + QUARTER_PI, CHORD);

      //le body
      fill(142, 68, 173);
      rect(this.x + 205, 130, 200, 100, 20, 20, 10, 10);

      //oreille droite
      fill(142, 68, 173);
      ellipse(this.x + 250, 60, 10, 30);
      fill(255);
      ellipse(this.x + 250, 60, 5, 15);

      //oreille gauche
      fill(142, 68, 173);
      ellipse(this.x + 350, 60, 10, 30);
      fill(255);
      ellipse(this.x + 350, 60, 5, 15);

      //centre de controle
      fill(142, 68, 173);
      rect(this.x + 260, 150, 80, 60);
      fill(0);
      rect(this.x + 260, 170, 30, 10);
      fill(255);
      rect(this.x + 320, 160, 20, 5);
      rect(this.x + 320, 170, 20, 5);
      rect(this.x + 320, 180, 20, 5);
      rect(this.x + 320, 190, 20, 5);
      line(this.x + 325, 165, this.x + 325, 160);
      line(this.x + 330, 165, this.x + 330, 160);
      line(this.x + 335, 165, this.x + 335, 160);
      line(this.x + 340, 165, this.x + 340, 160);
      line(this.x + 325, 175, this.x + 325, 170);
      line(this.x + 330, 175, this.x + 330, 170);
      line(this.x + 335, 175, this.x + 335, 170);
      line(this.x + 340, 175, this.x + 340, 170);
      line(this.x + 325, 185, this.x + 325, 180);
      line(this.x + 330, 185, this.x + 330, 180);
      line(this.x + 335, 185, this.x + 335, 180);
      line(this.x + 340, 185, this.x + 340, 180);
      line(this.x + 325, 195, this.x + 325, 190);
      line(this.x + 330, 195, this.x + 330, 190);
      line(this.x + 335, 195, this.x + 335, 190);
      line(this.x + 340, 195, this.x + 340, 190);

      //roulette
      fill(142, 68, 173);
      circle(this.x + 375, 160, 40);
      fill(0);
      circle(this.x + 375, 160, 20);
      line(this.x + 375, 180, this.x + 375, 140);
      line(this.x + 355, 160, this.x + 395, 160);

      //les bras
      fill(142, 68, 173);
      circle(this.x + 410, 140, 20);
      circle(this.x + 200, 140, 20);
      rect(this.x + 120, 130, 70, 20);
      rect(this.x + 420, 130, 70, 20);
      circle(this.x + 500, 140, 20);
      circle(this.x + 110, 140, 20);
      rect(this.x + 100, 150, 20, 70);
      rect(this.x + 490, 150, 20, 70);
      ellipse(this.x + 110, 230, 40, 20);
      ellipse(this.x + 500, 230, 40, 20);

      //les jambes
      fill(142, 68, 173);
      rect(this.x + 360, 230, 40, 100, 20, 20, 20, 20);
      rect(this.x + 210, 230, 40, 100, 20, 20, 20, 20);
    },
    arriver: function () {
      if (this.x < 0)
        this.x = this.x + 1
    }
  },
  /* Robot 17, celui de Jérémi */
  {
    strNom: "Pablo",
    x: -450,
    decorer: function () {
      let galaxy = {
        locationX: random(width),
        locationY: random(height),
        size: random(12)
      }
      background(0, 38, 57)
      fill(255, 255, 255)
      stroke(255, 255, 255)
      ellipse(random(width), random(height), 40, 40);
      ellipse(mouseX, mouseY, galaxy.size, galaxy.size);
      ellipse(galaxy.locationX, galaxy.locationY, galaxy.size, galaxy.size);

    },
    afficher: function () {
      //couleure de remplissage vert
      fill(this.x + 150, 200, 30);
      stroke(0);

      //faire des rectangles pour les jambes du robot
      //jambe droite
      rect(this.x + 320, 240, 40);

      rect(this.x + 320, 200, 40);

      rect(this.x + 320, 160, 40);

      //jambe gauche
      rect(this.x + 240, 240, 40);

      rect(this.x + 240, 200, 40);

      rect(this.x + 240, 160, 40);

      //faire un triangle pour le corps du robot
      triangle(this.x + 400, 100, this.x + 300, 240, this.x + 200, 100);

      //faire un oeil au robot
      fill(255);
      circle(this.x + 270, 140, 50);
      strokeWeight(3);

      //la pupille du robot
      fill(0);
      circle(this.x + 270, 140, 20);

      //faire des antennes au robot
      line(this.x + 250, 100, this.x + 200, 50);
      line(this.x + 350, 100, this.x + 400, 50);

    },



    arriver: function () {
      if (this.x < 0)
        this.x = this.x + 1;
      // console.log(this.x)

    },
    direBonjour: function () {
      tagP.html("Bonjour mon nom est " + this.strNom);
    }
  },
  /* Robot 18, celui d'Anaïs */
  {
    x: -350,
    strNom: "Allobo",
  
    decorer: function () {
      fill(65,105,205);
      rect(0, 0, 600, 200);
      fill(255,248,220);
      circle(300, 200, 300);
      fill(220);
      rect(0, 200, 600, 170);
      noStroke(); 
    },
  
    afficher: function () {
      // les yeux
      //couleur de remplissage: blanc
      stroke(1);
      fill(255);
  
      //la forme
      square(this.x + 260, 80, 20);
      square(this.x + 310, 80, 20);
  
      //les antennes
      line(this.x + 270, 80, this.x + 260, 50);
      line(this.x + 270, 80, this.x + 280, 50);
      line(this.x + 310, 50, this.x + 320, 80);
      line(this.x + 330, 50, this.x + 320, 80);
  
      //le haut du corps
      //couleur de remplissage : bleu
      fill(0, 0, 255);
  
      //la forme
      rect(this.x + 260, 100, 70, 90);
  
      //le bas du corps
      //couleur de remplissage : rouge
      fill(255, 0, 0);
      //forme
      rect(this.x + 280, 190, 30, 50);
  
      //la base et les roues
      //couleur de remplissage
      fill(0);
      //la forme
      circle(this.x + 270, 250, 25);
      circle(this.x + 320, 250, 25);
      rect(this.x + 250, 230, 90, 20);
    },
  
    arriver: function () {
      if (this.x < 10) {
        this.x = this.x + 2;
      } else {
        this.x = 10;
      }
    },
  
    direBonjour() {
      tagP.html("Allo! Je m'appelle " + this.strNom + "!");
    },
  },
  /* Robot 19, celui de Christopher */
  {
    strNom: "G'raha",
    x: -450,
    decorer: function () {
      //ciel
      fill(0, 0, 139);
      // strokeWeight(0);
      rect(0, 0, 600);

      //sol
      fill(25, 51, 0);
      // strokeWeight(0);
      rect(0, 250, 600);

      //lune
      fill(253, 251, 239)
      circle(40, 40, 40)
    },
    afficher: function () {
      //la tête
      triangle(this.x + 260, 130, this.x + 300, 80, this.x + 330, 130);
      fill(255, 127, 0);

      //le corps
      rect(this.x + 260, 130, 70, 100);

      //les jambes
      rect(this.x + 260, 230, 10, 50);

      rect(this.x + 320, 230, 10, 50);

      //les pieds

      rect(this.x + 330, 270, 20, 10);
      rect(this.x + 240, 270, 20, 10);

      //les bras

      rect(this.x + 240, 130, 20, 70);
      rect(this.x + 330, 130, 20, 70);

      //les mains

      circle(this.x + 250, 210, 20);
      circle(this.x + 340, 210, 20);

      //les yeux
      circle(this.x + 288, 107, 10);
      circle(this.x + 308, 107, 10);

      //la bouche
      rect(this.x + 282, 115, 30, 10)
    },
    arriver: function () {
      if (this.x < 0) {
        this.x = this.x + 2
      }
    },
    direBonjour: function () {
      tagP.html("Bonjour mon nom est " + this.strNom)
    },
  },
  /* Robot 20, celui de Louis-Émile */
  {
    strNom: "Island boy",
    x: -100,


    decorer: function () {
      background(220);
      var color1 = color(60, 5, 220);
      var color2 = color(0, 255, 0);
      setGradient(0, 0, 600, windowHeight, color1, color2, "Y");

    },

    afficher: function () {
      stroke(0)

      strokeWeight(1)
      // couleur de remplissage : mauve
      fill(212, 115, 212);

      // tete
      rect(this.x, 50, 70, 60);

      //body
      rect(this.x + 25, 110, 20, 110);

      //couleur roue
      fill(0, 0, 0);

      //roue
      circle(this.x + 35, 230, 45);

      //couleur centre roue
      fill(194, 30, 86);

      //centre roue
      circle(this.x + 35, 230, 20);

      //eyes color
      fill(255, 255, 255);

      //eyes
      circle(this.x + 15, 80, 20)

      //eyes
      circle(this.x + 60, 80, 30)

      //bouche color
      fill(0, 0, 0);

      //bouche
      line(this.x + 30, 105, this.x + 60, 100);

      //bras
      line(this.x + 25, 160, this.x, 140);

      //bras
      line(this.x + 45, 160, this.x + 90, 140);




    },
    arriver: function () {
      if (this.x <= 260) {
        this.x = this.x + 6, 5
      }


    },
    direBonjour: function () {

      tagP.html(" Bonjour mon nom est " + this.strNom);

    }
  },
  /* Robot 21, celui de Chalarak */
  {
    x: -600,
    strNomRobot: "Garon",
    decorer: function () {
      //ciel
      fill(0, 0, 139);
      // strokeWeight(0);
      rect(0, 0, 600);

      //sol
      fill(25, 51, 0);
      // strokeWeight(0);
      rect(0, 250, 600);

      //lune
      fill(253, 251, 239)
      circle(40, 40, 40)

    },

    afficher: function () {

      //aile gauche
      fill(174, 213, 129);
      stroke(0);
      strokeWeight(4);
      triangle(this.x + 280, 170, this.x + 150, 110, this.x + 80, 170);
      triangle(this.x + 280, 170, this.x + 150, 230, this.x + 80, 170);
      line(this.x + 280, 170, this.x + 115, 200);
      line(this.x + 280, 170, this.x + 115, 140);

      //aile droite
      triangle(this.x + 320, 170, this.x + 450, 110, this.x + 520, 170);
      triangle(this.x + 320, 170, this.x + 450, 230, this.x + 520, 170);
      line(this.x + 320, 170, this.x + 485, 200);
      line(this.x + 320, 170, this.x + 485, 140);

      //queue
      strokeWeight(10);
      //line(300,230,300,280)
      noFill();
      arc(this.x + 390, 230, 160, 50, 0, PI);

      strokeWeight(5);
      fill(230, 126, 34);
      quad(
        this.x + 470,
        230,
        this.x + 460,
        210,
        this.x + 470,
        190,
        this.x + 480,
        210
      );

      //couleur
      strokeWeight(3);
      fill(169, 50, 38);
      quad(
        this.x + 470,
        220,
        this.x + 465,
        210,
        this.x + 470,
        205,
        this.x + 475,
        210
      );

      //corps
      fill(51, 102, 0);
      strokeWeight(3);
      square(this.x + 250, 130, 100);

      //tête

      triangle(this.x + 200, 50, this.x + 400, 50, this.x + 300, 170);

      //oreille gauche
      triangle(this.x + 210, 10, this.x + 200, 50, this.x + 240, 50);

      // oreille droite
      triangle(this.x + 380, 10, this.x + 360, 50, this.x + 400, 50);

      // oeil gauche

      fill(0);
      ellipse(this.x + 270, 80, 40, 20);
      //oeil gauche

      //oeil droit
      ellipse(this.x + 330, 80, 40, 20);

      //iris gauche
      fill(255, 0, 0);
      circle(this.x + 270, 80, 10);

      //iris droit
      circle(this.x + 330, 80, 10);

      //bouche
      fill(255, 255, 0);
      square(this.x + 285, 110, 30);

      //dents
      fill(158, 158, 158);
      //dent haut gauche
      triangle(this.x + 285, 110, this.x + 295, 110, this.x + 290, 120);
      //dent haut milieu
      triangle(this.x + 295, 110, this.x + 305, 110, this.x + 300, 120);
      //dent haut droite
      triangle(this.x + 305, 110, this.x + 315, 110, this.x + 310, 120);
      //dent bas droit
      triangle(this.x + 305, 140, this.x + 315, 140, this.x + 310, 130);
      //dent bas milieu
      triangle(this.x + 305, 140, this.x + 295, 140, this.x + 300, 130);
      triangle(this.x + 295, 140, this.x + 285, 140, this.x + 290, 130);

      //bras gauche
      line(this.x + 250, 130, this.x + 180, 200);

      //bras droit
      line(this.x + 350, 130, this.x + 420, 200);

      //main gauche
      fill(128, 0, 128);
      circle(this.x + 180, 200, 20);

      //main droite
      circle(this.x + 420, 200, 20);

      //doigts main gauche
      line(this.x + 170, 193, this.x + 160, 190);
      line(this.x + 160, 200, this.x + 170, 200);
      line(this.x + 173, 210, this.x + 165, 215);

      //doigts main droite
      line(this.x + 440, 190, this.x + 430, 193);
      line(this.x + 430, 200, this.x + 440, 200);
      line(this.x + 438, 215, this.x + 428, 210);

      //jambe gauche
      rect(this.x + 250, 230, 10, 55);

      //jambe droit
      strokeWeight(3);
      rect(this.x + 340, 230, 10, 55);

      //pied gauche
      rect(this.x + 230, 285, 30, 10);

      //pied droit
      rect(this.x + 340, 285, 30, 10);
    },

    arriver: function () {
      if (this.x < 0) {
        this.x = this.x + 2;
      }

    },
    direBonjour: function () {
      tagP.html("Bonjour, mon nom est Garon");
    }

  },
  /* Robot 22, celui de Janis */
  {
    strNom: "Tiny",
    x: -350,
    decorer: function () {
      background(149, 231, 255);
      noStroke();

      //buisson
      fill(132, 226, 108);
      ellipse(140, 170, 120, 90);
      fill(136, 235, 111);
      ellipse(38, 200, 190, 90);
      fill(136, 233, 111);
      ellipse(200, 200, 190, 90);

      //nuage
      fill(252, 252, 252);
      ellipse(400, 50, 70, 50);
      fill(253, 253, 253);
      ellipse(430, 35, 50, 50);
      fill(254, 254, 254);
      ellipse(450, 50, 100, 50);

      //sun
      fill(255, 255, 128);
      ellipse(100, 35, 50, 50);

      //gazon
      fill(144, 249, 118);
      rect(0, 216, 600, 90);
    },
    afficher: function () {
      // couleur du robot : bleu pastel
      fill(204, 229, 225);
      strokeWeight(5);
      stroke(0);

      //tete
      fill(204, 229, 225);
      square(this.x + 265, 50, 70);
      //square(this.x + 265, 50, 70, 20);

      //cou
      fill(64, 64, 64);
      rect(this.x + 290, 120, 20, 30);

      //roue
      fill(64, 64, 64);
      circle(this.x + 300, 240, 50);

      //corps
      fill(204, 229, 225);
      rect(this.x + 270, 140, 60, 105);

      //oeil
      arc(this.x + 300, 80, 47, 15, 0, PI);
      line(this.x + 285, 74, this.x + 290, 87);
      line(this.x + 300, 74, this.x + 300, 87);
      line(this.x + 315, 74, this.x + 310, 87);

      //lignes
      line(this.x + 270, 30, this.x + 290, 50);
      line(this.x + 330, 30, this.x + 310, 50);
    },

    arriver: function () {
      //this.x = this.x + 1;
      if (this.x <= 1) {
        this.x = this.x + 2;
      }
    },
    direBonjour: function () {
      tagP.html("Bonjour, mon nom est " + this.strNom + ".");
    }
  },
  /* Robot 23, celui de Daren */
  {
    strNomRobot: "Lisa",
    pas: 3,
    x: -300,

    //Afficher le décor du robot
    decorer: function () {

      let xCloture = 10;
      // limite droite sur axe des x
      let intLimiteX = 600;

      //Arrière-plan
      background(80, 200, 255);
      //Plancher
      noStroke();
      fill(86, 161, 0);
      rect(0, 250, 600, 100);

      fill(203, 203, 203);
      rect(0, 200, 600, 10);

      fill(203, 203, 203);
      rect(0, 250, 600, 10);

      while (xCloture < intLimiteX) {
        fill(203, 203, 203);
        rect(xCloture, 250, 10, -40);
        xCloture = xCloture + 30;
      }

    },

    //Afficher le robot
    afficher: function () {
      //corps
      fill(46, 46, 46);
      rect(this.x + 240, 205, 140, 120, 10);

      //Main gauche
      fill(92, 92, 92);
      rect(this.x + 220, 220, 30, 30, 10);

      //Main droite
      fill(92, 92, 92);
      rect(this.x + 370, 220, 30, 30, 10);

      //Jambe gauche
      fill(92, 92, 92);
      rect(this.x + 235, 300, 70, 30, 10);
      //Jambe droite
      fill(92, 92, 92);
      rect(this.x + 315, 300, 70, 30, 10);

      //Cou
      fill(92, 92, 92);
      rect(this.x + 290, 180, 40, 30, 10);

      //Tete
      fill(203, 203, 203);
      rect(this.x + 220, 110, 180, 80, 20);

      //Oeil Gauche
      fill(110, 110, 110);
      rect(this.x + 240, 125, 50, 40, 10);

      fill(255, 255, 255);
      rect(this.x + 240, 125, 25, 25, 10);

      //Oeil droit
      fill(110, 110, 110);
      rect(this.x + 330, 125, 50, 40, 10);

      fill(255, 255, 255);
      rect(this.x + 330, 125, 25, 25, 10);

      //Bouche
      arc(this.x + 310, 170, 40, 25, 0, PI);

    },

    arriver: function () {

      if (this.x < -10) {
        this.x = this.x + 3;
      }

    },

    direBonjour: function () {
      tagP.html("Bonjour mon nom est " + this.strNomRobot);
    }
  },
  /* Robot 24, celui de Malorie */
  {
    x: -400,
    strNom: "R2D2",
    afficher: function () {
      //cou
      rect(this.x + 290, 135, 19, 70);

      // tete
      circle(this.x + 300, 90, 100);

      //corps
      rect(this.x + 245, 160, 120, 120);
      fill(250);

      // yeux
      circle(this.x + 300, 90, 20);
      point(this.x + 300, 90);
      point(this.x + 330, 80);
      stroke(0);
      strokeWeight(5);
      fill(153, 175, 200);
    },
    arriver: function () {
      if (this.x < 0) {
        this.x = this.x + 3;
      } else this.x = 0;
    },
    direBonjour: function () {
      tagP.html("Bonjour, mon nom est " + this.strNom);
    },
    decorer: function () {
      // couleur de fond
      background(118, 198, 214);
      // couleur de "plancher" 
      // tagP.style('background-color', 'lavender');

    }
  }
  /* Robot 25, celui de Michael */

];
let arrCodeurs = [
  { /* robot 0 */
    nom: "Marika Robitaille",
    pseudo: "marz",
    mets: "sushis et dumplings, tacos et fajitas",
    musique: "indie rock, emo rap, hyperpop",
    activites: "faire de la musique, jouer à Valorant et sortir avec mes amis:)",
    texte: "Kiki, le robot, est conçu pour trier des déchets directement en les jetant. Ce qui se recycle est envoyé dans un tube. Ce qui ne se recycle pas, dans un autre. Les tubes sont alimentés par énergie solaire, tout comme le robot lui-même. Ces tubes mène chacun à une genre d'usine, qui, rendu là, j'espère, ne brulera pas les déchets."
  },
  { /* robot 1 */
    nom: "Rosalie Roy",
    pseudo: "pinkblossom",
    mets: "lasagne, macaroni, jambon",
    musique: "pop, électro, rock",
    activites: "musique, cuisine, vélo",
    texte: "Robbie, le robot est conçu pour cerner les émotions des gens et les aider et/ou réconforter avec celles-ci. Il aide les psychologues ainsi que les travailleurs sociaux afin de rendre la santé mentale des individus meilleure."
  },
  { /* robot 2 */
    nom: "Giselle Hessen",
    pseudo: "caramel",
    mets: "lasagne",
    musique: "rock alternatif, pop, reggaeton",
    activites: "randonnée pédestre, art",
    texte: "Poupou, le robot, est conçu pour faire le ménage. Ce robot domestique permet de réaliser plusieurs tâches ménagères telles que laver les vitres, le sol, les comptoirs et les meubles. Aussi, il peut nettoyer les cuvettes, vider la poubelle et plier les vêtements. Poupou est capable de ranger les objets et lorsque son propriétaire a besoin de quelque chose, il peut lui apporter."
  },
  { /* robot 3 */
    nom: "Marianne Anctil",
    pseudo: "kinoko",
    mets: "poulet général tao, salade asiatique, lasagne",
    musique: "alternatif, rock, pop",
    activites: "wakeboard, volleyball, hockey",
    texte: "Markus, le robot, est conçu pour repérer les zones à haut niveau de pollution dans l'air, comme par exemple de grande quantité de smog. Il possède un système de filtrage interne qui lui permet de transformer l'air polluée à haut niveau de CO2 en air potable, comme le font les végétaux."
  },
  { /* robot 4 */
    nom: "Éloïse Matteau",
    pseudo: "kaixo",
    mets: "steak, hamburger",
    musique: "rap français et pop",
    activites: "soccer et snowboard",
    texte: "Le robot Kaneki a pour but de chercher des mines terrestres sur les champs de bataille et ainsi éviter de mettre en danger les soldats et/ou les chiens soldats."
  },
  {  /* robot 5 */
    nom: "Xavier Chamberland",
    pseudo: "charlie",
    mets: "hamburger, poutine, sushi",
    musique: "metal, rock, jazz",
    activites: "randonnée, guitare, jeux vidéo",
    texte: "Mon robot est conçu pour écouter de la musique et d'en ressortir les partitions parfaites de tous les instruments, incluant les paroles. Il rend le travail de tout musiciens qui tentent de reproduire des musiques plus faciles."
  },
  { /* robot 6 */
    nom: "Laurianne Vallée",
    pseudo: "jetKiller",
    mets: "poutine et lasagne",
    musique: "rap et pop",
    activites: "soccer",
    texte: "Jet, le robot, est conçu pour parler de mon créateur et de dire à travers moi ses préférences dans la vie."
  },
  { /* robot 7 */
    nom: "Andréanne Archambault",
    pseudo: "croquette",
    mets: "fondue, pâte, steak",
    musique: "punk-rock, pop-rock",
    activites: "hiking, gaming, lecture",
    texte: "George, le robot, est conçu pour purifier l'eau. Il transforme l'eau polluée, souillée ou encore salée pour la rendre potable. Il rend cette eau accessible à la population mondiale."
  },
  {  /* robot 8 */
    nom:"Samuel Mutoo",
    pseudo: "shadowBless",
    mets: "poulet, riz, légumes",
    musique: "rap, R&B, afrobeat",
    activites: "football, vélo et dessin",
    texte: "HDA.44, le robot, est conçu pour augmenter les performances"
  },
  {  /* robot 9 */
    nom: "Benjamin Brouillette",
    pseudo: "satiric",
    mets: "sushis, tournedos de porc, pizza",
    musique: "métal, rock, jazz hip-hop",
    activites: "conditionnement physique, football",
    texte: "Roboto Roberto, le robot, est un modèle de la série ESR (Energy Stocking Robots) de la NASA qui permet de stocker l'énergie cinétique produite par le roulement de son corps dans ses batteries internes prévues à cet effet. Cette même énergie produite lui permet aussi de recharger sa batterie principale. De plus, il peut capturer l'énergie électrique inutilisée, que nos objets technologiques quotidiens auraient laissés échapper, à l'aide de l'aimant au centre de son corps, pour ainsi perdre le moins d'énergie possible. Lui et ses millions de frères permettent à nos villes de fonctionner uniquement à l'électricité et ainsi arrêter la pollution."
  },
  {  /* robot 10 */
    nom: "Michel K. Lord",
    pseudo: "marco",
    mets: "Bavette de boeuf avec sauce champignon et asperges, Fettucini alfredo avec tartare de saumon, Risotto de champignons sauvages avec fromage parmesan",
    musique: "électro, lounge, chillstep",
    activites: "jogging, hicking",
    texte: "Ronaldo Gonzalez, le robot, est conçu pour modéliser les chaînes d'approvisionnement des produits afin de pouvoir réduire efficacement les inefficacités causant ainsi des pertes financières et générant des GES inutilement. Celui-ci pourrait d'ailleurs être présent lors de la conception de produits polluants afin d'offrir des alternatives responsables environnementalement. Les fins de semaine, Ronaldo remplace Superman afin de permettre celui-ci d'avoir des vacances bien méritées."
  },
  {  /* robot 11 */
    nom: "Justin Carrier",
    pseudo: "lilewis",
    mets: "lasagne",
    musique: "rap / hip-hop",
    activites: "volley-ball",
    texte: "Henri, le robot est conçu pour créer des mélodies pour des artistes. Il est doté d'une intelligence artificielle qui lui permet d'innover et de créer des chansons inconnues de l'homme. Henri a la capacité de reproduire tous les instruments de musique, tels que la guitare, la batterie, la Bass, etc."
  },
  {  /* robot 12 */
    nom: "Alexis Perron",
    pseudo: "mamie",
    mets: "hamburger, lasagne, mac&cheese",
    musique: "80's rock, rock alternatif",
    activites: "snowboard, vélo",
    texte: "Flim, le robot, est conçu pour aider les humains à executer ou aider à faire des petites tâches simple du quotidien. Il divertit les humains en dansant ou compter des blagues!"
  },
  {  /* robot 13 */
    nom: "Guillaume Baillargeon",
    pseudo: "wyllix",
    mets: "lasagne, pâté chinois et pâtes au pesto",
    musique: "pop",
    activites: "soccer, randonnée et vélo",
    texte: "Exo, le robot, est conçu pour améliorer les problèmes climatiques que nous vivons présentement. Grâce à ses capacités, Exo permettra un avenir meilleur en facilitant le triage des déchets, en supprimant complètement l'utilisation du plastique et en limitant les déplacements à travers la planète."
  },
  { /* robot 14 */
    nom: "Louis-Philippe Roy",
    pseudo: "sky23",
    mets: "sushis",
    musique: "rap",
    activites: "soccer",
    texte: "Bob, le robot, est conçu pour faire la cuisine."
  },
  { /* robot 15 */
    nom: "Clodiane Charette",
    pseudo: "formitastic",
    mets: "Assiette terre et mer",
    musique: "années 70, Classique",
    activites: "ski de fond et dessin",
    texte: "Bob ou Jack ou tout autre nom, dépendamment de son humeur est un robot qui s'occupait du Centre d'enrichissement d'Aperture Science avec GLaDOS avant que le centre ne se fasse détruire. Maintenant libéré du centre, il erre sur Terre. Il n'a pas grande utilité, sinon que d'exister."
  },
  { /* robot 16 */
    nom: "Isaac Dubé",
    pseudo: "izyy",
    mets: "raclette, steak, ailes poulet.",
    musique: "rock et rap",
    activites: "golf, gaming, crossfit",
    texte: "Bonjour tout le monde, je vous présente mon robot, Kevin. Il adore la Monster, mais surtout les chars. Il adore acheter de nouvelles pièces pour rendre ses voitures plus performantes et plus belles."
  },
  {  /* robot 17 */
    nom: "Jérém Savard",
    pseudo: "sceki",
    mets: "lasagne, pizza, tacos",
    musique: "rnb, rock moderne, dance pop",
    activites: "snow, tennis, vtt",
    texte: "Pablo, le robot, est conçu pour traverser l'espace à la vitesse de la lumière pour chercher des solutions à la pollution parmi les autres civilisations extraterrestres qui ont déjà réglé le problème."
  },
  {  /* robot 18 */
    nom: "Anaïs Mannée-Batschy",
    pseudo: "ninis",
    mets: "gratin dauphinois",
    musique: "pop",
    activites: "course",
    texte: "Allobo, le robot, est conçu pour sauver les petits chats dans les arbres"
  },
  {  /* robot 19 */
    nom: "Christopher Byatt",
    pseudo: "falconDeloix",
    mets: "pâtes, poisson",
    musique: "rock, pop, électro",
    activites: "basketball, randonnée, entrainement",
    texte: "G'raha, le robot, est conçu pour analyser les documents d'une ancienne civilisation disparue ainsi que découvrir leurs secrets longtemps cachés."
  },
  {  /* robot 20 */
    nom: "Louis-Émile Vromet",
    pseudo: "le_singe",
    mets: "rap, hip-hop",
    musique: "rap, hip-hop",
    activites: "faire des beats, velo montagne",
    /* correction de quelques fautes */
    texte: "Island boy, le robot est conçu pour accompagner son maitre et participer à des partys. Il fait lever l'ambiance! Il boit beaucoup d'alcool ce sacré robot."
  },
  {  /* robot 21 */
    nom: "Chalarak Bergeron St-Pierre",
    pseudo: "takeko",
    mets: "sushis, pad thaï, soupe Pho",
    musique: "pop, rock, jazz",
    activites: "karaté et soccer",
    texte: "Garon: Un ancien robot de guerre qui a été reprogrammé comme un robot domestique qui a comme but premier de protéger son propriétaire et ses êtres chers contre toutes menaces possibles. Son programme permet de détecter les menaces et de s'en débarrasser de façon pacifique à moins de situation extrême."
  },
  {  /* robot 22 */
    nom: "Janis Bouchard-Dufour",
    pseudo: "mist",
    mets: "bulgogi, saumon et crevette nordique",
    musique: "kpop, rock",
    activites: "lire un livre dehors, promener mon chien",
    texte: "Tiny, le robot, est conçu pour être une nounou. Elle peut raconter des histoires et s’occuper des enfants. Tiny, a déjà des histoires préenregistrées ,mais elle peut en produire elle-même lorsque les enfants veulent une histoire spéciale."
  },
  {   /* robot 23 */
    nom: "Daren Garneau-Dionne",
    pseudo: "nuit_etoilee123",
    mets: "sushi, club sandwich",
    musique: "pop, électronique et r&b",
    activites: "randonnée, série télé et jeu vidéo",
    texte: "Lisa, le robot est conçu pour créer des tableaux de peinture à la manière d’un artiste de l’époque en analysant les œuvres de cet artiste."
  },
  {  /* robot 24 */
    nom: "Malorie Ouellet",
    pseudo: "churros",
    mets: "sushis",
    musique: "pop",
    activites: "ski",
    texte: "R2D2 est conçu pour réduire les émissions de CO2"
  },
  //  {   /* robot 25 */
  //   nom:"Michael Smith",
  //   pseudo: "shΛdΦω",
  //   mets: "pizza,lasagne",
  //   musique: "rock",
  //   activites: "soccer, hockey, badminton",
  //   texte: "Αιφπδ, le robot, est conçu pour jouer aux jeux vidéos, mémoriser les personnes qui ont changé le monde et accumuler les connaissances du passé"
  // },
];


/***************************************
 * fonctions de P5JS - NE PAS MODIFIER
 ****************************************/
function setup() {
  /* tirage au sort du premier robot : AJUSTER le nombre de valeurs */
  intNoRobot = 9; 
  // intNoRobot = Math.floor(Math.random() * arrRobots.length);

  let canevas = createCanvas(600, 350);
  canevas.parent('sketch-holder'); 
  // canevas.style('min-width', '300px');  
  // canevas.style('width', '100%'); 

  /* DÉBUT zone de paroles du robot */
  tagP = createP('...');
  tagP.position(0, 400);
  tagP.style('width', '100%'); 
  // tagP.style('width', '600px'); 
  tagP.style('background-color', 'rgba(255,255,255,0.5)');
  tagP.style('text-align', 'center');
  tagP.style('padding', '15px');
  /* zone de paroles du robot FIN */
}

function draw() {
  arrRobots[intNoRobot].decorer();
  arrRobots[intNoRobot].afficher();
  arrRobots[intNoRobot].arriver();
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY < height) {
    arrRobots[intNoRobot].direBonjour();
  }
}

/* Fonction utilitaire ajouté par Louis-Émile */
/* @author Kelly Lougheed */
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") { // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == "X") { // Left to right gradient
    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j, x, x + w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y + h);
    }
  }
}