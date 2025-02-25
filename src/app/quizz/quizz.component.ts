import { CommonModule,  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Quizz } from '../models/quizz';
import { QuizzService } from '../service/quizz.service';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { FormControl } from '@angular/forms';
import{ MatButton} from '@angular/material/button';

@Component({
  selector: 'app-quizz',
  imports: [CommonModule, ReactiveFormsModule, MatListModule, MatRadioModule, MatButton],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {
 quizzs : Quizz[]=[]


 quizzform !: FormGroup
 result: number |undefined=undefined
 responseControls: FormControl[] =[]

 constructor(private quizzService: QuizzService,private FormBuilder : FormBuilder){
  this.quizzform=this.FormBuilder.group({})
 }

 ngOnInit(): void {
   this.quizzs=this.quizzService.getAllQuest()
   this.initFormControls();

 }


initFormControls() {
  this.responseControls = this.quizzs.map(() => new FormControl(null, Validators.required));
}

onSubmit(){
  let score=0;
  

  this.quizzs.forEach((quizz,index)=>{
    const selectedReponse =this.responseControls[index].value;
    console.log(selectedReponse)
    if(selectedReponse===true){
      score++;
      
    }
  });
  
  this.result=score
  


}

resetQuizz(){
  this.responseControls.forEach(control => control.reset());
  this.result=undefined

}
}
