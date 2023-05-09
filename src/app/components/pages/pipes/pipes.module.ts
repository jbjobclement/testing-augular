import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { TestingPipe } from 'src/app/pipes/testing.pipe';

@NgModule({
  declarations: [
    PipesComponent,
    TestingPipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
