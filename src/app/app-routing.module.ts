import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextPageComponent } from './components/pages/next-page/next-page.component';
import { TerminalPageComponent } from './components/pages/terminal-page/terminal-page.component';

const routes: Routes = [
  {
    path: 'next-page', component: NextPageComponent,
  },
  {
    path: 'terminal/:selected', component: TerminalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
