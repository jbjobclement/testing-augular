import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenNameDirective } from 'src/app/directives/forbidden-name.directive';
import { AsyncValidatorDirective } from 'src/app/directives/async-validator.directive';
import { FormComponent } from 'src/app/components/organisms/form/form.component';
import { QuestionComponent } from 'src/app/components/molecules/question/question.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ForbiddenNameDirective,
    AsyncValidatorDirective,
    FormComponent,
    QuestionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ForbiddenNameDirective,
    AsyncValidatorDirective,
    FormComponent,
    QuestionComponent
  ]
})
export class SharedModule { }
