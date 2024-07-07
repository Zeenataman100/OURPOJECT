import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Comp3RoutingModule } from './comp3-routing.module';
import { Comp3Component } from './comp3.component';


@NgModule({
  declarations: [
    Comp3Component
  ],
  imports: [
    CommonModule,
    Comp3RoutingModule
  ]
})
export class Comp3Module { }
