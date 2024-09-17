import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  reactiveForm!: FormGroup;
  submitted: boolean = false;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(4),
      ]],
    });
  }

  // get name() {
  //   return this.reactiveForm.get('name')!;
  // }


  get f(): { [key: string]: AbstractControl } {
    return this.reactiveForm.controls;
  }
  
  onSubmit(): void {
    this.submitted = true;

    if (this.reactiveForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.reactiveForm.value, null, 2));
  }

  validateNo(e:any) {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
  }

}
