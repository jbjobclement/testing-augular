import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularHttpTestingComponent } from './angular-http-testing.component';

const routes: Routes = [{ path: '', component: AngularHttpTestingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularHttpTestingRoutingModule { }
