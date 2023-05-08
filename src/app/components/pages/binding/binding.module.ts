import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindingRoutingModule } from './binding-routing.module';
import { BindingComponent } from './binding.component';


@NgModule({
  declarations: [
    BindingComponent
  ],
  imports: [
    CommonModule,
    BindingRoutingModule
  ]
})
export class BindingModule { }
