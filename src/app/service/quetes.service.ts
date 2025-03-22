import { Quest } from '../models/quetes';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class QuestService{




private quests: Quest[]=[
    {type:'event',
    date : "Semaine 0",
    linkytb: "https://www.youtube.com/embed/1zETpKeKygM?si=CNTBzexdKpQzjIvr&amp" ,

    lieux: "Privilégiez un atterrissage à Crime city",
    description: ['Visiter Crime City OU Lonewolf Lair OU Seaport City',' Récupérer Thermite','Lancer Thermite sur Les coffre','Dégats aux point faible','Obtenir et dépenser des Vitocoin','Acheter aux différents marchés noir' , 'Regagner des pv avec : gourde du brave OU aspergeur d\' Or OU grenade à médibrume' ,'Éliminer avec une arme Légendaire ou plus'],
    },

    {
    type:'hebdo',
    date : "Semaine 0",
    linkytb: "https://www.youtube.com/embed/4WCrh0cIntM?si=WKu6gDjFp0yh5_3H",
    lieux: "Privilégiez un atterrissage à Crime city",
    description:['Lingots dans une chambre forte' , 'Dégâts à des Boss' , 'Ramasser des bénédictions et des médaillons ',' Parler à des perso' , 'Tuer hors des lieux-dits']
    },
    {
        type:'hebdo',
        date: 'Seamine 1',
        linkytb:  "https://www.youtube.com/embed/uOYJD10vyT8",
        lieux: 'Toute la map',
        description:['Fouillez des sacs de cambriolage',
            'Envoyer 2 thermites sur un véhicule',
            'Recruter Rose de Nuit à Démon\' s Dojo pour avoir les munitions pleines et parcourir une distance avec un personnage recruté ',
            'Éliminer des joueurs et voler leur or'
        ]  
    },
    {type:'histoire',
        date:'Semaine 1',
        linkytb:"https://www.youtube.com/embed/uOYJD10vyT8",
        lieux:'Outlaw Oasis principalement',
        description:['Récupérer 150 d\'or dans les petits coffres noir ou les caissses', 
            'Écouter Splosif dans son repère',
            'Mettre l\'explosif sur un porte de chambre forte (pas la peine de finir le coffre)',
            'Aller à Outlaw pour braquer 3 téléphone',
            'Braquer avec Valentina le coffre (ça compte pour les deux séries de quêtes d\'histoire '
        ]
    },
    {
        type:'event',
        date: "Semaine 1",
        linkytb:"https://www.youtube.com/embed/D9LT4UCmBzs?si=87YjfeIFZ5riMLZg" ,
        lieux:'Toute la map',
        description:['Sur les joueur : ', "     - Il faudra les tuer avec un pistolet et une arme de mélée ", "     - Ramasser leur or" ,  "Pour les bots il faudra les tuer avec une PM",
            "N'oubliez pas de recruter, dépenser votre argent au marché noir et manger de la nourriture (les champignons ne comptent pas)"
        ]
    },
    {
        type:'histoire',
        date: "Semaine 2",
        linkytb:"https://www.youtube.com/embed/jqR87FGXBeI" ,
        lieux:'Crime city et Magic Mosses ',
        description:['Tuer à crime city', "Aller parler à Joss à Mosses et acheter un laser plasma ", " Faire la fête de vito" ,  "Aller au marché noir au nord de crime city, acheter un fusil à dégâts collatéraux",
            "Tuer 3 personnes avec le fusil", "Détruire une pierre avec des nervures d'or avec le laser plasma", "Retourner à Mosses pour tester la pierre sur l'établi"
        ]
    },
    {
        type:'hebdo',
        date: "Semaine 2",
        linkytb:"https://www.youtube.com/embed/H25nilufDXY" ,
        lieux:'Toute la map ',
        description:['Il faudra voler dans les air et un vitcoin',
            'Tuer soit en glissant soit en nageant',
            'faire 2 top 25',
            'Perdre de la vie pour pouvoir en récupérer'
        ]
    },
    {
        type:'hebdo',
        date: "Semaine 3",
        linkytb:"https://www.youtube.com/embed/DY_9MndiIpU" ,
        lieux:'Privélégier l\'arrivée à Shiny',
        description:['Miner des mines d\'or',
            'Tuer sous l\'effet de la ruée',
            'Galère à trouver des lamas dorés',
            'Chevauche une forreuse'
        ]
    },
    {
        type:'event',
        date: "Semaine 3",
        linkytb:"https://www.youtube.com/embed/Qf7jY-NQ3CQ" ,
        lieux:'Le coffre où Fletcher apparait',
        description:['Tue des bots que ce soit aux coffres ou à la météo',
            'Plus de 100 de dégat en 1 coup avec le pompe',
            'Gagne de la tune ou dépense beaucoup dans la partie',
            'Glisse sur les rails de shiny',
            'Récupère les médaillons sur Fletcher et sur l\'île ainsi que des bénédictions',
            'Joue pendant 20 phases de la tempête'
        ]
    },
    {
        type:'histoire',
        date: "Semaine 3",
        linkytb:"https://www.youtube.com/embed/JRVCISIXtgI" ,
        lieux:'Les marché noirs, La montagne en forme de loup et Masked',
        description:['Accomplir un mandat de l\'ombre',
            'Dépenser son argent dans un marché noir',
            'Ouvrir un coffre spécial dans la chambre secrète des marchés noir',
            'Au pied de la grande roche en forme de loup répurérer le sac à dos',
            'Analyser les 3 sources d\'énergie',
            'Prendre le fragment 0 dans les sous sol de Masked',
            'retourner voir Midas'
        ]
    },
    {
        type:'event',
        date: "Semaine 3",
        linkytb:"https://www.youtube.com/embed/JkqNRzi2Udg" ,
        lieux:'Les villes avec coffre fort, les trains et les fourgons',
        description:['Pour la quête du médaillon : une fois que tu as un médaillons jète le et reprends le jusqu\'à finir les 5 étapes',
            'Dépenser son argent partout où tu peux',
            'Fais le max de coffre, train et fourgons par partie',
            'Tous les bots de la carte fonctionne pour la quête des Bots SAUF ceux de la tour météo',
     
        ]
    },
    {
        type:'hebdo',
        date: "Semaine 4",
        linkytb:"https://www.youtube.com/embed/nuKQq92VzIs" ,
        lieux:'Partout avec une préférence pour les montagnes pour glisser 50m',
        description:['Survie 3fois jusqu\'au top 17',
            'Tire à plus de 50m',
            'Lance des objets (les bandages c\'est pratique et efficace',
            'Prends une brise rotule et amuse toi ',
            'Glisse sur 50m'
        ]
    },
    {
        type:'event',
        date: "Semaine 4",
        linkytb:"https://www.youtube.com/embed/-0vRoObr_Eo" ,
        lieux:'shogun\'s Solitude pour recruter le bot sinon toute la map',
        description:['S\'enduire d\'or et courrir',
            'Envoyer en l\'air ces adversaires grâce à la batte ou aux grenades (les grenades semblent plus efficaces)',
            'Utiliser une arme exotique et soit le mini-gun soit le pistolet de midas (le mieux c\'est d\'avoir le niveau or dans les cartes)',
            'Tirer à 40 m (facile avec le pistolet de Midas)',
            'Obtenir des disctinctions '
        ]
    },
    
  
    
]

getAllQuest():Quest[]{
    return this.quests
}

getQuestByType(choice:string):Quest[]{
    if(choice==='all'){
     return this.quests
    }else{return this.quests.filter(quest=> quest.type===choice)}
    
}
 
}