import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminalPageComponent } from './components/pages/terminal-page/terminal-page.component';
import { FirstAuthGuardGuard } from './guards/first-auth-guard.guard';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'next-page',
    loadChildren: () => import("src/app/components/pages/next-page/next-page.module").then(m => m.NextPageModule),
  },
  {
    path: 'terminal',
    loadChildren: () => import("src/app/components/pages/terminal-page/terminal-page.module").then(m => m.TerminalPageModule),
    canActivate: [FirstAuthGuardGuard]
  },
  {
    path: 'terminal/:selected', component: TerminalPageComponent,
    canActivate: [FirstAuthGuardGuard]
  },
  {
    path: 'auth', 
    loadChildren: () => import("src/app/components/pages/auth-page/auth-page.module").then(m => m.AuthPageModule),
    data: {
      defaultData: "default data from route object",
    }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }