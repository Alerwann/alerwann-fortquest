import { Component, OnInit } from '@angular/core';
import { Quest } from '../models/quetes';
import { QuestService } from '../service/quetes.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-main-accueil',
  imports: [CommonModule, ],
  templateUrl: './main-accueil.component.html',
  styleUrl: './main-accueil.component.css'
})
export class MainAccueilComponent implements OnInit {
quests!: Quest[];
quest!: Quest;
linksafe !: SafeHtml;

constructor(private questservice: QuestService, private sanitizer : DomSanitizer){}



ngOnInit(): void {
  this.quests=this.questservice.getAllQuest()

}

}
