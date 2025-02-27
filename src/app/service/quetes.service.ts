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
    }
 
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