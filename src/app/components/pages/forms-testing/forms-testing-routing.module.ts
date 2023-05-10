import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsTestingComponent } from './forms-testing.component';

const routes: Routes = [{ path: '', component: FormsTestingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsTestingRoutingModule { }
