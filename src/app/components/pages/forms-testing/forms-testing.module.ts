import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsTestingRoutingModule } from './forms-testing-routing.module';
import { FormsTestingComponent } from './forms-testing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForbiddenNameDirective } from 'src/app/directives/forbidden-name.directive';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [
    FormsTestingComponent,
  ],
  imports: [
    CommonModule,
    FormsTestingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    ForbiddenNameDirective
  ]
})
export class FormsTestingModule { }
