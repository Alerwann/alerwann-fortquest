import { Video } from "../models/video.model";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class videoService{
    private videos : Video[]=[        
        
        {
            linkytb: 'https://www.youtube.com/embed/F0Z88BGepo0',
            Titres: 'je suis pire que les bots',
            type: 'drole'
        },

        {
           linkytb: 'https://www.youtube.com/embed/HMMjx7Cxbew',
           Titres: 'Ce cacher de dark Vador',
           type:'astuce'
        },

        {
           linkytb: 'https://www.youtube.com/embed/notascu0Msc',
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


