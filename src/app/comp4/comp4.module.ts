import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Comp4RoutingModule } from './comp4-routing.module';
import { Comp4Component } from './comp4.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Comp4Component
  ],
  imports: [
    CommonModule,
    Comp4RoutingModule,
    ReactiveFormsModule
  ]
})
export class Comp4Module { }
