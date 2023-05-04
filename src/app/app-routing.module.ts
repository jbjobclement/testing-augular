import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextPageComponent } from './components/pages/next-page/next-page.component';
import { TerminalPageComponent } from './components/pages/terminal-page/terminal-page.component';
import { FirstAuthGuardGuard } from './guards/first-auth-guard.guard';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
