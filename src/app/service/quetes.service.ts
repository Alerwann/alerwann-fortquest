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
            'Tué sou l\'effet de la ruée',
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
            'Gagne la de la tune ou dépense beaucoup dans la partie',
            'Glisse sur les rails de shiny',
            'Récupère les médaillons sur Fletcher et sur l\'île ainsi que des bénédictions',
            'Joue pendant 20 phases de la tempête'
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