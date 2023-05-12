import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevexpressRoutingModule } from './devexpress-routing.module';
import { DevexpressComponent } from './devexpress.component';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    DevexpressComponent
  ],
  imports: [
    CommonModule,
    DevexpressRoutingModule,
    DxButtonModule,
    DxDataGridModule 
  ]
})
export class DevexpressModule { }
