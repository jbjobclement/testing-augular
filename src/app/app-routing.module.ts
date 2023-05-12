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
  { path: 'angular-http-testing', loadChildren: () => import('./components/pages/angular-http-testing/angular-http-testing.module').then(m => m.AngularHttpTestingModule) },
  { path: 'binding', loadChildren: () => import('./components/pages/binding/binding.module').then(m => m.BindingModule) },
  { path: 'pipes', loadChildren: () => import('./components/pages/pipes/pipes.module').then(m => m.PipesModule) },
  { path: 'forms-testing', loadChildren: () => import('./components/pages/forms-testing/forms-testing.module').then(m => m.FormsTestingModule) },
  { path: 'dynamic-form', loadChildren: () => import('./components/pages/dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule) },
  { path: 'devexpress', loadChildren: () => import('./components/pages/devexpress/devexpress.module').then(m => m.DevexpressModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }