let arrData = [0,1,3,4,6,7,8,9,11,13,14,15,16,18,19,20,21,23,24,28,31,32,33,34];

let arrURLs = [
    "https://editor.p5js.org/2043294/embed/qGjTpxX6E", // joanie -- à réparer
    "https://editor.p5js.org/2062885/embed/xtkvNCRfN", // laury-ann
    "https://editor.p5js.org/1534937/embed/F3sGvUCLK", // hugo -- à réparer
    "https://editor.p5js.org/1763844/embed/s5H1BDdZs", // tristan bernard
    "https://editor.p5js.org/2061852/embed/bmb6rvHpQ", // olivier boucher
    "https://editor.p5js.org/2011982/embed/jXGvbViO9", // rachel -- à réparer
    "https://editor.p5js.org/Carol-Anne/embed/mHhhbM08g", // carol-anne
    "https://editor.p5js.org/2063493/embed/YmxBs3IDc", // thomas chevarie 
    "https://editor.p5js.org/JeanFrancoisDuval/embed/hddnKTgFv", // jeff duval
    "https://editor.p5js.org/2063726/embed/zrQnKsKDu", // alex ferland
    "https://editor.p5js.org/2036094/embed/3a7hxiPAs", // félix ferland
    "https://editor.p5js.org/2061761/embed/IJl25p0kD", // nico fleurot
   "https://editor.p5js.org/2064707/embed/17J8vV_Nq", // pierre jr gaulin
    "https://editor.p5js.org/2032765/sketches/7aCIVRJAL", // erwan goujon
    "https://editor.p5js.org/Vincent_2003/embed/PSuLaAjk3s", // vincent hebert
  "https://editor.p5js.org/2011241/embed/TqInGzARs", // megan langevin
    "https://editor.p5js.org/1665256/embed/UCDdW03Sl", // amelie larouche
    "https://editor.p5js.org/2011424/embed/npVXn6b1-", // simon lefebvre --enlever le son
    "https://editor.p5js.org/2039977/embed/XRL52f1I1", // olivier lemay
   "https://editor.p5js.org/2063511/embed/K8c6Uz3KL", // camille marceau
    "https://editor.p5js.org/2061698/embed/izWp-WWm4", // daphnée martel
    "https://editor.p5js.org/2065189/embed/DdVA-mQka", // jasmin
    "https://editor.p5js.org/2032888/embed/IDR6hJvrq", // leonardo
    "https://editor.p5js.org/2038177/embed/rf1aN3ltH", // steve 
    "https://editor.p5js.org/2032594/embed/-TtZVmJNE", // louna
    "https://editor.p5js.org/1839715/embed/D4OCaUpp7", // gabriel
    "https://editor.p5js.org/nalhy0314/embed/SvHRF2eQK", // nalhy
     "https://editor.p5js.org/2036350/embed/93TPz6u6B", // alexy -- useless bot inerte
     "https://editor.p5js.org/2042758/embed/g9lrMIlzd", // samantha  -- inerte
     "https://editor.p5js.org/2044086/embed/u2JXm61Wp",// anthony
     "https://editor.p5js.org/2066237/embed/rfQk7RbGW",// olivier roy
     "https://editor.p5js.org/1791997/embed/vQfIc-19-",// sana
     "https://editor.p5js.org/AllanStAmantGiasson/embed/pMPhVbDBF",// allan
     "https://editor.p5js.org/2032220/embed/DMbfwa3nj",// manon
    "https://editor.p5js.org/efevrier/embed/kxl1NKuiR"
];

let arrAuteurDetails = [ 
    {
        pseudo: "Hobistachu",
        mets: "sushis, macaroni à la viande",
        musique: "k-pop",
        activites: "La marche",
        texte:"Cya, le robot, est conçu pour comprendre et pouvoir appliquer toute les langues existantes. Il est petit et compact, de manière à vous accompagner dans tout vos voyages. Sa principale fonction est de capter une langue entendue et de traduire immédiatement dans un autre language choisi au préalable."
    },
    {
        pseudo: "spoopy",
        mets: "Tacos",
        musique: "Indie, lo-fi, electropop",
        activites: "Cinéma, jeux de sociétés et lecture",
        texte:"En fait, si on se base sur le film, Wall-E a été conçu pour ranger les déchets que les humains ont laissé sur la planète avant de partir. L'objectif de Wall-E est de bâtir un nouveau monde fait de déchets amassés en cube pour qu'éventuellement les humains puissent retourner sur la terre."
    },
    {
        pseudo: "Skyfine",
        mets: "Soupe, poutine",
        musique: "pop",
        activites: "volley-ball",
        texte: "Le robot Bonhomme est conçu pour la sécurité."
    },
    {
        pseudo: "Robotique-885",
        mets: "Pizza, spaghetti, pâté à la viande.",
        musique: "Électronique, classique, rock.",
        activites: "Badminton, soccer, tennis.",
        texte:"Robbie, le robot, est conçu pour servir des clients dans un restaurant."
    },
    {
        pseudo: "Shiki",
        mets: "Poutine, Pizza, Tacos.",
        musique: "Électro, Dubstep, pop.",
        activites: "Jeux vidéo, regarder des animes et jouer avec mon chien.",
        texte:"Cubelios, le robot, est conçu pour promener les animaux domestiques de tout genre. Il suffit d'installer les programmes pour la race de notre choix."
    },
    {
        pseudo: "jo5",
        mets: "poutine",
        musique: "rap",
        activites: "rien faire"
    },
    {
        pseudo: "Violette",
        mets: "Spaghetti, poutine et casserole aux fruits de mer",
        musique: "Pop, Hip-hop, musique alternative",
        activites: "Natation, vélo et la dance",
        texte:"Rosie, le robot, est conçu pour aider les personnes âgées à se sentir moins seuls en communiquant avec eux et en leur chantant des chansons. Rosie aide également les aînés à retrouver le moral lorsqu'ils se sentent tristes."
    },
    {
        pseudo: "Azar",
        mets: "Poutine",
        musique: "Le rap, la pop",
        activites: "Le hockey, le ski",
        texte:"Clap, le robot, est conçu pour être un assistant dans la maison, il peut faire le ménage et aider à faire la cuisine et d'autres corvées de la maison."
    },
    {
        pseudo: "Professeur Plum",
        mets: "sushis, pâtes, dumplings",
        musique: "classique, rock",
        activites: "arts martiaux",
        texte:"Jeff, le robot, est conçu pour le partage d'idées, la recherche d'informations et pour faire le café."
    },
    {
        pseudo: "Lutin",
        mets: "Toasts",
        musique: "Soundtrack, Hip-Hop",
        activites: "Jeux Vidéo, Jogging",
        texte: "George est conçu pour être mon assistant personnel et m'aider à faire mes dissertations dans mes cours de français."
    },
    {
        pseudo: "jo10",
        mets: "poutine",
        musique: "rap",
        activites: "rien faire"
    },
    {
        pseudo: "TheRedLibra",
        mets: "Tiramisu aux fruits rouges",
        musique: "Pop, Latino, R&B",
        activites: "Marche, randonnées",
        texte:"LadySmith, le robot, est conçu pour trouver des matchs entre les personnes célibataires en analysant tous les caractéristiques des personnes. Cela a pour but d'établir un pourcentage de compatibilité. Cependant ce robot ne prendra pas en considération les envies des personnes, mais de leur besoin afin d'augmenter les chances de durabilité des couples. En effet, l'objectif est de valoriser le partage humain de l'expérience en apprenant à connaitre les gens, et non en se focalisant sur le physique, qui rend l'expérience inutile. Exemple: \"Je veux un homme grand, brun, musclé, drôle\" est une demande qui ne sera pas prise en considération par le robot. \"J'ai besoin d'un homme rassurant et qui prends soin de lui et des autres\" sera une demande acceptée car cela permet tout de même de garder des possibilités de matchs et de partage humain. \"There's are a difference between a want and a need\", voilà la pensée de LadySmith."
    },
    {
        pseudo: "jo12",
        mets: "poutine",
        musique: "rap",
        activites: "rien faire"
    },
    {
        pseudo: "Wahza",
        mets: "Tacos. Kebab. Lasagnes.",
        musique: "Rap, RNB, rock",
        activites: "Tennis, football, basketball.",
        texte:"Le robot Bekkong permet de composer des sons aléatoires sur un logiciel de musique. Il permet ainsi de simplifier la tâche à l'utilisateur de trouver un style de musique."
    },
    {
        pseudo: "BlackRoses",
        mets: "Poutines, pizza",
        musique: "rap, country",
        activites: "Basketball",
        texte:"Roby est connu pour aider la police"
    },
    {
        pseudo: "GodDamnMonster666",
        mets: "Sushi, fondu et spaghetti",
        musique: "Heavy métal et rock",
        activites: "Hiking, snowboard et football",
        texte: "Eve, le robot, est conçu pour analyser la propreté biologique terreste. Elle examine le niveau de pollution dans le secteur, s'occupe des plantes et ramasse même les déchets!"
    },
    {
        pseudo: "LoupGris",
        mets: "Tacos et nachos",
        musique: "Rock",
        activites: "Hiking et Netflix",
        texte:"Bobby, le robot, est conçu pour nous aider à bien gérer notre temps. Il nous réveille à l'heure demandée le matin, nous dit quand aller à notre cours, si on va être en retard quelque part, à quelle heure partir pour éviter le trafic, etc."
    },
    {
        pseudo: "Hellisim",
        mets: "Sushis / Général Tao / Pizza Napolitaine",
        musique: "Folk / Indie / Lofi",
        activites: "Hiking / Vélo / Soccer",
        texte:"Djazi serait un robot pour les personnes âgées, mais pas n'importe lesquelles il serait servant pour les ex-milliardaires comme Bill Gates / Vladimir Poutine / Jeff Bezos et autres. Des massages de pied, jusqu'aux cours de tennis professionnel Djazi serait la réponse à tous leurs tracas."
    },
    {
        pseudo: "BadApe",
        mets: "La pizza, les hamburgers et les ailes de poulets",
        musique: "Le hard rock et le grime",
        activites: "Les jeux vidéo, le tennis et la marche",
        texte:"John-E, le robot, est conçu pour soutenir et aider les jeunes enfants malades vivant des situations difficiles. Il joue avec les enfants malades pour les aider à rester heureux."
    },
    {
        pseudo: "Tadasana",
        mets: "Sushi, poutine",
        musique: "alternatif, rock, hiphop/rap",
        activites: "escalade, yoga, tricot",
        texte:"Todd, le robot est conçu pour analyser des profils de personnes et détecter qui représente une menace pour la population."
    },
    {
        pseudo: "étruna",
        mets: "Poutine, fromage",
        musique: "un peu de tout",
        activites: "Écouter des série télé, camping sauvage",
        texte:"Sonpe, le robot est conçu pour aider dans des les enquêtes irrésolues."
    },
    {
        pseudo: "Drama",
        mets: "Sushi, ramen, poulet général tao",
        musique: "Tout sauf le heavy metal. Aime aussi quand plusieurs styles se mélange",
        activites:"marche en montagne, tennis, art",
        texte: "Dramical, le robot, est conçu pour soutenir la vie quotidienne tout en se connectant avec les nouvelles du monde, pour mettre le plus de <em>drama</em> possible dans le foyer. (Fait automatiquement la traduction des nouvelles). Il sera là pour aider dans les tâches comme calculer, transporter et supporter émotionnellement, mais aussi là pour vous rappeler comment la vie est difficile."
    },
    {
        pseudo: "Covid-19",
        mets: "hamburger, pizza, poutine",
        musique: "Américaine",
        activites: "Soccer",
        texte: "Le robot SP va afficher en synchrone le nombre de personnes qui ont reçu le vaccin et ça va être une motivation pour inciter toutes les personnes à faire de même afin d'atteindre une meilleure qualité de vie pour tous."
    },
    {
        pseudo: "Bat0t",
        mets: "pizza, torino, burrito",
        musique: "rap",
        activites: "jouer au Basket-ball",
        texte:"Tenir compagnie et assister dans des tâches."
    },
    {
        pseudo: "BHB",
        mets: "couscous, sushi, chocolat",
        musique: "minimale, techno",
        activites: "randonnée, surf, dessiner",
        texte:"Kika, le robot, est conçu pour être un coach sportif qui ce renseigne sur notre alimentation et s'adapte."
    },
    {
        pseudo: "CoderPeach",
        mets: "nouilles Shanghai,sushi,pizza",
        musique: "pop, rap, electro",
        activites: "Pêche et marche en forêt",
        texte: "Alfred,le robot, est conçu pour fabriquer des habitacles sur Mars afin que celle-ci puisse accueillir des humains."
    },
    {
        pseudo: "Patate",
        mets: "sushis",
        musique: "rap",
        activites: "Netflix",
        texte:"Rejean est un robot de course"
    },
    {
        pseudo: "jo27",
        mets: "poutine",
        musique: "rap",
        activites: "rien faire"
    },
    {
        pseudo: "Yuck",
        mets: "I don’t know",
        musique: "Trap",
        activites: "Vélo, marche, course",
        texte:"R0BOTGOTH le robot est conçu pour étudier la physique quantique, son meilleur ami est Spot®️ de Boston Dynamics, les deux font un combo à la fois très amical et sociable et à la fois très utile pour la science."
    },
    {
        pseudo: "jo29",
        mets: "poutine",
        musique: "rap",
        activites: "rien faire"
    },
    {
        pseudo: "rdcreator",
        mets: "Cannellonis aux patates douces et champignons (Vegan), Tacos de chou-fleur (Vegan), Coquilles au pesto de lentilles (Vegan)",
        musique: "edm, rock, classical piano",
        activites: "Piano, snowboard, arts visuels",
        texte:"Rich Dotcom, le robot, est conçu pour effrayer les corbeaux de votre propriété, il accomplit ses missions grâce à son système de caméras et à son intelligence artificielle, ces fonctionnalités opèrent ensemble pour analyser 360 degrés jusqu'à plus de 50m de distance, lorsqu’il détecte un corbeau il émet une tonalité sonore inaudible pour les humain, mais perturbante pour les corbeaux, le tout sans mettre en danger l'oiseau."
    },
    {
        pseudo: "sanouta",
        mets: "spaghetti, sandwich et chocolat",
        musique: "romantique",
        activites: "marche, natation et basket",
        texte:"Roboto est conçu pour l'apprentissage des enfants. Il va les aider à faire leurs devoirs. Il est muni d'une base de données avec tous les niveaux primaires (on peut concevoir un pour le primaire et un autre pour le secondaire). On trouve toutes les matières avec toutes les leçons. Les parents vont le programmer: ils vont choisir la leçon et Roboto va faire le nécessaire d'une manière interactive. De nos jours, les enfants sont très intelligents et on cherche toujours a les stimuler. Avec cette façon, ils seront motivés et ainsi les parents débordés seront contents."
    },
    {
        pseudo: "LaBoiteAPet",
        mets: "Poutine, Wraps, Burritos",
        musique: "Rap français, Rock, Musique québécoise",
        activites: "Hockey, Jeux vidéo, Pokemon",
        texte:"Cubone le robot est conçu pour a pratique d'activité sportive comme le hockey. Il est également utile pour déterminer la valeur de tout objet sur terre sans la moindre effort."
    },
    {
        pseudo: "cropBst",
        mets: "Pizza, sushi, gaufres",
        musique: "Techno, le reggae",
        activites: "le snowboard, le surf, la randonnée",
        texte:"Deadpool est conçu pour aider les gens a resté focus (à les pousser vers le haut). Si quelqu'un lui dit : \"je veux être fort en programmation et en dessin. Il va pousser la personne à se créer une routine, à lui proposer à plusieurs moments de la journée de s'entraîner, de trouver des manières pour s'inspirer. D'ailleurs, Deadpool est aussi un mine d'information, connaît tout et à accès à tout. Il est très cultivé : films, livres, documentaires, informations diverses."
    },
    {
        pseudo: "Èèèève",
        mets: "masala dosa",
        musique: "klezmer, jazz, chansonniers",
        activites: "fendre du bois",
        texte:"La robote Philomène est conçue pour danser et faire danser sur des rythmes latinos ou klezmer. De plus, elle connaît toute la gastronomie internationale et grâce à ses puissants capteurs sensoriels gustatifs et olfactifs, elle peut cuisiner n'importe quel plat avec un sens des arômes simplement envoûtant."
    } 
];

let arrBlagues = [
    "Un geek ne crie pas… il URL",
    "Vous connaissez la blague du statisticien? <br /> Oui, probablement",
    "Que prend un éléphant lorsqu'il va au restaurant? <br /> Il prend de la place!",
    "Deux boulettes jouent à la cachette. L'une dit à l\'autre: <br />« Où est-ce que t\'es cachée? »",
    "Quelle monnaie utilise les poissons? <br />Les sous marins.",
    "Ma prof d'informatique est vraiment très petite. <br /> Oui, c'est une micro-professeure.",
    "Comment appelle-ton un rat sans queue? <br /> Un raccourci.",
    "De quelle couleur sont les petits pois? <br /> Les petits poissons rouges!?",
    "Que dit une maman baleine à son petit qui fait trop de bruit? <br /> Cétacé.",
    "Pourquoi les canards sont-ils toujours à l'heure? <br /> Car ils sont dans l'étang.",
    "Quels sont les chiffres préférés de la poule?<br /> 7-1-9",
    "Que font les vaches quand elles ferment les yeux? <br /> Du lait concentré."
];