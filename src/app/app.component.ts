import { Component } from '@angular/core';
import { Ser1Service } from './service/ser1.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailModel } from './modal/detail.modal';

@Component //decorator// 
({
  selector: 'app-root',    
  templateUrl: './app.component.html', // route html page
  styleUrls: ['./app.component.css']  // route css page
})
export class AppComponent {
  title = 'myproject';

  on : boolean = false

  // objectname : datatype = [{key : value},{},{}]
  studentList : any = [
    //first obejct
    {
      name : "mohd aamir",
      age : 23
    },
    {
      name : "mohd aamir",
      age : 23
    },
    {
      name : "mohd aamir",
      age : 23
    },
    {
      name : "mohd aamir",
      age : 23
    },
    {
      name : "mohd aamir",
      age : 23
    },
    {
      name : "mohd aamir",
      age : 23
    },
    {
      name : "mohd aamir",
      age : 23
    },

  ]
studentList2: any;

dataStore:any;

myForm! : FormGroup;

ObjectModel : DetailModel =  new DetailModel(); 

searchText :any
constructor(public _service: Ser1Service, public _fb: FormBuilder){
  this.myForm = this._fb.group({
    formname: ['', Validators.required],
    formemail: ['', Validators.required],
    formtitle: ['', Validators.required],
    formdepartment: ['', Validators.required],
    formposition: ['', Validators.required]
  })
}
ngOnInit(){
this._service.getData().subscribe((res:any)=>{
console.log(res,"get student data");
this.dataStore = res;
})
}

OnSubmit(){
  console.log(this.myForm.value)
  this.ObjectModel.name = this.myForm.value.formname
  this.ObjectModel.email = this.myForm.value.formemail
  this.ObjectModel.title = this.myForm.value.formtitle
  this.ObjectModel.department = this.myForm.value.formdepartment
  this.ObjectModel.position = this.myForm.value.formposition

  this._service.postData(this.ObjectModel).subscribe(res=>{
    console.log(res,"post detail");
    this.ngOnInit();
  })
}

OnDelete(formid:number){
  console.log(formid);
  
  this._service.deleteData(formid).subscribe(res=>{
    console.log(res, "delete data");
    this.ngOnInit();
  })
}

// OnEdit(formdata:any){
// console.log(formdata);
// this.myForm.patchValue({
//   formname : formdata.name,
//   formemail : formdata.email,
//   formtitle : formdata.title,
//   formdepartment : formdata.department,
//   formposition : formdata.position
// });

// }

OnEdit(row: any) {
  this.ObjectModel.id = row.id;
  this.myForm.controls['formname'].setValue(row.name);
  this.myForm.controls['formemail'].setValue(row.email);
  this.myForm.controls['formtitle'].setValue(row.title);
  this.myForm.controls['formdepartment'].setValue(row.department);
  this.myForm.controls['formposition'].setValue(row.position);
}

OnUpdate(){
  this.ObjectModel.name = this.myForm.value.formname
  this.ObjectModel.email = this.myForm.value.formemail
  this.ObjectModel.title = this.myForm.value.formtitle
  this.ObjectModel.department = this.myForm.value.formdepartment
  this.ObjectModel.position = this.myForm.value.formposition

  this._service.putData(this.ObjectModel, this.ObjectModel.id).subscribe(res=>{
   console.log(res, "data updated");
    this.ngOnInit();
  })
}
}
