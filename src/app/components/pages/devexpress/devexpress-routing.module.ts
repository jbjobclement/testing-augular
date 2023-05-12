import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevexpressComponent } from './devexpress.component';

const routes: Routes = [{ path: '', component: DevexpressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevexpressRoutingModule { }
