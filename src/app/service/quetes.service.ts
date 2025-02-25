import { Quest } from '../models/quetes';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class QuestService{




private quests: Quest[]=[
    {type:'event',
    date : "Semaine 0",
    linkytb: "https://www.youtube.com/embed/1zETpKeKygM?si=gqtdiumAO87FTKTl",
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