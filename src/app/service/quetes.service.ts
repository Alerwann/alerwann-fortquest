import { Quest } from '../models/quetes';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class QuestService{
private quests: Quest[]=[
//   {
//     date : 'string',
//     type: 'semaine',
//     linkytb: 'http://youtube.com',
//     lieux: 'string;',
//     description: ['ghdsht'],
    
//   }
    
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