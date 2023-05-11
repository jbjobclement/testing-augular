import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsTestingRoutingModule } from './rxjs-testing-routing.module';
import { RxjsTestingComponent } from './rxjs-testing.component';


@NgModule({
  declarations: [
    RxjsTestingComponent
  ],
  imports: [
    CommonModule,
    RxjsTestingRoutingModule
  ]
})
export class RxjsTestingModule { }
