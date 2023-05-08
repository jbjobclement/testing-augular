import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: "a",
        loadChildren: () => import("./auth-page-a/auth-page-a.module").then(m => m.AuthPageAModule)
      },
      {
        path: "b",
        loadChildren: () => import("./auth-page-b/auth-page-b.module").then(m => m.AuthPageBModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthPageModule { }
