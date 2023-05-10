import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenNameDirective } from 'src/app/directives/forbidden-name.directive';
import { AsyncValidatorDirective } from 'src/app/directives/async-validator.directive';



@NgModule({
  declarations: [
    ForbiddenNameDirective,
    AsyncValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ForbiddenNameDirective,
    AsyncValidatorDirective
  ]
})
export class SharedModule { }
