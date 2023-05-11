import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsTestingComponent } from './rxjs-testing.component';

const routes: Routes = [{ path: '', component: RxjsTestingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsTestingRoutingModule { }
