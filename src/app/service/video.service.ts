import { Video } from "../models/video.model";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class videoService{
    private videos : Video[]=[                               
        

    ]

     getAllQuest():Video[]{
           return this.videos
       }

    getOnetypeQuest(type:string):Video[]{

        return this.videos.filter(video => video.type===type

        )

    }
}


