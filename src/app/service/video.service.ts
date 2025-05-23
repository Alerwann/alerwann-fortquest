import { Video } from "../models/video.model";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class videoService{
    private videos : Video[]=[        
        
        {
            linkytb: 'https://youtu.be/F0Z88BGepo0?si=0I1IlkD5jpqeeiDd',
            Titres: 'je suis pire que les bots',
            type: 'drole'
        },

        {
           linkytb: 'https://youtu.be/HMMjx7Cxbew?si=cRo1853YKs330B9I',
           Titres: 'Ce cacher de dark Vador',
           type:'astuce'
        },

        {
           linkytb: 'https://youtu.be/notascu0Msc?si=3AA-4eCdDgTNy7d2',
           Titres: 'Toutes les cabines',
           type:'astuce'
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


