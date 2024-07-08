import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ser1Service {

  api : any = "http://localhost:3000/studentList"

  constructor(public http : HttpClient ) { }

  ngOnInit(){
   
  }

  public getData(){
    return this.http.get(this.api).pipe(map((res:any)=>{
      return res;
    }))
  }
  public postData(data:any){
    return this.http.post(this.api,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  public putData(updatedata:any,id: number){
    console.log(id,updatedata);
    
    return this.http.put(`http://localhost:3000/studentList/${id}`,updatedata)
  }
  public deleteData(id: number){    
    return this.http.delete(`http://localhost:3000/studentList/${id}`)
  }
}
