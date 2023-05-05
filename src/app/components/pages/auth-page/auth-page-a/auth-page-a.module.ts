import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageAComponent } from './auth-page-a.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthPageAComponent
  }
]

@NgModule({
  declarations: [
    AuthPageAComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthPageAModule { }
