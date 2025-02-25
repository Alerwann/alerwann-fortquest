import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Video } from '../models/video.model';
import { videoService } from '../service/video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  imports: [CommonModule, MatButtonModule, ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent implements OnInit {

  videos:Video[]=[]
  filterdvideo: Video[]=[]
  constructor(private videoservice: videoService, private sanitizer : DomSanitizer){}

 ngOnInit(): void {
   this.filterdvideo=this.videoservice.getAllQuest()
 }
 getSafeUrl(url: string): SafeResourceUrl {
     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
   }

   Onclick(type:string):void{
    if(type==='all'){
      this.filterdvideo=this.videoservice.getAllQuest()
    }else this.filterdvideo=this.videoservice.getOnetypeQuest(type)



   }
}
