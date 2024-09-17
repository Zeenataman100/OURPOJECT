import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp3Component } from './comp3.component';

const routes: Routes = [{ path: 'formarray', component: Comp3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Comp3RoutingModule { }
