import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageBComponent } from './auth-page-b.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthPageBComponent
  }
]

@NgModule({
  declarations: [
    AuthPageBComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthPageBModule { }
