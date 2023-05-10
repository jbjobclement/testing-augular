import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormComponent } from './dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
@NgModule({
  declarations: [
    DynamicFormComponent,
  ],
  imports: [
    CommonModule,
    DynamicFormRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DynamicFormModule { }
