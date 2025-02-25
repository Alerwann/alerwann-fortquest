import { Quizz } from './../models/quizz';

import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})

export class QuizzService{
    private quizzs: Quizz[]=[
        {   question : 'Quel héro doit aller chercher Jade dans un portail?',
            reponse: [
                {reponse:'Kendo',
                valide:false
                },
                {reponse:'Daigo',
                valide:true
                },
                {reponse:'Hope',
                valide:false
                },
            ]
        },
        {   question : 'Quel est le dernier chapitre pendant lequel on pouvait avoir des armes exotiques en battle royal?',
            reponse: [
                {reponse:'2',
                valide:false
                },
                {reponse:'3',
                valide:false
                },
                {reponse:'4',
                valide:true
                },
            ]
        },
        {   question : 'Combien de type de skin banane existe?',
            reponse: [
                {reponse:'5',
                valide:false
                },
                {reponse:'10',
                valide:false
                },
                {reponse:'15',
                valide:true
                },
            ]
        },   
        {   question : 'Combien de passe de combat sont compris dans l\'abonnement Frotnite Crew',
            reponse: [
                {reponse:'Tous',
                valide:true
                },
                {reponse:'1',
                valide:false
                },
                {reponse:'2',
                valide:false
                },
            ]
        },
        {   question : 'Au début de Fortnite, quel était l\' unique mode de jeu?',
            reponse: [
                {reponse:'Battle Royal',
                valide:false
                },
                {reponse:'Sauver le monde',
                valide:true
                },
                {reponse:'0 build',
                valide:false
                },
            ]
        },
        
       
    ]
    

   getAllQuest():Quizz[]{
       return this.quizzs
   } 
}