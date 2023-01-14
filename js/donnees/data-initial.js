const arrCodeurs = [
  /* GROUPE 1 */
    {
        prenom : "Sarah",
        nom : "Al Mahsani",
        pseudo : "sarahalm02",   // identifiant Github?
        metsFavoris : [
            "sushi",
            "tarte aux pommes",
            "saumon"
        ], 
        hobbies:[],
        stylesMusique : [
            "pop",
            "rock",
            "rap"
        ],
        urlsMusique : [             // 2 par style
            "https://www.youtube.com/watch?v=pok8H_KF1FA&ab_channel=dojacatVEVO",
            "https://www.youtube.com/watch?v=gNi_6U5Pm_o&ab_channel=OliviaRodrigoVEVO",
            "https://www.youtube.com/watch?v=hP7ttJ4UAFc&ab_channel=RinaSawayamaVEVO",
            "https://www.youtube.com/watch?v=9Ko-nEYJ1GE&ab_channel=dojacatVEVO",
            "https://www.youtube.com/watch?v=pok8H_KF1FA&ab_channel=dojacatVEVO",
            "https://www.youtube.com/watch?v=BC19kwABFwc&ab_channel=DuaLipa",
        ],
        robot : {
            x: -350,
            strNom: "Lala",
            afficher: function () {
              
              fill(200,8,10);
            //tête
            circle(this.x+290,60,60);
            //oeil
            fill(10,100,10);
            circle(this.x+290,60,25);
            fill(200,30,50);
            circle(this.x+290,60,10);
            //cou
            fill(0,0,10);
            circle(this.x+290,105,30);
            //pied
            fill(200,9,50);
            arc(this.x+290, 200, 80, 100, -0.7, PI + QUARTER_PI, CHORD);
            //corps
            fill(200,9,0);
            rect(this.x+240,121,100,60);
            },
            arriver: function (){
              if(this.x <0){
                this.x++;
              }
            },
            direBonjour: function (){
              console.log("Bonjour mon nom est " + this.strNom);
            },
          }, 
        descriptionIA : "Le robot Loulou est un robot de ménage intelligent. Il peut faire n'importe quelle tâche ménagère possible dans une maison; il suffit de lui demander !", // Entre 30 et 120 mots
        autorisePublication : true  // OU false
    },
    {
        prenom : "Élodie",
        nom : "Bonneau",
        pseudo : "progIssues",   // identifiant Github?
        metsFavoris : [
            "spaghetti",
            "chocolat",
            "pain"
        ],
        hobbies:[],
        stylesMusique : [
            "old school rap",
            "funk rock",
            "rock"
        ],
        urlsMusique : [             // 2 par style
            "https://www.youtube.com/watch?v=1V_xRb0x9aw",
            "https://www.youtube.com/watch?v=S9bCLPwzSC0",
            "https://www.youtube.com/watch?v=Sb5aq5HcS1A",
            "https://www.youtube.com/watch?v=0kT5w27YxyI",
            "https://www.youtube.com/watch?v=6hzrDeceEKc",
            "https://www.youtube.com/watch?v=ErvgV4P6Fzc",
        ],
    
    
        robot : {
      
      x: -450 ,
       afficher: function(){
        //la tête
        fill(170);
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
      
       } ,
          
       arriver : function(){
           if (this.x < 0){
              this.x = this.x + 5;
              } else {
        //le bras gauche
        push();
        circle(this.x + 250, 118.5, 25);
        translate(this.x + 234, 121);
        rotate(45);
        rect(this.x + 0, 0, 20, 60);
        pop();
      
        // le bras droit
        circle(this.x + 350, 118.5, 25);
        translate(this.x + 352, 135);
        rotate(-45);
        rect(this.x + 0, 0, 20, 60);
            }
          }
          
    }, 
    
        descriptionIA : "Steelman, mon robot, est conçu pour assister les personnes âgés avec des mobilités réduites ou des maladies qui diminuent leur indépendance. Ce robot remplacera les infirmières en une version plus performante car ils n'ont pas besoin de repos. ", // Entre 30 et 120 mots
        autorisePublication : false 
    },
    {
        prenom : "Maxime-Olivier",
        nom : "Bourgeois",
        pseudo : "maxoproduction",   // identifiant Github?
        metsFavoris : [
            "Lasagne",
            "Pâte saucisses fumées",
            "pâté chinois"
        ],
        hobbies:[],
        stylesMusique : [
            "Rap français",
            "Rock",
            "Éléctro"
        ],
        urlsMusique : [             // 2 par style
            "https://www.youtube.com/watch?v=lKsAdTJtdcg",
            "https://youtu.be/F8do1V5ivbI?t=39",
            "https://www.youtube.com/watch?v=WxnN05vOuSM",
            "https://www.youtube.com/watch?v=X4bgXH3sJ2Q",
            "https://youtu.be/Kh4mvsw6S88",
            "https://www.youtube.com/watch?v=AFSLGv4AMs4",
        ],
        robot : {
      x: -400,
      strNom: "Maxoli",
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
    }, // Enlever les guillemets
        descriptionIA : "Jacques, le robot, est conçu pour aider à rétablir et maintenir le climat de la planète Terre. L'IA lui permet d'analyser les données environnementales et de prendre les mesures nécessaires pour sauver la planète de la mort inévitable. Jacques est constamment à l'écoute des humains et de leur environnement, et il est prêt à intervenir à tout moment pour aider à prévenir la catastrophe.",
        autorisePublication : true
    },
    {
        prenom : "Perle",
        nom : "Costedoat",
        pseudo : "uwu",   // identifiant Github?
        metsFavoris : [
            "Macaronis",
            "Sushis",
            "Crêpes"
        ],
        hobbies:[],
        stylesMusique : [
            "pop",
            "k-pop",
            "indie"
        ],
        urlsMusique : [             // 2 par style
            "https://www.youtube.com/watch?v=hyj4JFSErrw",
            "https://www.youtube.com/watch?v=DXGelmwqfm4",
            "https://www.youtube.com/watch?v=TQTlCHxyuu8",
            "https://www.youtube.com/watch?v=EaswWiwMVs8",
            "https://www.youtube.com/watch?v=nyuo9-OjNNg",
            "https://www.youtube.com/watch?v=mTLQhPFx2nM",
        ],
        robot : {x: -350,
      sens: 0,
      strNom : "marie",
    afficher: function(){
      
      //remplissage mauve//
      fill(90,0,90);
      
      //tête du robot//
      circle(this.x+300,100,50);
      
      //le corps//
      rect(this.x+276,125,50,100);
      
      //bras droit//
      rect(this.x+256,125,20,30);
      
      //bras gauche//
      rect(this.x+326,125,20,30);
      
      //oeil
      fill("#FFFFFF");
      circle(this.x + 300,100,20);
      
      fill("#222222");
      circle(this.x+300,100,9);
      }}, // Enlever les guillemets
        descriptionIA : "C'est un gentil petit robot qui n'a pas d'autres fonctions que de vous amuser avec ses blagues médiocres.", // Entre 30 et 120 mots
        autorisePublication : true  // OU false
    },
    {
        prenom : "Kim",
        nom : "Dion (manque mets favoris et styles musique)",
        pseudo : "skye506",   // identifiant Github?
        metsFavoris : [
            "__________________",
            "__________________",
            "__________________"
        ],
        hobbies:[],
        stylesMusique : [
            "__________________",
            "__________________",
            "__________________"
        ],
        urlsMusique : [             // 2 par style
            "__________________",
            "__________________",
            "__________________",
            "__________________",
            "__________________",
            "__________________",
        ],
        robot : {
      // x=0
      x: 0,
      strNom: "D-O",
      afficher: function () {
        //circle blanc (corps)
        stroke(0, 0, 0);
        fill(255, 255, 255);
        // circle(250, 325, 200);
        circle(250, 225, 130);
    
        //circle vert (corps)
        stroke(0, 0, 0);
        fill(77, 172, 71);
        // circle(250, 325, 150);
        circle(250, 225, 100);
    
        //1 ligne noir (corps)
        stroke(0, 0, 0);
        // line(180, 300, 320, 300);
        line(205, 215, 295, 215);
    
        //2 ligne noir (corps)
        stroke(0, 0, 0);
        // line(175, 325, 325, 325);
        line(200, 225, 300, 225);
    
        //3 ligne noir (corps)
        stroke(0, 0, 0);
        // line(180, 350, 320, 350);
        line(205, 250, 295, 250);
    
        //triangle (tête)
        // triangle(150, 190, 325, 100, 325, 240);
        triangle(180, 140, 310, 90, 310, 170);
    
        //rectangle noir (corps)
        fill(0, 0, 0);
        // rect(225, 300, 55, 93);
        rect(238, 225, 27.5, 46.5);
    
        // cercle noir (tête)
        // circle(270, 155, 20);
        circle(270, 120, 12);
    
        //ligne grise (corps)
        stroke(70, 70, 70);
        // line(252, 225, 252, 400);
        line(252,160, 252, 275);
    
        //cercle gris (corps)
        fill(70, 70, 70);
        circle(252, 225, 20);
    
        // entaine (tête)
        stroke(0, 0, 0);
        // line(325, 150, 350, 80);
        line(325, 150, 350, 80);
    
        // cercle entaine (tête)
        // circle(350, 80, 10);    
        circle(350, 80, 10);
    
        //rectangle pour le sol 
        fill(100, 100, 100);
        rect(0, 290, width, 20);
      },
      arriver: function () {
        if (this.x <= 0) {
          // this.x=++
          this.x++;
        }
      },
    },  
    
        descriptionIA : "D-O est un robot capable d'aider les jeunes enfants atteints d'une neurodiversité. Il est équipé d'une intelligence artificielle capable de trouver le meilleur moyen d'aider. Celle-ci apprend selon le trouble de l'enfant. Il s'adapte selon les apprentissages et les difficultés de son utilisateur.", // Entre 30 et 120 mots
        autorisePublication : true  // OU false
    },
    {
        prenom : "Xavier",
        nom : "Dion",
        pseudo : "xavdino",   // identifiant Github?
        metsFavoris : [
            "tartar de saumon",
            "filet mignon",
            "Crevette bangbang"
        ],
        hobbies:[],
        stylesMusique : [
            "DnB",
            "Tech House",
            "Rap"
        ],
        urlsMusique : [             // 2 par style
            "https://open.spotify.com/track/1Mze7crzF9BWo82DiAsmjj?si=a0c032427cb04ddd",
            "https://open.spotify.com/track/1LIvdWNdKmHvU0FJvw2diN?si=1f30148c17e04809",
            "https://open.spotify.com/track/2QB15REBPc0fU9CypfD55r?si=79a924a2a24b4ea1",
            "https://open.spotify.com/track/1uXPu4aSDFPLzyNcH6ASD4?si=65496c89316b43eb",
            "https://open.spotify.com/track/2Fw5S2gaOSZzdN5dFoC2dj?si=f8426807c17c41c8",
            "https://open.spotify.com/track/2e3Ea0o24lReQFR4FA7yXH?si=536368068ca34189",
        ],
        robot :{
        x: -350,
        srtNom: "Quest",
        afficher: function () {
          //la tête
          fill(120, 120, 120);
          rect(this.x + 200, 60, 80, 30, 20);
    
          fill(10, 200, 255);
          rect(this.x + 230, 90, 20, 30);
          circle(this.x + 215, 75, 15);
          circle(this.x + 265, 75, 15);
    
          //le corp
          fill(120, 120, 120);
          rect(this.x + 210, 120, 90, 60);
          rect(this.x + 320, 120, 90, 60);
    
          fill(10, 200, 255);
          rect(this.x + 300, 140, 20, 20);
          line(this.x + 260, 180, this.x + 260, 200);
          line(this.x + 360, 180, this.x + 360, 200);
    
          fill(10, 200, 255);
          triangle(this.x + 210, 125, this.x + 210, 180, this.x + 160, 225);
          triangle(this.x + 410, 125, this.x + 410, 180, this.x + 460, 225);
    
          //les roues
          fill(0, 0, 0);
          circle(this.x + 160, 225, 50);
          circle(this.x + 260, 225, 50);
          circle(this.x + 360, 225, 50);
          circle(this.x + 460, 225, 50);
    
          fill(200, 220, 220);
          circle(this.x + 360, 225, 25);
          circle(this.x + 460, 225, 25);
          circle(this.x + 160, 225, 25);
          circle(this.x + 260, 225, 25);
        },
        direBonjour: function () {
          console.log("boujour mon nom est " + this.srtNom);
        },
        arriver: function () {
          if (this.x < 0) {
            this.x = this.x + 5;
          }
        },
      },
        descriptionIA : "Bonjour, Mon nom est Quest, j'ai été conçu pour entreprendre la construction du premier resto bar \"Dooly's\" sur la lune. Cela va attirer beaucoup de personnes et peut-être que certains vont demenager sur la lune et ainsi nous laisser plus de place sur la terre.",
        autorisePublication : true
    },
    {
        prenom : "Olivier",
        nom : "Duclos",
        pseudo : "oduclos",   // identifiant Github?
        metsFavoris : [ "Pizza", "Poulet", "Hamburger"],
        hobbies:[],
        stylesMusique : [
            "Rock",
            "Punk"
        ],
        urlsMusique : [             // 2 par style
            "https://www.youtube.com/watch?v=344BmuRw4ZU",
            "https://www.youtube.com/watch?v=XZuM4zFg-60",
            "https://www.youtube.com/watch?v=WdoXZf-FZyA",
            "https://www.youtube.com/watch?v=7gVNNPv8w4Q", 
        ],
        robot : {
      x: 0,
      strNom:"R4be",
      afficher: function () {
        //CORPS
        fill(212, 115, 212);
        triangle(270, 200, 330, 200, 300, 150);
        stroke(0);
        strokeWeight(3);
    
        //TÊTE
        fill(212, 115, 212);
        circle(300, 150, 35);
        stroke(0);
        strokeWeight(3);
      }}, // Enlever les guillemets
        descriptionIA : "Mon nom est R4be, je suis un cône qui est utilisé près des chantiers de construction. Ma boîte sonore rappelle aux automobilistes de ralentir pour améliorer la sécurité des travailleurs.", // Entre 30 et 120 mots
        autorisePublication : false  // OU false
    },
    {
      prenom : "Dali",
      nom : "Gaudette (manque tout)",
      pseudo : "dali",   // identifiant Github?
      metsFavoris : [],
      hobbies:[],
      stylesMusique : [],
      urlsMusique : [],
      robot : {strNom: "",}, 
      descriptionIA : " ", // Entre 30 et 120 mots
      autorisePublication : true  // OU false
    },
    {
      prenom : "Catherine",
      nom : "Gouge (manque tout)",
      pseudo : "gougeCat",   // identifiant Github?
      metsFavoris : [],
      hobbies:[],
      stylesMusique : [],
      urlsMusique : [],
      robot : {strNom: "",}, 
      descriptionIA : " ", // Entre 30 et 120 mots
      autorisePublication : true  // OU false
    },
    {
        prenom : "Antoine",
        nom : "Labarre",
        pseudo : "ARTA",   // identifiant Github?
        metsFavoris : [
            "pâtes",
            "poutine",
            "chocolat"
        ],
        hobbies:[],
        stylesMusique : [
            "pop",
            "rock",
            "pop rock"
        ],
        urlsMusique : [             // 2 par style
            "https://www.youtube.com/watch?v=JGwWNGJdvx8",
            "https://www.youtube.com/watch?v=IcrbM1l_BoI",
            "https://www.youtube.com/watch?v=v2AC41dglnM",
            "https://www.youtube.com/watch?v=WyF8RHM1OCg",
            "https://www.youtube.com/watch?v=7wtfhZwyrcc",
            "https://www.youtube.com/watch?v=TO-_3tck2tg",
        ],
        robot : {x: -350,
      strNom: "A7-L9",
      afficher: function (){
        //tête
          fill(200, 200, 200)
          arc(this.x + 300, 100, 80, 80, PI , 0, CHORD);
          
      //corps
          fill(0, 0, 255)
          rect(this.x + 260, 100, 80, 85, 0);
          
      //jambes
           fill(255, 0, 0)
           rect(this.x + 240, 100, 20, 115, 20)
           rect(this.x + 340, 100, 20, 115, 20)
      //pieds
           fill(200, 0, 0)
           square(this.x + 230, 200, 40, 70, 55, 5, 5);
           square(this.x + 330, 200, 40, 70, 55, 5, 5);
      
      //oeil
           fill(0, 200, 0)
           circle(this.x + 300, 80, 20); 
        
    },
      arriver: function (){
        if(this.x < 0) {
          this.x = this.x + 5
        }
      },
      direBonjour: function (){
          console.log("Bonjour mon nom est " + this.strNom);
        }
        }, 
        descriptionIA : 
        "A7-L9, le robot, est conçu pour réparer tout ce qui est mécanique et électronique. Il peut aussi servir en tant que assistant dans tous les domaines. En gros, c'est un robot à tout faire.",
        autorisePublication : true
    },
    {
      prenom : "Raphaël",
      nom : "Labbé-Latreille",
      pseudo : "skybirds4545",   // identifiant Github?
      metsFavoris : [
          "Lasagne",
          "Casolette",
          "Général Thao"
      ],
      hobbies:[],
      stylesMusique : [
          "Glitch Hop",
          "orchestral",
          "dubstep"
      ],
      urlsMusique : [             // 2 par style
          "https://www.youtube.com/watch?v=59M5z0c8YtE",
          "https://www.youtube.com/watch?v=usXhiWE2Uc0",
          "https://www.youtube.com/watch?v=ADn4S1ajMAI",
          "https://www.youtube.com/watch?v=FEiTgU-hM5k",
          "https://www.youtube.com/watch?v=twJd1CXWb8M",
          "https://www.youtube.com/watch?v=O8gTHqCWuyw",
      ],
      robot : {x: -450,
    strNom:"A-315",
    afficher: function (){
    //robot numéro un
    stroke (0)    //contour qui le différencit des autres
    //boule  
    fill (200) ;
    circle (this.x+310,240,115) ;
    //tête
    rect (this.x+280,140,55,40) ;
    fill (224,255,255)
    rect (this.x+290,150,50,20) ;
    //antennes
    line (this.x+310,140,this.x+290,90); 
    line (this.x+310,140,this.x+270,80);
  },
    arriver: function() {
      if (this.x<0) {this.x=this.x+3}},
    direBonjour: function() {
      console.log("Bonjour, notre unité s'appelle " + this.strNom);
    }
  },
      descriptionIA : "Ceci est la légion A-315. En tant que pensée collective, ils peuvent facilement se séparer pour couvrir une plus grande zone et mieux trouvé leur cible. If (blnTargetFound == true) { 'ATTACK' }.", // Entre 30 et 120 mots
      autorisePublication : true  // OU false
  },
  {
    prenom : "Maxime",
    nom : "Lebrun",
    pseudo : "maxamax",   // identifiant Github?
    metsFavoris : [
        "Poutine",
        "Lasagne",
        "Pizza"
    ],
    hobbies:[],
    stylesMusique : [
        "Rap",
        "Rock",
        "Pop"
    ],
    urlsMusique : [             // 2 par style
        "https://www.youtube.com/watch?v=Zl64MRAqQxk",
        "https://www.youtube.com/watch?v=Obim8BYGnOE",
        "https://www.youtube.com/watch?v=CD-E-LDc384",
        "https://www.youtube.com/watch?v=Ckom3gf57Yw",
        "https://www.youtube.com/watch?v=dvgZkm1xWPE",
        "https://www.youtube.com/watch?v=d020hcWA_Wg",
    ],
    robot : {
        
  //attributs
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
      this.x = this.x + 2;
    }
  },
  direBonjour: function () {
    console.log("Bonjour, mon nom est: " + this.strNom);
  }
  }, 

  // Enlever les guillemets
    descriptionIA : "P1NGU aka le pingouin des banquises nordiques, le robot, est conçu de sorte à ce qu'il détecte le réchauffement du climat dans son coin du monde. De ce fait, il pourra ensuite transmettre ses données récoltées à ses amis les pingouins qui eux, les transmettront aux scientifiques. Tout cela dans le but d'entreprendre les démarches nécessaires pour que les scientifiques puissent sauver P1NGU ainsi que ses amis, qui depuis des décennies souffrent.", // Entre 30 et 120 mots
    autorisePublication : true
},
{
    prenom : "Ugo",
    nom : "Nanini",
    pseudo : "gropogo",   // identifiant Github?
    metsFavoris : [
        "Pizza",
        "Spaghetti",
        "Linguini"
    ],
    hobbies:[],
    stylesMusique : [
        "Rock Italien",
        "Rap italien",
        "Italo disco"
    ],
    urlsMusique : [             // 2 par style
        "https://www.youtube.com/watch?v=QN1odfjtMoo&ab_channel=ManeskinVEVO",
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
        console.log("Bonjour, mon nom est: " + this.strNom);
      }
    }, 

    descriptionIA : "Rocketbot est conçu pour faire des voyages extrêmement rapide dans l'espace afin de recueilli un maximum d'information sur ce vaste univers. Il est capable d'aller plus loin que l'on a jamais été dans notre système solaire à une vitesse fulgurante. ",  
    autorisePublication : true
},
{
  prenom : "Cloé",

  nom : "Ouellette",

  pseudo : "CAANgrl17",   // identifiant Github? Non

  metsFavoris : [
      "pizza",
      "creme glacee"
  ],
  hobbies:[],

  stylesMusique : [
      "country"
  ],

  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=TDpOcp98b5k",
      "https://www.youtube.com/watch?v=VZnA-6BVN7Y"
  ],

  robot : {
      
  x:-300,
  strNom: "DVD2",
  pas: 5,
  
  //methodes
  afficher: function(){
      
  //ROBOT
  //couleur de remplissage: bleu
  fill(77, 166, 255);
  stroke(1)
  
  strokeWeight(1)
  
  //antenne
  triangle(this.x + 300, 10, this.x + 290, 20, this.x + 310, 20);
  line(this.x + 300, 20, this.x + 300, 35);

  //tete et oeil(triangle)
  square(this.x + 270, 35, 60);
  triangle(this.x + 300,45,this.x + 280,70,this.x + 320,70)

  //premier rectangle + bras
  rect(this.x + 250, 110, this.x + 100, 40);
  line(this.x + 210,130,this.x + 250,130)
  line(this.x + 390,130,this.x + 350,130)

  //deuxieme rectangle (corps)
  rect(this.x + 250, 160, this.x + 100, 40);

  //arc (roue)
  fill(0,0,0)
  arc(this.x + 300, 200, 80, 80, 0, 3.14);
  
  //lignes (corps)
  strokeWeight(3)
  line(this.x + 300, 96, this.x + 300, 109);
  line(this.x + 300, 151, this.x + 300, 159);
  
  //oeil (point)
  strokeWeight(6)
  point(this.x + 300,60)
  
  //bouche
  strokeWeight(1)
  noFill()
  stroke(255)
  arc(this.x + 300,80,30,20,0,3.14)

  }},      // Enlever les guillemets

  descriptionIA : "À robot DVD2, sa spécialité, ce sont les films. Tu es dans le bois? Dans le désert? En montagne? Et tu as une envie soudaine d'écouter un film? La bonne nouvelle est que si tu es accompagné de DVD2, tu pourras en écouter un sans problème. DVD2 est une bibliothèque sur roue avec une tonne de films à ta disposition. Et il ne possède pas en lui que des simples titres, il a un projecteur intégré au niveau de son œil qui lui permet de projeter n'importe quel film à n'importe quel endroit et à toute heure. N’est-ce pas formidable?  ",
  autorisePublication : false  // true OU false
},
{
  prenom : "Gabriel",
  nom : "Parent",
  pseudo : "gab64",   // identifiant Github?
  metsFavoris : [
      "sushis",
      "pâtes",
      "pizza"
  ],
  hobbies:[],
  stylesMusique : [
      "rock",
      "pop rock"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=ScNNfyq3d_w",
      "https://www.youtube.com/watch?v=ZgB2qItM76g",
      "https://www.youtube.com/watch?v=ysSxxIqKNN0",
      "https://www.youtube.com/watch?v=D9G1VOjN_84"
  ],
  robot : {
x:-400,
strNom: "bb-7",
afficher: function (){
    // au clic le robot doit dire "bonjour..."
 //couleur de remplissage:bleu
//tête
fill(0)
arc(this.x +300, 100, 80, 90, PI, 0, CHORD);
fill(this.x +255,0,0);
circle(this.x +300,75,15);
fill(220);      
rect(this.x +313,26,05,30);

//corps
fill(0);
circle(this.x +300,153,105);

//intérieur corps
fill(220);
circle(this.x +301,150,70);
fill(80);
square(this.x +280,130,40,10);  
 
},
 arriver:function(){
   if(this.x < 0){
     this.x = this.x + 5   
   }
    },
  direbonjour:function(){
     console.log("Bonjour mon nom est " + this.strNom)
  }
  
}, // Enlever les guillemets
  descriptionIA : "L’I.A est une nouvelle technologie qui a révolutionné le monde que l’on connaît à son arrivée, mais Apple a lancé le processeur m1 max qui est assez puissant pour une panoplie de tâches. Je crois que certains métiers ou toutes autres tâches vont être remplacées par l’intelligence artificielle et peut-être nous battre sur le niveau d’intelligence pour éventuellement changer ce monde constamment en changement. On ne sait pas ce qu’il peut arriver dans le futur pour le meilleur et pour le pire ou avoir un stéréotype de l’I.A qui à cause d'une surexploitation va prendre le contrôle du monde.", // Entre 30 et 120 mots
  autorisePublication : true  
},
{
  prenom : "François",
  nom : "Perreault",
  pseudo : "phoenix-4",   // identifiant Github?
  metsFavoris : [
      "Foudue Chinoise",
      "Soupe Thai",
      "Pudding Chommeur"
  ],
  hobbies:[],
  stylesMusique : [
      "Orchestral Metal",
      "Folk Metal",
      "80s Retro ambiant"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=UlJ2Beb5Dds",
      "https://www.youtube.com/watch?v=n499M4pgc5o",
      "https://www.youtube.com/watch?v=iijKLHCQw5o",
      "https://www.youtube.com/watch?v=sv29DzgiXZA",
      "https://www.youtube.com/watch?v=UedTcufyrHc",
      "https://www.youtube.com/watch?v=h7tpVaGSk-4",
  ],
  robot : {
    x:-350,
    strNom: "Redditnot",
    pas:10,
    
    afficher: function()
    {
      let col = color(225);
fill(col)
//Corps & Bras
line(this.x+25,100,this.x+80,100);
line(this.x+100,100,this.x+80,100);
rect(this.x+60,80,30,60);
circle(this.x+25,100,10);
circle(this.x+100,100,10);

//Jonction tete
line(this.x+60,80,this.x+46,50);
line(this.x+90,80,this.x+102,50);

//Jambe
line(this.x+90,140,this.x+100,170);
line(this.x+60,140,this.x+50,170);
  //Pied
circle(this.x+100,180,30);
circle(this.x+50,180,30);
//Tete du robot
line(this.x+50,15,this.x+50,50)
translate(width / 2, height / 2);
rotate(PI / 4.0);
rect(this.x+-340,-150,40,40);
fill(255,10,20)
circle(this.x+-330,-120,15);
circle(this.x+-310,-140,8);
fill(col)
    },
    arriver: function()
    {
      if(this.x<=300)
      {
        this.x=this.x+this.pas;
      }
            },
    direBonjour: function()
    {
      console.log("Bonjour humain, mon nom est " + this.strNom)
    }
    }, // Enlever les guillemets
  descriptionIA : "Redditnot est un vrai champion de l'analyse de données. Son travail est de déterminer les changements d'habitude des utilisateurs du média social Reddit pour prédire les courants sociaux. De la lutte antiterroriste à la prédiction de l'apparition de nouveaux mouvements sociaux, notre machine parvient à faire le pont entre la collecte de donnée et la conception de stratégie pour des organismes divers. Malheureusement, notre cher ami a la fâcheuse habitude de se laisser distraire par du contenu non-prioritaire (Vidéo de chat, memes et autres futilités). Chez SpyCorp.inc, nous sommes certains que nous arriverons a redresser ses petits défauts et le rendre 100% opérationnel d'ici un an." , // Entre 30 et 120 mots
  autorisePublication : true 
},
{
  prenom : "Axel",
  nom : "Roberge",
  pseudo : "gossipProg",   // identifiant Github?
  metsFavoris : [
      "Sushi",
      "Bavette de boeuf",
      "Hamburger"
  ],
  hobbies:[],
  stylesMusique : [
      "Hip-Hop",
      "R&B",
      "Pop"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=88jaOGIXnnc&ab_channel=SleepyHallow",
      "https://www.youtube.com/watch?v=SPlOfpaY_qc&ab_channel=SleepyHallowVEVO",
      "https://www.youtube.com/watch?v=3nweeAWiHxQ&ab_channel=GoldCoastVibes",
      "https://www.youtube.com/watch?v=y7ogiYZDsLI&ab_channel=ImanProductions",
      "https://www.youtube.com/watch?v=gNi_6U5Pm_o&ab_channel=OliviaRodrigoVEVO",
      "https://www.youtube.com/watch?v=5GJWxDKyk3A&ab_channel=BillieEilishVEVO",
  ],
  robot:{
x:-400,
strNom:"bubble",
afficher: function(){
let orange = color(250,70,20)
let blanc= color(255,255,255)
let noir= color(0,0,0)
let bleu = color (0,0,255)

strokeWeight(4)

/* Avec l'appel circle je fait la tête de mon robot et avec fill je change la couleur de mon cercle */

fill (orange) 
circle(this.x+200,100,75)

/* je fait un deuxième cercle pour mon oeil et un troisième pour la pupille(et le reflet) tout en affectant les couleurs */

fill (blanc)
circle(this.x+200,100,35);

fill (noir)
circle(this.x+200,100,20);

fill(blanc)
 circle(this.x+205,98,10)

/*Je fait mon corp a partir d'un rectangle avec rect et l'affecte de sa couleurs*/

fill (bleu)
rect(this.x+150,140,100,100)

/* je fait mes bras et mes jambes a partir de rect */
//mes bras//
fill (noir)
rect(this.x+100,150,50,30)
rect(this.x+250,150,50,30)
//mes jambes//
rect(this.x+150,240,30,30)
rect(this.x+220,240,30,30)

/* je fait 4 cercles pour les mains et les pieds*/
//les mains//
fill(orange)
circle(this.x+165,270,30)
circle(this.x+235,270,30)
//les pieds//
circle(this.x+100,165,30)
circle(this.x+300,165,30)

/* avec la commande line et circle je crée c'est antennes*/

line(this.x+230,75,this.x+255,40)
line(this.x+172,75,this.x+145,40)
circle(this.x+145,40,10)
circle(this.x+255,40,10)

/* je fini par ses décorations au niveau du corps*/

fill(blanc)
circle(this.x+210,170,25)
circle(this.x+230,195,15)
rect(this.x+205,210,10,10)
},
arriver: function(){
  if (this.x<0 ){
    this.x = this.x +5;
  }
}},  
  descriptionIA : "Bubble, mon robot est conçu pour assister les plus jeunes durant les heures de gardiennage. il sais cuisiner des repas, jouer avec les enfants et faire toute sorte d'activités bricolage.De plus, il peut faire des bulles d'ou son nom Bubble.", // Entre 30 et 120 mots
  autorisePublication : true  // OU false
},

  /* GROUPE 2 */
  {
    prenom : "Élisabeth",
    nom : "Bilodeau (manque robot)",
    pseudo : "LizzyWanders",   // identifiant Github?
    metsFavoris : [
        "Raviolis",
        "Bol Poulet Rouge",
        "Quessadillas"
    ],
    hobbies:[],
    stylesMusique : [
        "Metal/punk/rock",
        "Rap",
        "Indie/Folk",
        "Reggae",
    ],
    urlsMusique : [             // 2 par style
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
    robot : "{______________}", // Enlever les guillemets
    descriptionIA : "Qwibi est un robot équipé de propulseurs qui lui servent à avancer dans l'eau. Sa mission est de récupérer les déchets dans l'océan.", // Entre 30 et 120 mots
    autorisePublication : true 
},{
  prenom : "Ualikhan",
  nom : "Butabayev (manque robot)",
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
  robot : "Tom", // Enlever les guillemets
  descriptionIA : "Allo, je m'appelle Tom, je suis le robot le plus intelligent et le plus rapide qui existe sur cette planète, je suis un robot très utile au quotidien, je suis là pour garder la maison propre, vous emmener aux bons endroits et, en principe, vous aider dans votre routine.", // Entre 30 et 120 mots
  autorisePublication : true  
},
{
  prenom : "Lorie-Anne",
  nom : "Côté",
  pseudo : "artificialOxygen",   // identifiant Github?
  metsFavoris : [
      "poutine",
      "risotto",
      "chocolat"
  ],
  hobbies:[],
  stylesMusique : [
      "rock",
      "__________________",
      "__________________"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=7AQSLozK7aA&list=LL&index=7",
      "https://www.youtube.com/watch?v=Nv-cni9Sjpk&list=LL&index=13"
  ],
  robot : {
x: 600,
strNom:"Bonjour, mon nom est Bobot.",
afficher: function (){
  
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
line(this.x + 42, 120, this.x +  72, 110);
  
stroke(0);
strokeWeight(1);
fill(0);
circle(this.x + 60, 117, 5);
},
arriver: function (){
  
  //Décrémenter la position x du robot par 5
  
  this.x = this.x - 5;
  
 //Si la position x du rebot est inférieur à la moitié du canevas
 //Affecter la valeur width/2 à la position x du robot

  if (this.x < width/2){
    this.x = width/2
  }
  
},
direBonjour: function(){
  console.log(this.strNom);
}}, // Enlever les guillemets

  descriptionIA : "Bobot, prononcé bo-botte est un robot analyste. À l'aide de sa caméra, il peut prendre en photo diverses espèces invasives (non originaires du Canada et dangereuse pour notre écosystème) d'origine animale ou végétale afin qu'elles puissent servir au recensement des espèces invasives au Québec et pour aider à mieux contrôler leur population. Avec ses antennes, il peut capter le réseau presque n'importe où pour transmettre ses données au gouvernement.", // Entre 30 et 120 mots
  autorisePublication : true  // OU false
},
{
  prenom : "Samuel",
  nom : "Camara (manque robot)",
  pseudo : "puddingAnonyme",   // identifiant Github?
  metsFavoris : [
      "Pieuvre grillee",
      "Poutine",
      "Pizza"
  ],
  hobbies:[],
  stylesMusique : [
      "Rock Alternatif",
      "Électro rock",
      "Électronique"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=pXRviuL6vMY",
      "https://www.youtube.com/watch?v=eJnQBXmZ7Ek",
      "https://www.youtube.com/watch?v=w8KQmps-Sog",
      "https://www.youtube.com/watch?v=O2IuJPh6h_A",
      "https://www.youtube.com/watch?v=H0a111MkLds",
      "https://www.youtube.com/watch?v=3wjb3HtD32c",
  ],
  robot : "Maximilien", // Enlever les guillemets
  descriptionIA : "Maximilien est un robot doté d'une intelligence sans limite. On peut le considérer comme un dictionnaire robotique capable de communiquer avec la personne voulant de son aide. Il suffit de lui demander ce que veut dire un certain mot et il ira chercher dans sa base de donnée la définition.", // Entre 30 et 120 mots
  autorisePublication : true  // OU false
},
{
  prenom : "Sopheak",
  nom : "Chhem",
  pseudo : "sopk_32",   // identifiant Github?
  metsFavoris : [
      "Sushi",
      "Lok Lak",
      "Poulet Rouge"
  ],
  hobbies:[],
  stylesMusique : [
      "KR&B Soul",
      "R&B Soul",
      "Rap (ENG & FR)"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=RkYWuDJqqC8",
      "https://www.youtube.com/watch?v=rczMbtw8sCw",
      "https://www.youtube.com/watch?v=6OkneaH-eTA",
      "https://www.youtube.com/watch?v=QLCpqdqeoII",
      "https://www.youtube.com/watch?v=MqiljVyq_1o",
      "https://www.youtube.com/watch?v=4nyld2SqleU",
  ],
  robot : "1known", // Enlever les guillemets
  descriptionIA : "Bonjour, je m'appelle 1known et je suis le meilleur robot jamais conçu dans le monde. Je suis un robot qui est très utile pour la société. Je suis toujours aux services des humains. Mon but est devenir le meilleur ami de l'homme et servir mon maître Sopheak Chhem.", // Entre 30 et 120 mots
  autorisePublication : true
},
{
  prenom : "Anaïs",
  nom : "Degat",
  pseudo : "A_D",   // identifiant Github?
  metsFavoris : [
      "pizza",
      "tartiflette",
      "hamburger"
  ],
  hobbies:[],
  stylesMusique : [
      "rap francais",
      "hip hop",
      "r&b"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=2F8Kr91wQ0U",
      "https://www.youtube.com/watch?v=pEBFJI-g9AA",
      "https://www.youtube.com/watch?v=vimZj8HW0Kg",
      "https://www.youtube.com/watch?v=Mb1ZvUDvLDY",
      "https://www.youtube.com/watch?v=8WEtxJ4-sh4",
      "https://www.youtube.com/watch?v=fdyUqqRfUMk",
  ],
robot : {
x : -350,
strNom: "lou",
afficher: function(){
  
//Roue du robot
ellipse(this.x + 260, 255, 30, 55);
ellipse(this.x + 340, 255, 30, 55);  


 //bras du robot
fill (this.x + 122,70,140)
circle(this.x + 235,155,40); 
circle(this.x + 360,156,40); 

rect(this.x + 220,155,20,80,)


  //couleur 
fill (this.x + 128,128,128) ;

//Corps du robot
rect(this.x + 265,207,70,70,20);
rect(this.x + 235,150,130,70,20);

//"cou" du robot
rect(this.x + 260,128,12,23)
rect(this.x + 329,128,12,23)
rect(this.x + 275,85,12,23)
rect(this.x + 315,85,12,23)

//tête du robot  
circle(this.x + 300,50,90)


//milieu du corps du robot
rect(this.x + 235,100,130,35,20);

//boutons
square(this.x + 250,112,12);
square(this.x + 280,112,12);
square(this.x + 310,112,12);
square(this.x + 340,112,12);

//bras
fill (this.x + 122,70,140)
rect(this.x + 220,155,20,80,)
rect(this.x + 350,155,20,80,)

//tete
circle(this.x + 280,50,20)
circle(this.x + 320,50,20)

}}, // Enlever les guillemets
  descriptionIA : "Mon robot aide les personnes handicapés à traverser la rue ou faire les activités quotidiennes, et par exemple les personnes en siège roulant, il peut aider à pousser le siège.", // Entre 30 et 120 mots
  autorisePublication : false
},
{
  prenom : "Sarah",
  nom : "Dufour",
  pseudo : "sikrieria",
  metsFavoris : [
      " Tourtiere du Saguenay ",
      " Patee chinois de mon chum",
      " Du bonheur en canne "
  ],
  hobbies:[],
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
  robot : "Obi-Wan CannotBe", // Enlever les guillemets
  descriptionIA : "Obi-Wan CannotBe aidera dans la destruction des siths encombrants dans chaque domicile. Plus clairement : Il mettra l'ordre dans le désordre que se trouvent à être les poubelles et fera le tri correctement de ce qui est recyclable ou pas. Mais pas seulement! Il fera du composte avec les aliments jetés et fera repousser la vie au travers de sa paix intérieure. Bref un vrai Jedi de l'environnement! ", // Entre 30 et 120 mots
  autorisePublication : true 
},
{
  prenom : "Isabel",
  nom : "Hurtado",
  pseudo : "iahr",   // identifiant Github?
  metsFavoris : [
      "Sushi",
      "Fruit de mer",
      "Ravioli"
  ],
  hobbies:[],
  stylesMusique : [
      "Rap",
      "Pop",
      "R&B"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=aCF7nOGqD6w",
      "https://www.youtube.com/watch?v=oybwO_9Q5iY",
      "https://www.youtube.com/watch?v=d6F4B5KxRo8",
      "https://www.youtube.com/watch?v=B3f_2RlS9uM",
      "https://www.youtube.com/watch?v=1LBm1lTt-rQ",
      "https://www.youtube.com/watch?v=vNBgJ49b9Ag",
  ],
  robot : {x: -450,
strNom : "Salsa",
afficher: function (){
  // couleur remplissage pour le corps
fill(this.x + 255,105, 170);
triangle(this.x + 140, 210, this.x + 210, 108, this.x +280, 210);
// la tête
fill(this.x +224, 255, 255);
rect(this.x + 175, 50, 70);
//bas du corps
fill(this.x + 255, 240, 245);
rect(this.x +170, 210, 80, 25);
//Première roue
fill(this.x +250, 250, 250);
circle(this.x +180,250,30);
//deuxième roue
fill(this.x +250, 250, 250);
circle(this.x +240, 250, 30);
//ligne première roue
line(this.x +165, 250, this.x +195, 250);
line(this.x +180, 235, this.x +180, 265);

//ligne deuxième roue
line(this.x +225,250, this.x +255,250);
line(this.x +240, 235, this.x +240, 265);
// oeil gauche
fill(this.x +0, 0 , 0);
circle(this.x +190, 70, 20);
//oeil droit
fill(this.x +0, 0 , 0);
circle(this.x +230, 70, 20);
//bouche
fill(this.x +0, 0 , 0)
line(this.x +190, 100, this.x + 220, 100);
}}, // Enlever les guillemets
  descriptionIA : " Salsa est une assistante qui vous accompagnera durant la préparation de vos recettes en toute sécurité. Avec plus de 1000 recettes, elle vous fera découvrir de nombreux mets à travers les continents, autant carnivores que végétariens. Elle est équipée de plusieurs fonctions afin de combler vos besoins selon votre état de santé ou objectifs dans votre quotidien ou même vous faire devenir un as de la cuisine. Alors, amusez-vous en toute sécurité.", // Entre 30 et 120 mots
  autorisePublication : false
},
{
  prenom : "Laurie",
  nom : "Martineau",
  pseudo : "lm",   // identifiant Github?
  metsFavoris : [
      "mac n' cheese",
      "tartare",
      "sushi"
  ],
  hobbies:[],
  stylesMusique : [
      "pop",
      "rap",
      "hip-hop"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=V1Z586zoeeE",
      "https://www.youtube.com/watch?v=kxgj5af8zg4",
      "https://www.youtube.com/watch?v=kKpctBHTOGU",
      "https://www.youtube.com/watch?v=5CVrij8tcP8",
      "https://www.youtube.com/watch?v=VF-FGf_ZZiI",
      "https://www.youtube.com/watch?v=QMP-o8WXSPM",
  ],
  robot : {x : -450,
strNom: "Écko",
afficher: function(){
  
 //Tête du robot
circle(this.x + 300,50,60);

//Cou du robot
rect(this.x + 290,80,20,20);

//Haut corps du robot
square(this.x + 270,100, 60,20);
square(this.x + 290,90,20,20);
square(this.x + 290,120,20,20);

//Bras gauche du robot
rect(this.x + 250,105,20,60);

//Bras droit du robot
rect(this.x + 330,105,20,60);

//Jambe droite
rect(this.x + 305,190,20,60);

//Jambe gauche
rect(this.x + 275,190,20,60);

//Bas du corps
rect(this.x + 285,160,30,40);}}, // Enlever les guillemets
  descriptionIA : "Écko est un robot écoresponsable, qui ramasse les déchets dans les lieux publics. Il se promène que ce soit dans les parcs, dans les musées ou dans les écoles afin d'y faire régner la propreté. Il s'occupe que les ordures se retrouvent dans la poubelle grâce à son aide. Il a aussi un système de tri intégré à son programme qui lui permet de placer les matériaux recyclables et autres dans le bac approprié.", // Entre 30 et 120 mots
  autorisePublication : false
},
{
  prenom : "Alex Jordan",
  nom : "Mpele (manque robot)",
  pseudo : "al_x_jordan14",  
  metsFavoris : [
      "poulet",
      "bu" 
  ],
  hobbies:[],
  stylesMusique : [
      "Gangsta rap",
      "Drill",
      "Rage"
  ],
  urlsMusique : [              
      "https://www.youtube.com/watch?v=W5_RPT0WPYw",
      "https://www.youtube.com/watch?v=d89yIVwuWj4",
      "https://www.youtube.com/watch?v=PmUnzgNETNo",
      "https://www.youtube.com/watch?v=z9gnR0W_VA8",
      "https://www.youtube.com/watch?v=m",
      "https://www.youtube.com/watch?v=Cszp89gslTg",
  ],
  robot : "Bonjour je suis Lex 2.0",  
  descriptionIA : "Je suis une version robotisée d'Alex Jordan, votre camarade. J'ai été conçu pour trouver des solutions qui aideraient à ralentir le rythme de reproduction humaine. Bien sûr ces solutions n'incluent pas l'éradication de la race comme l'a suggéré mon créateur.",  
  autorisePublication : true  
},
{
  prenom : "Annabelle",
  nom : "Ouellet",
  pseudo : "aouellet2241268",   // identifiant Github?
  metsFavoris : [
      "Bananes",
      "Chocolat",
      "Steak"
  ],
  hobbies:[],
  stylesMusique : [
      "K-Pop",
      "Pop",
      "Rock"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=aPd9exmH17o",
      "https://www.youtube.com/watch?v=bagFQCTHXy8",
      "https://www.youtube.com/watch?v=-MZ8guTxcFU",
      "https://www.youtube.com/watch?v=1SsZ1KJ8TXM",
      "https://www.youtube.com/watch?v=VdOkQ6THDVw",
      "https://www.youtube.com/watch?v=AhnZEmnuzgM",
  ],
  robot : {
 x: -350,
 strNom: "Lolly",
afficher: function (){
 /* tête du robot */
// rectangle
fill (228, 130, 228);
rect (this.x + 200, 80, 100, 60);

/* cou du robot*/
// rectangle
fill (248, 170, 250);
rect (this.x + 230, 140, 40, 40);
/* roue du robot*/
// élipse
fill (230, 20, 170);
ellipse (this.x + 250, 240, 69, 69);


/* corps du robot*/
fill (255, 120, 218);
square (this.x + 215, 180, 70);
/* yeux du robot*/
// circle
fill (0, 0, 0);
circle (this.x + 220, 115, 15);
fill (0, 0, 0);
circle (this.x + 280, 115, 15);
/* bouche du robot*/
line (this.x + 240, 120, this.x + 260, 120);
/* antennes du robot*/
line (this.x + 200, 70, this.x + 220, 80);
line (this.x + 280, 80, this.x + 300, 70);
}}, 
  descriptionIA : "Lolly serait un bon robot accompagnateur pour démarrer la vie des jeunes enfants. Par exemple, dans les garderies, Lolly pourrait proposer des activités amusantes et en même temps qui pourront permettre à l'enfant d'apprendre des matières préscolaires avant de commencer l'école lorsque le jeune aura proche de 5 ans. Ce robot peut aider les gens de tout genre, tout trouble. Par exemple, Lolly saura soulager quelqu'un s'il s'est fait mal ou si quelque chose ne va pas. Cela pourra aussi diminuer la pénurie de main d'œuvre dans les garderies après deux ans de pandémie.", // Entre 30 et 120 mots
  autorisePublication : true  // OU false
},
{
  prenom: "Kate",
  nom: "Undercoffler",
  pseudo: "kateundercoffler",   // identifiant Github?
  metsFavoris: [
    "les patates",
    "general tso tofu",
    "crème glacée molle au choco"
  ],
  hobbies:[],
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
      console.log(contenu + this.strNom);
    },
  }
  , // Enlever les guillemets
  descriptionIA: "R0 - Z est un robot chaton qui peut identifier et trouver les chatons ayant besoin d'aide dans votre quartier. Avec l'aide d'IA, elle va identifier si les chatons sont orphelins et s'ils sont en danger, et puis elle va envoyer l'emplacement dans un message, de combien de chatons sont présents et leur état pour qu'ils soient sauvés De plus, R0 - Z va choisir le bon refuge avec des bonnes ressources." // Entre 30 et 120 mots
  , autorisePublication: true   // OU false
},
{
  prenom : "Félix",
  nom : "Vermette",
  pseudo : "captainfil",   // identifiant Github?
  metsFavoris : [
      "Poutine",
      "i dunno",
      "Burger d'orignal"
  ],
  hobbies:[],
  stylesMusique : [
      "Electronic" 
  ],
  urlsMusique : [             // 2 par style
      "https://open.spotify.com/track/5isHndEunT9J7bv4Mz9jgs?si=cf1b0a55a3644d2e",
      "https://open.spotify.com/track/1bweOqaO6SIGRRMupc7zMm?si=ab54867ba30348c3" 
  ],
  robot : {
x:-160,
strnom: 0,
afficher: function() {

  //wheel
fill(0);
arc(this.x+32,250,65,45,0,PI); 

arc(this.x+97,250,65,45,0,PI);

//neck
strokeWeight(0)
fill(200,200,250);
    rect(this.x+50,90,15,20)

strokeWeight(0);
fill(200,230,250)
rect(this.x+65,90,15,20)

strokeWeight(3);
line(this.x+50,90,this.x+50,110);
line(this.x+65,90,this.x+65,110);
line(this.x+80,90,this.x+80,110);
line(this.x+57,90,this.x+57,110);
line(this.x+73,90,this.x+73,110)

//frame
fill(175);
strokeWeight(3);
rect(this.x,110,130,140);

strokeWeight(2);
fill(100,150,250);
rect(this.x+100,120,20,120);

fill(175);
circle(this.x+110,130,10);
circle(this.x+110,145,10);

//head
strokeWeight(3);
fill(175);
rect(this.x,40,130,50);

line(this.x+50,55,this.x+50,75);
line(this.x+65,65,this.x+35,65);

line(this.x+100,55,this.x+100,75);
line(this.x+85,65,this.x+115,65);

strokeWeight(3)
fill(200,20,20);
triangle(this.x,10,this.x+140,40,this.x,40)

//extra
fill(255,216,17)
rect(this.x-30,130,30,20)
rect(this.x-23,120,15,10)
fill(121)
rect(this.x-30,150,30,60) 
},
arriver: function(){
  if(this.x<210){
    this.x = this.x +3}
},
direBonjour: function(){
   //time
let h=hour()
let m=minute()

if(m<=9){
  m = "0"+m
}
let time= "il est " + h + ":" + m

let list= ["Bonjour ! Mon nom est J1mmy","BEEP BOOP","WAAAA","H E L L O","j'ai besoin de changer mes batteries","let me=J1mmy !", time , ]

this.strNom = random(list) 

console.log(this.strNom)
  
}
  }, 
  descriptionIA : "J1mmy est un robot d'aide aux personnes agés qui est spécialisé en assistance sociale. Il est capable de converser pendant des heures dans multiples langages différents. Seul défaut, le modèle présentement sur le marché fonctionne uniquement avec des batteries.",  
  autorisePublication : true  // OU false
},
/* GROUPE 3 */
{
  prenom : "Maxime",
  nom : "Aubut",
  pseudo : "pedr0",   // identifiant Github?
  metsFavoris : [
      "Spaghetti_& meatballs",
      "Raclettes",
      "Pâté chinois"
  ],
  hobbies:[],
  stylesMusique : [
      "Hip Hop & Rap",
      "House",
      "Trap"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ],
  robot : {
x:0,
strNom: "St0rm-Tr00per_rtrd", 
afficher: function() {
//cou
fill(0)
rect(290,83,20,30)

//tete
fill(255,255,204)
strokeWeight(3)
circle(300,50,70)
fill(0)
rect(285,40,30,10)

//corps
fill(255,255,204)
triangle(300,220,260,110,340,110)

//bras
fill(255,255,204)
rect(240,110,20,80)
rect(340,110,20,80)
fill(0)
rect(340,105,20,20)
rect(240,105,20,20)

//bas
fill(0)
circle(300,250,70)
},  
arriver: function () {}, 
direBonjour: function() {
   console.log("Bonjour, mon nom est "+ this.strNom); 
},  
}, // Enlever les guillemets
  descriptionIA : "Parmi les robots, St0rm-Tr00per_rtrd n'est peut-être pas le couteau le plus aiguisé du tiroir mais il garde bien compagnie avec sa personnalité loufoque et ses anecdotes cocasses. Son but principal est de partager sa bonne humeur avec son entourage.", // Entre 30 et 120 mots
  autorisePublication : true  // OU false
},  
{
    prenom : "Adam",
    nom : "Beaulieu",
    pseudo : "cobradam",   // identifiant Github?
    metsFavoris : [
        "Couscous",
        "Harira",
        "Pizza"
    ],
    hobbies:[],
    stylesMusique : [
        "Rap",
        "Pop",
        "Country"
    ],
    urlsMusique : [             // 2 par style
        "https://www.youtube.com/watch?v=j3YH00VSCro&ab_channel=ValdSullyvan",
        "https://www.youtube.com/watch?v=wrKF_5ePPfA&ab_channel=Kalash972",
        "https://www.youtube.com/watch?v=oyEuk8j8imI&ab_channel=JustinBieberVEVO",
        "https://www.youtube.com/watch?v=wXhTHyIgQ_U&ab_channel=PostMaloneVEVO",
        "https://www.youtube.com/watch?v=U3NJC18Oi04&ab_channel=JohnnyCashShow",
        "https://www.youtube.com/watch?v=AeZRYhLDLeU&ab_channel=JohnnyCashVEVO",
    ],
    robot : {},
    descriptionIA : "Tristan MountainDew est un Robot très sympathique, amical et très serviable. C'est un robot qui tient bonne compagnie, est doté d'une intelligence artificielle tres poussée, donc il est capable de discuter avec lui. ", // Entre 30 et 120 mots
    autorisePublication : false
},
{
  prenom : "Mathieu",
  nom : "Beauregard (manque robot)",
  pseudo : "Dog03",   // identifiant Github?
  metsFavoris : [
      "Pizza",
      "Curry",
      "Homard"
  ],
  hobbies:[],
  stylesMusique : [
      "Pop",
      "Rock" 
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=hQrmtwhztnc&ab_channel=brakence",
      "https://www.youtube.com/watch?v=osE9DTIr7hg&ab_channel=Aries",
      "https://www.youtube.com/watch?v=k6FHqmjAZOk&ab_channel=CVLTE-Topic",
      "https://www.youtube.com/watch?v=U8tWoNZI77k&ab_channel=demxntia" 
  ],
  robot : {}, // Enlever les guillemets
  descriptionIA : "Boris, le robot, est conçu pour assister les personnes de troisième âge. Par exemple, Boris va les notifier pour prendre leurs médicaments et va les garder en santé avec des diagnostics personnalisés.  ", // Entre 30 et 120 mots
  autorisePublication : true  // OU false
},
{
  prenom : "Jean-Philippe",
  nom : "Cote",
  pseudo : "jpcote14",   // identifiant Github?
  metsFavoris : [
      "Poulet General Tao",
      "Eggroll",
      "poutine bbq"
  ],
  hobbies:[],
  stylesMusique : [
      "Jazz",
      "Metal",
      "populaire"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=r-Z8KuwI7Gc&ab_channel=JazzTuna",
      "https://www.youtube.com/watch?v=d1-uICLQwlM&ab_channel=KOCHRECORDS",
      "https://www.youtube.com/watch?v=IKlG91yp4sQ&ab_channel=JasonMraz-Topic",
      "https://www.youtube.com/watch?v=hwQqqtdZ66o&ab_channel=Fran%C3%A7oisLeduc",
      "https://www.youtube.com/watch?v=ttoJ-Ro0L04&ab_channel=Wintersun-Topic",
      "https://www.youtube.com/watch?v=Ic5vxw3eijY&ab_channel=Estelle",
  ],
  robot : {
x: -300,
y: 0,
pas: 3,

//tete
afficher: function () {
  //route
    fill(75);
    rect(-10, 250, 650, 300);

  fill(200, 0, 0);
  rect(this.x + 275, this.y + 45, 50, 75, 20);

  //antenne
  fill(200, 0, 0);
  rect(this.x + 295, this.y + 22, 8, 20, 10);
  square(this.x + 295, this.y + 37, 8, 100, 100, 0);

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
  curve(
    this.x + 350,
    this.y + 200,
    this.x + 350,
    this.y + 200,
    this.x + 400,
    this.y + 150,
    this.x + 73,
    this.y + 100
  );
  pop();
  fill(200, 0, 0);
  triangle(
    this.x + 397,
    this.y + 132,
    this.x + 420,
    this.y + 152,
    this.x + 395,
    this.y + 162
  );

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
  square(this.x + 272, this.y + 274, 20, 50, 5, 5);
  rect(this.x + 272, this.y + 219, 20, 60, 3, 3, 0, 0);

  // jambe droite
  square(this.x + 309, this.y + 274, 20, 5, 50, 5);
  rect(this.x + 309, this.y + 219, 20, 60, 3, 3, 0, 0);
},

arriver: function () {
  this.x = this.x + this.pas;
  if (this.x >= 20) {
    this.pas = 0;
  }
},
direBonjour: function () {
  console.log(Contenu + strNom);
},
}, 
  descriptionIA : "Bob Vance est un robot qui sert à conseiller son propriétaire par rapport aux dilemmes moraux qui tourmente leur esprit. Malheureusement, son programmeur est légèrement diabolique, ce qui amène Bob Vance à prodiguer des conseils de mauvaises qualités et pousse ses utilisateurs à commettre des actes de mauvais goût.",
  autorisePublication : true
  },
  {
    prenom : "Mary-Ann",
    nom : "Côté (manque tout)",
    pseudo : "mary-ann",   // identifiant Github?
    metsFavoris : [],
    hobbies:[],
    stylesMusique : [],
    urlsMusique : [],
    robot : {strNom: "",}, 
    descriptionIA : " ", // Entre 30 et 120 mots
    autorisePublication : true  // OU false
  },
  {
    prenom : "Alexandra",
    nom : "Dias da Rocha",
    pseudo : "alexandradias",   // identifiant Github?
    metsFavoris : [
        "Ramen au boeuf",
        "Poulet citronnelle",
        "Vacherin"
    ],
    hobbies:[],
    stylesMusique : [
        "Sigur ros",
        "Mogwai",
        "Muse"
    ],
    urlsMusique : [             // 2 par style
        "https://www.youtube.com/watch?v=mZTb8WxEW78",
        "https://www.youtube.com/watch?v=jQi77xni1p8",
        "https://www.youtube.com/watch?v=luM6oeCM7Yw",
        "https://www.youtube.com/watch?v=MP9evk0f7Qg&t=1413s",
        "https://www.youtube.com/watch?v=O2IuJPh6h_A",
        "https://www.youtube.com/watch?v=w8KQmps-Sog",
        
    ],
    robot : {
      x: -400,
      strNom: "Pointe des neiges",
      
      
      //methode afficher le robot
      afficher: function(){
        
      //nuage
      
      strokeWeight(0.2);
      stroke(255);
      fill(this.x + 8,68,68);
      circle(this.x + 400,230,30);
      fill(this.x + 8,88,88);
      circle(this.x + 370,250,60);
      fill(this.x + 8,108,108);
      circle(this.x + 310,240,92);
      fill(this.x + 8,218,218);
      circle(this.x + 290,260,50);
      fill(this.x + 8,128,128);
      circle(this.x + 250,240,60);
      fill(this.x + 8,138,138);
      circle(this.x + 230,240,100);
      fill(this.x + 8,238,238);
      circle(this.x + 230,240,70);
      fill(this.x + 8,148,148);
      circle(this.x + 200,210,80);
      fill(this.x + 8,218,218);
      circle(this.x + 160,230,30);
      fill(this.x + 8,168,168);
      circle(this.x + 140,240,60);
      fill(this.x + 8,88,88);
      circle(this.x + 170,250,40);
      fill(this.x + 8,208,208);
      circle(this.x + 180,260,30);
    
  
      //couleur des pieds  
      fill(this.x + 8,58,58);
      strokeWeight(0.2);
      stroke(255);
      //forme des jambes
      
      rect(this.x + 205, 205, 85, 3, 20, 15, 10, 5);
      rect(this.x + 210, 210, 85, 3, 20, 15, 10, 5);
      rect(this.x + 215, 215, 85, 3, 20, 15, 10, 5);
        
      
      //couleur du corps
      // le this.x me permet d'incrémenter ma valeur RGB en avancant   
      fill(this.x + 11,158,this.x + 158);
      noStroke();
      //forme du corps
      circle(this.x + 250,80,100);
      
      //couleur des yeux
      fill(this.x + 8,58,58);
      noStroke()
      //forme des yeux
      circle(this.x + 280,80,35);
  
      fill(this.x + 255);
      noStroke()
      circle(this.x + 280,82,7);
  
      //ajout circle
      fill(this.x + 159,193,49);
      stroke(1)
      circle(this.x + 250,80,8);
  
      fill(this.x + 4,41,64);
      stroke(1)
      circle(this.x + 280,53,4);
      
      //couleur des antennes
      fill(this.x + 8,58,58);
      stroke(this.x + 8,58,58)
  
      //forme du bec
      strokeWeight(2); // Default
      fill(this.x + 11,158,this.x + 158);
      line(this.x + 300, 90, this.x + 330, 100);
  
      //forme des antennes
      strokeWeight(1);
      fill(this.x + 219,242,39);
      triangle(this.x + 250, 45, this.x + 255, 75, this.x + 260, 55);
      triangle(this.x + 300, 15, this.x + 260, 55, this.x + 257, 75);
  
      //jambes
      fill(this.x + 8,58,58);
      strokeWeight(2);
      // stroke(2);
      line(this.x + 243, 130, this.x + 243, 205);
      line(this.x + 253, 130, this.x + 253, 205);
      line(this.x + 263, 130, this.x + 263, 205);
      },
        
      
      // methode arriver
      arriver: function(){
        if(this.x<0){
           this.x = this.x+5;
           }
      },
  
      placerParagraphe: function(){
          // refP.position(8,290);
          refP.position(8,308);
          refP.style('width', '600px');
          refP.style('heigth', '60px');
          refP.style('background-color', 'rgba(155,255,255,0.5');
          refP.style('text-align', 'center');
          refP.style('padding-top', '16px');
          refP.style('padding-bottom', '16px');
          refP.style('margin', '0'); 
      },
  
      decorer: function(){
          let c = color(229,228,190);
          background(c);
          // fill(this.x + 8,208,208);
          strokeWeight(1);
  
          let c1 = color(4,41,64);
          fill(c1);
          triangle(18, 18, 18, 360, 81, 360);
  
          let c2 = color(0,92,83);
          fill(c2);
          triangle(180, 108, 18, 360, 81, 360);
  
          let c3 = color(159,193,49);
          fill(c3);
          // triangle(280, 108, 18, 360, 81, 360);
          triangle(235, 138, 18, 360, 81, 360);
  
          let c4 = color(219,242,39);
          fill(c4);
          ellipse(552, 44, 72, 72);
  
          let c5 = color(4,41,64);
          fill(c5);
          triangle(288, 180, 351, 360, 288, 360);
  
          let c6 = color(219,242,39);
          fill(c6);
          triangle(388, 160, 320, 360, 285, 360);
          // triangle(303, 180, 351, 360, 288, 60);
  
          let c7 = color(0,92,83);
          fill(c7);
          stroke(255);
          strokeWeight(1);
          arc(479, 300, 280, 280, PI, TWO_PI);
  
          //lines bottom
          fill(this.x + 8,58,58);
          strokeWeight(1);
          // stroke(2);
          line(0, 340, 600, 340);
          line(0, 345, 600, 345);
          line(0, 335, 600, 335);
          // line(this.x + 253, 130, this.x + 253, 205);
          // line(this.x + 263, 130, this.x + 263, 205);
        },
  
      direBonjour: function(){
          refP.html("Bonjour, mon nom est " + this.strNom);
        },
  },
   // Enlever les guillemets

    descriptionIA : "Je suis Pointe des neiges, pas très habile avec mon allure simpliste, mes formes arrondies et ma coupe dernier cri, je reste malgré tout un assistant bienveillant. Conçu pour l'accompagnement des enfants DYS, je m'adapte à leurs difficultés de manière ludique et évolutive. Chaque tâche qui m'est confiée est pour moi une source d'apprentissage. Je m'émerveille jour après jour des progrès accomplis.", // Entre 30 et 120 mots
    autorisePublication : true  // OU false
},
{
  prenom : "William",
  nom : "Fortier (manque tout)",
  pseudo : "william",   // identifiant Github?
  metsFavoris : [],
  hobbies:[],
  stylesMusique : [],
  urlsMusique : [],
  robot : {strNom: "",}, 
  descriptionIA : " ", // Entre 30 et 120 mots
  autorisePublication : true  // OU false
},
{
  prenom : "Jeremy",
  nom : "Fraser",
  pseudo : "jer",   // identifiant Github?
  metsFavoris : [
      "La Bavette !!!",
      "Salade",
      "Saumon"
  ],
  hobbies:[],
  stylesMusique : [
      "Jazz",
      "Rock/Metal",
      "Orchestrale"
  ],
  urlsMusique : [          
      "https://www.youtube.com/watch?v=ojx8dyes__8", 
      "https://www.youtube.com/watch?v=ylXk1LBvIqU",
      "https://www.youtube.com/watch?v=XtxsYF4e3uM",
      "https://www.youtube.com/watch?v=dVq-IlSe6CA&list=OLAK5uy_nlG-_QuIzyFhyo0Z15Pwaln1oEzXHPptU&index=156",
      "https://www.youtube.com/watch?v=n0TTcu89AC8",
  ],
  robot : { x:-410,
pas:5,
strNom: 'R0B0',
y1Bras:228.8,
y2Bras:180, 
pasVBras: 40,
afficher: function() {

fill(80,80,80);
rect(this.x + 300,185,20,20); 
//le cou

circle(this.x + 310,275,45);
//la roue

fill(120,120,120);
circle(this.x + 310,150,80);
//la tête

noFill(0);
circle(this.x + 339,240,12);
circle(this.x + 339,240,25);
line(this.x + 339,270,this.x + 345,240)
//fil bras/corps

fill(120,120,120);
rect(this.x + 279,205,60,80);
//le corps

line(this.x + 330,205,this.x + 330,185);
//fils corps/tête :0

fill(100,100,100);
line(this.x + 354,this.y1Bras,this.x + 400,this.y2Bras);
circle(this.x + 354,227.8,9);
rect(this.x + 339,215,15,25);
fill(80,80,80);
circle(this.x + 400,this.y2Bras,9);
//le bras méchanique

fill(210,210,220);
circle(this.x + 300,145,20);
fill(100,130,0)
circle(this.x + 300,145,14);
//gros cercle
circle(this.x + 325,150,6);
circle(this.x + 325,140,6);
//les yeux ;b

fill(210,210,210);
rect(this.x + 310,213,20,20);
fill(90,90,90);
circle(this.x + 315,218,3);
circle(this.x + 325,218,3);
rect(this.x + 319,223.5,7,4);
//Pad sur haut corps :p

fill(210,210,210);
rect(this.x + 287,254,45,25);
fill(120,120,120);
rect(this.x + 311,258,17,17);
rect(this.x + 292,258,12,5);
fill(50,190,100);
circle(this.x + 298,270,5);
fill(240,0,0);
circle(this.x + 319.8,266.5,13);
//Pad sur bas corps 

fill(90,90,90);
line(this.x + 290,115,this.x + 290,90);
circle(this.x + 290,90,3);
line(this.x + 281,122,this.x + 281,100)
circle(this.x + 281,100,3);
//les antennes 

},

arriver: function() {
  
     this.x = this.x + this.pas;
    // this.pas = this.pas * 0;
  
    if(this.x>=0) {
      this.pas=0;
  }
},

bougerBras: function() {
  if(mouseX > 2*width/3) {
    this.y2Bras = this.y2Bras + this.pasVBras;
  }
  if(this.y2Bras > 3*height/4) {
    this.pasVBras = 0;
  }
 
},

direBonjour: function() {
console.log( "Bonjour, mon nom est " + this.strNom + ". Comment puis-je vous aidez?")
}}, 
// Enlever les guillemets
  descriptionIA : "R0B0, doté de son bras mécanique, de ses multiples boutons et de sa boite vocale (non-fonctionnelle pour le moment), est amplement capable de vous aider dans n'importe quel situation.",  
  autorisePublication : true,
},
{
  prenom : "Rodrigo",
  nom : "Garay",
  pseudo : "psycho",   // identifiant Github?
  metsFavoris : [
      "Pupusa",
      "General Tao",
      "Tacos"
  ],
  hobbies:[],
  stylesMusique : [
      "Rap",
      "Indie Rock",
      "Pop"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=Amsc3rUBQHA",
      "https://www.youtube.com/watch?v=g3h8-wyytQY",
      "https://www.youtube.com/watch?v=UA5eLw-lZ2Q",
      "https://www.youtube.com/watch?v=QqRp22nqfBs",
      "https://www.youtube.com/watch?v=z5T_XOm4lPg",
      "https://www.youtube.com/watch?v=Sj9uqdzg6sk",
  ],
  robot : {
  x: -450,
  strNom: "Alejandro",
  afficher: function(){
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
arriver: function(){
    this.x = this.x + 3;
    if (this.x >= 0){
      this.x = 0;
    }
},
direBonjour: function(){
  console.log("Bonjour, mon nom est " + this.strNom + "!");
}}, // Enlever les guillemets
  descriptionIA : "Alejandro, le robot, est conçu pour les gens qui ont besoin d’un peu de joie dans leur vie. Il a une multitude de tours de magie plates, de blagues de papa pas drôles et de commentaires inutiles, mais l’important, c’est qu’il apporte un peu de compagnie et d’humour aux personnes qui en ont besoin!", // Entre 30 et 120 mots
  autorisePublication : true  // OU false
},
{
  prenom : "Loick",
  nom : "L'Espérance",
  pseudo : "colinaros123",   // identifiant Github?
  metsFavoris : [
      "shushi",
      "poutine",
      "ramen"
  ],
  hobbies:[],
  stylesMusique : [
      "trap japonais",
      "jpop",
      "kpop"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=1jGepjiR3FE",
      "https://www.youtube.com/watch?v=S5cHBB9tVos",
      "https://www.youtube.com/watch?v=Zhx1n6uvgUE",
      "https://www.youtube.com/watch?v=Qp3b-RXtz4w",
      "https://www.youtube.com/watch?v=nKU4OVH18mE",
      "https://www.youtube.com/watch?v=7C2z4GqqS5E",
  ],
  robot : {
x: -350,
sens: 1,
strNOM: "Yohann",
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
  this.x = this.x + 1 * this.sens;

  if (this.x >= 0) {
    this.x = 0;
  }
  if (this.x <= -350) {
    this.x = -350;
  }
},

direBonjour: function () {
  if (this.x >= 0) {
    console.log("bonjour mon nom est " + this.strNOM);
  }
},
direAurevoir: function () {
  this.sens = this.sens * -1;
  console.log(this.strNOM + " vous dit aurevoir");
}},

  descriptionIA : "Un robot qui analyse le comportement des personnes pour savoir comment les calmer lors de moment de crise comme un feu. Analyse pour savoir quel est le meilleur choix; qui faut-il sauver en premier; etc...", // Entre 30 et 120 mots
  autorisePublication : true  // OU false
},
{
  prenom : "Emily",
  nom : "Lagrange",
  pseudo : "H340",   // identifiant Github?
  metsFavoris : [
      "Poutine",
      "Ramen",
      "Macaroni"
  ],
  hobbies:[],
  stylesMusique : [
      "Pop" 
  ],
  urlsMusique : [             // 2 par style
      "https://youtu.be/Jn6-TItCazo",
      "https://youtu.be/nyuo9-OjNNg" 
  ],
  robot : {
x: -400,
strNom: 'H340',
afficher: function(){
   fill(0);
rect(this.x+260,15,10,55);
fill(0);
rect(this.x+330,15,10,55);

 //tête + couleur
fill(0,200,200);
circle(this.x+300,100,100);

//cou + couleur
fill(0,200,200);
circle(this.x+300,175,50);

//corp + couleur
fill(150,0,150);
square(this.x+260,200,80);

//jambes + couleur
fill(0,200,200);
circle(this.x+280,290,20);
circle(this.x+320,290,20);

//bras + couleur
fill(150,0,150);
square(this.x+240,200,20);
square(this.x+340,200,20);
fill(0);
rect(this.x+190,205,50,5);
rect(this.x+360,205,50,5);

//bouche + couleur
fill(200,180,180);
rect(this.x+275,115,50,10);

//yeux + couleur 
fill(0,100,150);
circle(this.x+280,90,20);
circle(this.x+320,90,20);
fill(0);
circle(this.x+280,90,10);
circle(this.x+320,90,10); 
},
arriver: function(){
if(this.x < 0){
this.x = this.x + 1
}      
},
direBonjour: function(){
  console.log('Bonjour, mon nom est ' + this.strNom);

}


}, // Enlever les guillemets

  descriptionIA : "H340, le robot, est conçu pour faire des tâches ménagères ou difficiles dans un domicile, mais aussi à l'extérieur pour ramasser des déchets polluants notre planète comme le plastique. Grâce à ses actions quotidiennes il réduit la pollution et améliore notre qualité de vie. ", // Entre 30 et 120 mots
  autorisePublication : true  // OU false
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

direBonjour: function(){
  console.log("Bonjour! Mon nom est "+ this.strNom)
}
}, // Enlever les guillemets
  descriptionIA : "Chibo se promène dans les rues et détecte les déchets puis il les rapporte à des poubelles ou dans le recyclage. Même si il n'a pas de bras, il essaie de faire de son mieux.", // Entre 30 et 120 mots
  autorisePublication : true
},
{
  prenom : "Raphaël",
  nom : "Mercier",
  pseudo : "water",   // identifiant Github?
  metsFavoris : [
      "crepe",
      "pizza",
      "tacos"
  ],
  hobbies:[],
  stylesMusique : [
      "hip-hop",
      "rap",
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=BuMBmK5uksg",
      "https://www.youtube.com/watch?v=wXhTHyIgQ_U",

      "https://www.youtube.com/watch?v=x6LBEoIF1mk",
      "https://www.youtube.com/watch?v=yEYCCiXLPTw",
  ],
  robot : {
x : -350,
afficher : function()
{
  //tete
fill(255,255,255)
circle(this.x+300, 100, 80)

//visage
circle(this.x +283, 90, 20);
fill(255,0,0);
circle(this.x +283, 90, 12);
circle(this.x+317, 90, 14);
fill(255,255,255);
circle(this.x+317, 90, 3);
triangle(this.x+317, 115, this.x+300, 90, this.x+283, 115);

//body
rect(this.x+250,140, 100,120);

//bras
rect(this.x+140, 140, 110, 20);
rect(this.x+350, 140, 110, 20);

//jambes
rect(this.x+250,260,30,40);
rect(this.x+320,260,30,40);

//coeur
fill(255,0,0);
circle(this.x+300, 175, 30);
},
  
arriver : function()
{
if (this.x < 0)
  {
    this.x +=1;
  }
else
  this.x = 0;
}

}, 

  descriptionIA : "Mon robot va devenir un comédien pour les humains. Son but est de faire rire les humains peuplant cette Terre. Il veut aussi devenir acteur pour la chaine télévisée Adult Swimm. ", // Entre 30 et 120 mots
  autorisePublication : false  // OU false
},
{
  prenom : "Maxime",
  nom : "Nadeau (manque le robot)",
  pseudo : "mechantMax",   // identifiant Github?
  metsFavoris : [
      "Macaroni à la viande",
      "paté chinois",
      "pountine"
  ],
  hobbies:[],
  stylesMusique : [
      "rap",
      "rock",
      "electronique"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=HYsz1hP0BFo&list=RDHYsz1hP0BFo&ab_channel=LeagueofLegends",
      "https://www.youtube.com/watch?v=9vMLTcftlyI&list=RDHYsz1hP0BFo&index=2&ab_channel=LilNasXVEVO"
  ],
  robot : "Steve", // Enlever les guillemets
  descriptionIA : "Steve est un homme puissant et très très beau, aussi il aime beaucoup se faire des amis et adore jouer avec les autres robots ", // Entre 30 et 120 mots
  autorisePublication : true  // OU false
},
{
  prenom : "Marie-Pierre",
  nom : "(manque tout)",
  pseudo : "marie-pierre",   // identifiant Github?
  metsFavoris : [],
  hobbies:[],
  stylesMusique : [],
  urlsMusique : [],
  robot : {strNom: "",}, 
  descriptionIA : " ", // Entre 30 et 120 mots
  autorisePublication : true  // OU false
},
{
  prenom : "Olivier",
  nom : "Quesnel (manque robot et description)",
  pseudo : "oli",   // identifiant Github?
  metsFavoris : [
      "Sushis",
      "Spaghetti",
      "Lasagne"
  ],
  hobbies:[],
  stylesMusique : [
      "Metal",
      "Punk rock",
      "Math rock"
  ],
  urlsMusique : [             // 2 par style
      "https://youtube.com/watch?v=dM8WjgRA6o8&feature=share&utm_source=EKLEiJECCKjOmKnC5IiRIQ",
      "xhttps://youtube.com/watch?v=DzCQIV26wmM&feature=share&utm_source=EKLEiJECCKjOmKnC5IiRIQ",
      "https://youtube.com/watch?v=lbaNydZmx7o&feature=share&utm_source=EKLEiJECCKjOmKnC5IiRIQ" 
  ],
  robot : "Bob", // Enlever les guillemets
  descriptionIA : " ", // Entre 30 et 120 mots
  autorisePublication : false
},
{
  prenom : "Mathieu",
  nom : "Thérien",
  pseudo : "tpred",   // identifiant Github?
  metsFavoris : [
      "burger",
      "poutine",
  ],
  hobbies:[],
  stylesMusique : [
      "pop-rock",
      "rock",
      "pop"
  ],
  urlsMusique : [             // 2 par style
      "https://www.youtube.com/watch?v=7wtfhZwyrcc",
      "https://www.youtube.com/watch?v=mWRsgZuwf_8",
      "https://www.youtube.com/watch?v=DYed5whEf4g",
      "https://www.youtube.com/watch?v=ZgB2qItM76g",
      "https://www.youtube.com/watch?v=1nv9br7P7g0",
      "https://www.youtube.com/watch?v=fmI_Ndrxy14",
  ],
  robot : {x:-350,
strNom:"Dikolo",
afficher: function () {
fill(130,130,130);

//roue milieu
circle(this.x + 315,180,50)

//chapeau (partie 1)
fill(255,199,71)
circle(this.x + 315,60,50)

//la tete
fill(255,255,255)
circle(this.x + 315,85,50)

//chapeau (partie 2)
fill(255,199,71)
ellipse(this.x + 315,60,100,20)

  //oeil gauche
fill(0,0,255)
circle(this.x + 305,80,10)

//oeil droit
circle(this.x + 325,80,10)

//le corps
fill(255,255,0)
rect(this.x + 290,110,50,70)

//epaule gauche
fill(162,0,255)
triangle(this.x + 290,110,this.x + 290,140,this.x + 250,140)

 //roue gauche
fill(130,130,130)
circle(this.x + 260,190,20)

//bras gauche
fill(255,255,0)
rect(this.x + 250,140,20,50)

//epaule droite
fill(162,0,255)
triangle(this.x + 340,110,this.x + 340,140,this.x + 380,140)

//roue droite
fill(130,130,130)
circle(this.x + 370,190,20)

//bras droit
fill(255,255,0)
rect(this.x + 360,140,20,50)

//epaulette gauche
fill(0,251,255)
triangle(this.x + 290,110,this.x + 290,100,this.x + 260,110)

//epaulette droite
triangle(this.x + 340,100,this.x + 340,110,this.x + 370,110)

//bec
fill(255,0,0)
triangle(this.x + 310,90,this.x + 320,90,this.x + 315,100)

},
arriver: function () {
  if (this.x<-20){
    this.x=this.x+1
  }else{
    this.x=-20
  }
  console.log(this.x)
    },
direBonjour: function(){
      console.log("Bonjour, mon nom est " + this.strNom +"!")
}}, // Enlever les guillemets
  descriptionIA : "Dikolo est un robot de l’ONU. Il va dans les pays en besoins pour créer des champs cultivables malgré les sécheresses. Il entretient par la suite ces champs jusqu’à ce que la population puisse les entretenir sans Dikolo.", 
  autorisePublication : true 
}

];