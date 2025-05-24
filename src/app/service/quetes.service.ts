import { Quest } from '../models/quetes';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class QuestService{
private quests: Quest[]=[
  {
    date : 'semaine 0',
    type: 'hebdo',
    linkytb: 'https://www.youtube.com/embed/4UX7rbwlFJE?si=eYyoEFaW0htgC0Fh',
    lieux: 'Base de la résistance',
    description: ['Faire un emote de section', 'Ramasser 25 armes','toucher 2 adversaires avec imploseur thermique', 'ouvrir 5 coffres à Base de la Résistance' , 'Faire des dégâts avec les armes à distance'],
    
  },
  {
    date : 'Toutes les semaines',
    type: 'histoire',
    linkytb: 'https://www.youtube.com/embed/nToAB8wf7-s?si=WCxyatzMSpHMsl7l',
    lieux: 'Parler à TOUS les PNJ, sud de la ville des grenouille, vers l\'ancien repaire de Midas, Vers Dark Vador, Moses',
    description: ['Parler aux persos des lieux et faire leur quêtes','réparer le vaisseau', 'ramasser les journaux'],
    
  },
  {
    date : 'semaine 1',
    type: 'hebdo',
    linkytb: 'https://www.youtube.com/embed/81TG28_z_j4?si=u8URDirReaZhRkui',
    lieux: 'Les avant post',
    description: ['Se déguiser', 'Courrir sous l\'effet du Slap ',' Éliminer des adversaires HORS des lieux dits', 'Faire des dégâts en visant' , 'Ouvrir 10 coffres avant de prendre des dégâts'],
    
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