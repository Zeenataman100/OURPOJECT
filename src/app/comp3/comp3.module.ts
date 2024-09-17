import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Comp3RoutingModule } from './comp3-routing.module';
import { Comp3Component } from './comp3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Comp3Component
  ],
  imports: [
    CommonModule,
    Comp3RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Comp3Module { }
