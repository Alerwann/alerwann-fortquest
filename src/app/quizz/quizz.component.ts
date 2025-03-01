import { CommonModule,  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Quizz } from '../models/quizz';
import { QuizzService } from '../service/quizz.service';
import { FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-quizz',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css',
  animations: [
    trigger('slideOut', [
      state('visible', style({ transform: 'translateX(0)' })), // Position initiale
      state('hidden', style({ transform: 'translateX(-200%)' })), // Déplacement vers la droite
      state('show', style({ transform: 'translateX(200%)' })),
      transition('visible => hidden', animate('400ms ease-out')), // Animation vers la droite
      // transition('hidden => visible', animate('600ms ease-in')), // Animation de retour
      transition('show => visible', animate('400ms ease-in')), // Animation d'aller'
      transition('hidden => visible', animate('400ms ease-in')), // Animation d'aller'
      transition('visible =>show',animate('400ms ease-in') )

    ]),
 
  ],
})
export class QuizzComponent implements OnInit {
 quizzs : Quizz[]=[]


 quizzform !: FormGroup
 result: number |null=null
 i:number=0
 reponsesUtilisateur: number[] = []; // Stocke les réponses de l'utilisateur
selectedIndex: number | null = null; 
animationState = 'visible'; // État initial de l'animation
returnAnimation='visiblep'
isAnimating:boolean | undefined
 

 constructor(private quizzService: QuizzService){ }

 ngOnInit(): void {
   this.quizzs=this.quizzService.getAllQuest()
   

 }

choisirReponse(indexReponse: number): void {
  this.selectedIndex =indexReponse
  this.reponsesUtilisateur[this.i] = indexReponse;
}

previous(){
  this.isAnimating=true
  this.animationState='show'
  setTimeout(()=>{
    if(this.i>0){
      this.i--
    
    }
    this.selectedIndex=this.reponsesUtilisateur[this.i]

    this.animationState='hidden'

  
  },300)
  setTimeout(()=>{
    this.animationState='visible'
  },300)



}

next() {
  // Désactiver le bouton "Suivant" pendant l'animation
  this.isAnimating = true;

  // Déclencher l'animation de sortie
  this.animationState = 'hidden';

  // Attendre que l'animation soit terminée (500 ms)
  setTimeout(() => {
    // Passer à la question suivante
   
    if (this.i < this.quizzs.length - 1) {
      this.i++;
    }
  

    // Réinitialiser l'index sélectionné
    this.selectedIndex = null;

    // Réactiver l'animation d'entrée
    this.animationState = 'show';


    this.isAnimating = false;
  }, 100); // Durée de l'animation

  setTimeout(()=>{
    this.animationState='visible'
  },100)
}

calculResultat(){
  let score=0

  this.reponsesUtilisateur.forEach((responses,index)=>{
    if(responses!==-1 && this.quizzs[index].choix[responses].valide ){
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
