import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularHttpTestingRoutingModule } from './angular-http-testing-routing.module';
import { AngularHttpTestingComponent } from './angular-http-testing.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AngularHttpTestingComponent
  ],
  imports: [
    CommonModule,
    AngularHttpTestingRoutingModule,
    FormsModule
  ]
})
export class AngularHttpTestingModule { }
