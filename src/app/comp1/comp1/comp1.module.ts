import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Comp1RoutingModule } from './comp1-routing.module';
import { Comp1Component } from './comp1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Comp1Component
  ],
  imports: [
    CommonModule,
    Comp1RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Comp1Module { }
