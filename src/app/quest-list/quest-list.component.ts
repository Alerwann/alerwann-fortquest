import { Component } from '@angular/core';
import { QuestService } from '../service/quetes.service';
import { Quest } from '../models/quetes';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-quest-list',
  imports: [ CommonModule, MatButtonModule,MatMenuModule],
  templateUrl: './quest-list.component.html',
  styleUrl: './quest-list.component.css'
})
export class QuestListComponent {

  quetes: Quest[]=[]
  quete!:Quest
  type!: string 
  choice: number=0
  filteredQuests: Quest[]=[]

  constructor(private queteService: QuestService, private sanitizer : DomSanitizer){}

  ngOnInit(): void {
      if(this.choice===0){
        this.filteredQuests=this.queteService.getAllQuest()
      }

    }
  
    onLinkClick(type:string){
   
      this.choice=1
      this.type=type
      this.filteredQuests = this.queteService.getQuestByType(this.type)
      if(this.filteredQuests.length===0){
        this.choice=2
      }

      
    }

getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
