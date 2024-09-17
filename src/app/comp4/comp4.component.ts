import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  subjects:any;
  subjectsForm!:FormGroup;
  constructor(public fb: FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.subjectsForm = this.fb.group({
      SUBJECTS: this.fb.array([
    
      ])
    })
  }

  get SUBJECTS() : FormArray{
    return this.subjectsForm.get("SUBJECTS") as FormArray
  }

  addSubject(){
  //  skill
  }

}
