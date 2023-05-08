import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextPageComponent } from './components/pages/next-page/next-page.component';
import { TerminalPageComponent } from './components/pages/terminal-page/terminal-page.component';
import { FirstAuthGuardGuard } from './guards/first-auth-guard.guard';
import { AuthPageComponent } from './components/pages/auth-page/auth-page.component';
import { AuthPageAComponent } from './components/pages/auth-page/auth-page-a/auth-page-a.component';
import { AuthPageBComponent } from './components/pages/auth-page/auth-page-b/auth-page-b.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'next-page', component: NextPageComponent,
  },
  {
    path: 'terminal', component: TerminalPageComponent,
    canActivate: [FirstAuthGuardGuard]
  },
  {
    path: 'terminal/:selected', component: TerminalPageComponent,
    canActivate: [FirstAuthGuardGuard]
  },
  {
    path: 'auth', 
    loadChildren: () => import("src/app/components/pages/auth-page/auth-page.module").then(m => m.AuthPageModule),
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
