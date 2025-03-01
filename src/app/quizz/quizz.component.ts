import { CommonModule,  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Quizz } from '../models/quizz';
import { QuizzService } from '../service/quizz.service';
import { FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-quizz',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {
 quizzs : Quizz[]=[]


 quizzform !: FormGroup
 result: number |null=null
 i:number=0
 reponsesUtilisateur: number[] = []; // Stocke les réponses de l'utilisateur
selectedIndex: number | null = null; 
 

 constructor(private quizzService: QuizzService){ }

 ngOnInit(): void {
   this.quizzs=this.quizzService.getAllQuest()
   

 }

 choisirReponse(indexReponse: number): void {
  this.selectedIndex =indexReponse
  this.reponsesUtilisateur[this.i] = indexReponse;
}

previous(){
if(this.i>0){
  this.i--
}
}

next(){  this.i++}

calculResultat(){
  let score=0

  this.reponsesUtilisateur.forEach((responses,index)=>{
    if(responses!==-1 && this.quizzs[index].choix[0].valide ){
      score++
    }
  })
this.result=score
}

reset(){
  this.i=0
  this.selectedIndex=null
  this.reponsesUtilisateur=[]
  this.result=null
}
}
