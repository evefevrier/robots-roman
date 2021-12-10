/* Ce fichier contient une grande quantité de données susceptibles d'être mises à jour.
   Pour tout changement à lui apporter, s'adresser au prof pour que le changement soit intégré aux prochaines mises à jour de ce fichier. */

// liste des urls des robots
let arrURLs = [
    "https://editor.p5js.org/2062885/embed/xtkvNCRfN",
    "https://editor.p5js.org/HugoBernard/embed/pyiuvuNY-",
    "https://editor.p5js.org/1763844/embed/s5H1BDdZs",
    "https://editor.p5js.org/2061852/embed/bmb6rvHpQ",
    "https://editor.p5js.org/Carol-Anne/embed/mHhhbM08g",
    "https://editor.p5js.org/2063493/embed/YmxBs3IDc",
    "https://editor.p5js.org/JeanFrancoisDuval/embed/hddnKTgFv",
    "https://editor.p5js.org/2063726/embed/zrQnKsKDu",
    "https://editor.p5js.org/2061761/embed/IJl25p0kD",
    "https://editor.p5js.org/2032765/embed/7aCIVRJAL",
    "https://editor.p5js.org/2064707/embed/Z5glBFQyL",
    "https://editor.p5js.org/Vincent_2003/embed/PSuLaAjk3s",
    "https://editor.p5js.org/2011241/embed/TqInGzARs",
    "https://editor.p5js.org/1665256/embed/UCDdW03Sl",
    "https://editor.p5js.org/2011424/embed/pHa-25ZFu",
    "https://editor.p5js.org/2039977/embed/XRL52f1I1",
    "https://editor.p5js.org/2063511/embed/SBsRdNiZz",
    "https://editor.p5js.org/2061698/embed/izWp-WWm4",
    "https://editor.p5js.org/2065189/embed/L4a4pbkF_",
    "https://editor.p5js.org/2032888/embed/IDR6hJvrq",
    "https://editor.p5js.org/2038177/embed/7jTCBZ_hq",
    "https://editor.p5js.org/2032594/embed/-TtZVmJNE",
    "https://editor.p5js.org/1839715/embed/D4OCaUpp7",
    "https://editor.p5js.org/nalhy0314/embed/SvHRF2eQK",
    "https://editor.p5js.org/2042758/embed/g9lrMIlzd",
    "https://editor.p5js.org/2066237/embed/rfQk7RbGW",
    "https://editor.p5js.org/1791997/embed/vQfIc-19-",
    "https://editor.p5js.org/AllanStAmantGiasson/embed/0YFPmzT34",
    "https://editor.p5js.org/2032220/embed/DMbfwa3nj"
];

// dans le même ordre que la liste des urls
// la liste des infos sur les codeurs de robots
let arrCodeurDetails = [{
    pseudo: "spoopy",
    mets: "Tacos",
    musique: "Indie, lo-fi, electropop",
    activites: "Cinéma, jeux de sociétés et lecture",
    texte: "En fait, si on se base sur le film, Wall-E a été conçu pour ranger les déchets que les humains ont laissé sur la planète avant de partir. L'objectif de Wall-E est de bâtir un nouveau monde fait de déchets amassés en cube pour qu'éventuellement les humains puissent retourner sur la terre."
},
{
    pseudo: "skyfine",
    mets: "Soupe, poutine",
    musique: "pop",
    activites: "volley-ball",
    texte: "Le robot Bonhomme est conçu pour la sécurité."
},
{
    pseudo: "robotique-885",
    mets: "Pizza, spaghetti, pâté à la viande.",
    musique: "Électronique, classique, rock.",
    activites: "Badminton, soccer, tennis.",
    texte: "Robbie, le robot, est conçu pour servir des clients dans un restaurant."
},
{
    pseudo: "shiki",
    mets: "Poutine, Pizza, Tacos.",
    musique: "Électro, Dubstep, pop.",
    activites: "Jeux vidéo, regarder des animes et jouer avec mon chien.",
    texte: "Cubelios, le robot, est conçu pour promener les animaux domestiques de tout genre. Il suffit d'installer les programmes pour la race de notre choix."
},
{
    pseudo: "violette",
    mets: "Spaghetti, poutine et casserole aux fruits de mer",
    musique: "Pop, Hip-hop, musique alternative",
    activites: "Natation, vélo et la dance",
    texte: "Rosie, le robot, est conçu pour aider les personnes âgées à se sentir moins seuls en communiquant avec eux et en leur chantant des chansons. Rosie aide également les aînés à retrouver le moral lorsqu'ils se sentent tristes."
},
{
    pseudo: "azar",
    mets: "Poutine",
    musique: "Le rap, la pop",
    activites: "Le hockey, le ski",
    texte: "Clap, le robot, est conçu pour être un assistant dans la maison, il peut faire le ménage et aider à faire la cuisine et d'autres corvées de la maison."
},
{
    pseudo: "professeur_Plum",
    mets: "sushis, pâtes, dumplings",
    musique: "classique, rock",
    activites: "arts martiaux",
    texte: "Jeff, le robot, est conçu pour le partage d'idées, la recherche d'informations et pour faire le café."
},
{
    pseudo: "lutin",
    mets: "Toasts",
    musique: "Soundtrack, Hip-Hop",
    activites: "Jeux Vidéo, Jogging",
    texte: "George est conçu pour être mon assistant personnel et m'aider à faire mes dissertations dans mes cours de français."
},
{
    pseudo: "theRedLibra",
    mets: "Tiramisu aux fruits rouges",
    musique: "Pop, Latino, R&B",
    activites: "Marche, randonnées",
    texte: "LadySmith, le robot, est conçu pour trouver des matchs entre les personnes célibataires en analysant toutes leurs caractéristiques. Cela a pour but d'établir un pourcentage de compatibilité. Cependant ce robot ne prendra pas en considération les envies des personnes, mais plutôt leur besoin, afin d'augmenter les chances de durabilité des couples. En effet, l'objectif est de valoriser le partage humain de l'expérience en apprenant à connaitre les gens, et non en se focalisant sur le physique, qui rend l'expérience inutile. Exemple: \"Je veux un homme grand, brun, musclé, drôle\" est une demande qui ne sera pas prise en considération par le robot. \"J'ai besoin d'un homme rassurant et qui prends soin de lui et des autres\" sera une demande acceptée car cela permet tout de même de garder des possibilités de matchs et de partage humain. \"There's are a difference between a want and a need\", voilà la pensée de LadySmith."
},
{
    pseudo: "wahza",
    mets: "Tacos. Kebab. Lasagnes.",
    musique: "Rap, RNB, rock",
    activites: "Tennis, football, basketball.",
    texte: "Le robot Bekkog permet de composer des sons aléatoires sur un logiciel de musique. Il permet ainsi de simplifier la tâche à l'utilisateur de trouver un style de musique."
},
{
    pseudo: "pierre",
    mets: "pain farcis, lasagne, paté chinois",
    musique: "rap, pop, electro",
    activites: "hockey, basketball et badminton",
    texte: "Le Robotkop est un robot bon pour la sécurité des civils. Il peut, avec son programme super avancé, détecter à l'avance les menaces qui pèsent sur les citoyens d'une ville. Problème: Il n'a pas de morale et va par qui pourrait faire du mal à quelqu'un."

},
{
    pseudo: "blackRoses",
    mets: "Poutines, pizza",
    musique: "rap, country",
    activites: "Basketball",
    texte: "Roby est connu pour aider la police"
},
{
    pseudo: "godDamnMonster666",
    mets: "Sushi, fondu et spaghetti",
    musique: "Heavy métal et rock",
    activites: "Hiking, snowboard et football",
    texte: "Eve, le robot, est conçu pour analyser la propreté biologique terreste. Elle examine le niveau de pollution dans le secteur, s'occupe des plantes et ramasse même les déchets!"
},
{
    pseudo: "loupGris",
    mets: "Tacos et nachos",
    musique: "Rock",
    activites: "Hiking et Netflix",
    texte: "Bobby, le robot, est conçu pour nous aider à bien gérer notre temps. Il nous réveille à l'heure demandée le matin, nous dit quand aller à notre cours, si on va être en retard quelque part, à quelle heure partir pour éviter le trafic, etc."
},
{
    pseudo: "hellisim",
    mets: "Sushis / Général Tao / Pizza Napolitaine",
    musique: "Folk / Indie / Lofi",
    activites: "Hiking / Vélo / Soccer",
    texte: "Djazi serait un robot pour les personnes âgées, mais pas n'importe lesquelles... Il serait servant pour les ex-milliardaires comme Bill Gates, Vladimir Poutine, Jeff Bezos et autres. Des massages de pied, jusqu'aux cours de tennis professionnel Djazi serait la réponse à tous leurs tracas."
},
{
    pseudo: "badApe",
    mets: "La pizza, les hamburgers et les ailes de poulets",
    musique: "Le hard rock et le grime",
    activites: "Les jeux vidéo, le tennis et la marche",
    texte: "John-E, le robot, est conçu pour soutenir et aider les jeunes enfants malades vivant des situations difficiles. Il joue avec les enfants malades pour les aider à rester heureux."
},
{
    pseudo: "tadasana",
    mets: "Sushi, poutine",
    musique: "alternatif, rock, hiphop/rap",
    activites: "escalade, yoga, tricot",
    texte: "Todd, le robot est conçu pour analyser des profils de personnes et détecter qui représente une menace pour la population."
},
{
    pseudo: "étruna",
    mets: "Poutine, fromage",
    musique: "un peu de tout",
    activites: "Écouter des série télé, camping sauvage",
    texte: "Sonpe, le robot est conçu pour aider à élucider les enquêtes irrésolues."
},
{
    pseudo: "drama",
    mets: "Sushi, ramen, poulet général tao",
    musique: "Tout sauf le heavy metal. Aime aussi quand plusieurs styles se mélangent",
    activites: "marche en montagne, tennis, art",
    texte: "Dramical, le robot, est conçu pour soutenir la vie quotidienne tout en se connectant avec les nouvelles du monde, pour mettre le plus de <em>drama</em> possible dans le foyer. (Fait automatiquement la traduction des nouvelles). Il sera là pour aider dans les tâches comme calculer, transporter et supporter émotionnellement, mais aussi là pour vous rappeler comment la vie est difficile."
},
{
    pseudo: "covid-19",
    mets: "hamburger, pizza, poutine",
    musique: "Américaine",
    activites: "Soccer",
    texte: "Le robot SP va afficher en synchrone le nombre de personnes qui ont reçu le vaccin et ça va être une motivation pour inciter toutes les personnes à faire de même afin d'atteindre une meilleure qualité de vie pour tous."
},
{
    pseudo: "bat0t",
    mets: "pizza, torino, burrito",
    musique: "rap",
    activites: "jouer au Basket-ball",
    texte: "Le rôle du robot Rob est de tenir compagnie et assister dans des tâches."
},
{
    pseudo: "bhb",
    mets: "couscous, sushi, chocolat",
    musique: "minimale, techno",
    activites: "randonnée, surf, dessiner",
    texte: "Kika, le robot, est conçu pour être un coach sportif qui se renseigne sur notre alimentation et s'adapte."
},
{
    pseudo: "coderPeach",
    mets: "nouilles Shanghai,sushi,pizza",
    musique: "pop, rap, electro",
    activites: "Pêche et marche en forêt",
    texte: "Alfred, le robot, est conçu pour fabriquer des habitacles sur Mars afin que celle-ci puisse accueillir des humains."
},
{
    pseudo: "patate",
    mets: "sushis",
    musique: "rap",
    activites: "Netflix",
    texte: "Réjean est un robot de course"
},
{
    pseudo: "yuck",
    mets: "I don’t know",
    musique: "Trap",
    activites: "Vélo, marche, course",
    texte: "R0BOTGOTH le robot est conçu pour étudier la physique quantique, son meilleur ami est Spot®️ de Boston Dynamics, les deux font un combo à la fois très amical et sociable et à la fois très utile pour la science."
},
{
    pseudo: "rdcreator",
    mets: "Cannellonis aux patates douces et champignons (Vegan), Tacos de chou-fleur (Vegan), Coquilles au pesto de lentilles (Vegan)",
    musique: "edm, rock, classical piano",
    activites: "Piano, snowboard, arts visuels",
    texte: "Rich Dotcom, le robot, est conçu pour effrayer les corbeaux de votre propriété. Il accomplit ses missions grâce à son système de caméras et à son intelligence artificielle. Ses fonctionnalités opèrent ensemble pour analyser 360 degrés jusqu'à plus de 50m de distance. Lorsqu’il détecte un corbeau, il émet une tonalité sonore inaudible pour les humains, mais perturbante pour les corbeaux, le tout sans mettre en danger l'oiseau."
},
{
    pseudo: "sanouta",
    mets: "spaghetti, sandwich et chocolat",
    musique: "romantique",
    activites: "marche, natation et basket",
    texte: "Roboto est conçu pour l'apprentissage des enfants. Il va les aider à faire leurs devoirs. Il est muni d'une base de données avec tous les niveaux primaires (on peut concevoir un pour le primaire et un autre pour le secondaire). On trouve toutes les matières avec toutes les leçons. Les parents vont le programmer: ils vont choisir la leçon et Roboto va faire le nécessaire d'une manière interactive. De nos jours, les enfants sont très intelligents et on cherche toujours à les stimuler. Grâce à Roboto, ils seront motivés et ainsi les parents débordés seront contents."
},
{
    pseudo: "laBoiteAPet",
    mets: "Poutine, Wraps, Burritos",
    musique: "Rap français, Rock, Musique québécoise",
    activites: "Hockey, Jeux vidéo, Pokemon",
    texte: "Cubone le robot est conçu pour la pratique d'activités sportives comme le hockey. Il est également utile pour déterminer la valeur de tout objet sur terre sans le moindre effort."
},
{
    pseudo: "cropBst",
    mets: "Pizza, sushi, gaufres",
    musique: "Techno, le reggae",
    activites: "le snowboard, le surf, la randonnée",
    texte: "Deadpool est conçu pour aider les gens à rester focus (à les pousser vers le haut). Si quelqu'un lui dit : \"je veux être fort en programmation et en dessin.\" Il va pousser la personne à se créer une routine, à lui proposer à plusieurs moments de la journée de s'entraîner, de trouver des manières pour s'inspirer. D'ailleurs, Deadpool est aussi un mine d'information, il connaît tout et a accès à tout. Il est très cultivé : films, livres, documentaires, informations diverses."
} 
];