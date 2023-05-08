import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextPageComponent } from './next-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NextPageComponent,
  }
]

@NgModule({
  declarations: [
    NextPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NextPageModule { }
