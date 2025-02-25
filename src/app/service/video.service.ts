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
       
    ]

     getAllQuest():Video[]{
           return this.videos
       }

    getOnetypeQuest(type:string):Video[]{

        return this.videos.filter(video => video.type===type

        )

    }
}
