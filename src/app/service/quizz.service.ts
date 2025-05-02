import { Quizz } from './../models/quizz';

import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})

export class QuizzService{
    private quizzs: Quizz[]=[
        {   question : 'Combien de collab Fortnite a eu avec Star Wars?',
            choix: [
                {reponse:'1',
                valide:false
                },
                {reponse:'On ne compte plus',
                valide:true
                },
                {reponse:'0',
                valide:false
                },
            ]
        },
        {   question : 'Quels jours est celui de remise à 0 des quêtes ',
            choix: [
                {reponse:'mardi',
                valide:true
                },
                {reponse:'J\'en sais rien, je m\'en fou de quête',
                valide:true
                },
                {reponse:'dimanche',
                valide:true
                },
            ]
        },
        {   question : 'Est ce que tu es allé sur mes réseaux?',
            choix: [
                {reponse:'non',
                valide:false
                },
                {reponse:'je viens de là, la preuve je t\'envoi un DM twitter si j\'ai 5 sur 5',
                valide:true
                },
                {reponse:'Quoi tu as des réseaux?',
                valide:true
                },
            ]
        },   
        {   question : 'Quel Team viens d\'être sacré championne d\'Europe de Fortnite',
            choix: [
                {reponse:'M8',
                valide:true
                },
                {reponse:'HavoK',
                valide:true
                },
                {reponse:'Vitality',
                valide:false
                },
            ]
        },
        {   question : 'Epic adore t-il Dinsey?',
            choix: [
                {reponse:'Sérieux c\'est quoi cette question?',
                valide:true
                },
                {reponse:'Star wars revient encore et toujours et on peut lier notre compte',
                valide:true
                },
                {reponse:'Non c\'est trop violent pour que Disney',
                valide:false
                },
            ]
        },
        
       
    ]
    

   getAllQuest():Quizz[]{
       return this.quizzs
   } 
}