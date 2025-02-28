import { Video } from "../models/video.model";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class videoService{
    private videos : Video[]=[                               
        {
            linkytb: "https://youtube.com/embed/CEQ5FbU2VFM",
            Titres: 'Les loots secrets',
            type: 'astuce'
        },
        {   linkytb: "https://youtube.com/embed/LWox32bUZjg",
            Titres: 'Edit ',
            type: 'edit'
        },
        {
            linkytb: "https://youtube.com/embed/xx_3R2bTFNA",
            Titres: 'Mon premier coffre',
            type: 'drole'
        },
       {
            linkytb:"https://youtube.com/embed/Np3iIRS1s98?si=5ryl8KMleinCmJCX",
            Titres:'Le train sans problème et des loots d\'or',
            type:'astuce'
       },
       {
        linkytb:"https://www.youtube.com/embed/C54kvywQBVM?si=utVfyBl3C-t1zqXd" ,
        Titres:"Natmor et Wig font la trend",
        type:"edit"
       }

    ]

     getAllQuest():Video[]{
           return this.videos
       }

    getOnetypeQuest(type:string):Video[]{

        return this.videos.filter(video => video.type===type

        )

    }
}


