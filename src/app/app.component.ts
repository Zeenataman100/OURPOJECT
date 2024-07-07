import { Component } from '@angular/core';

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
}
