import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextComponent } from './components/organisms/next/next.component';
import { TerminalComponent } from './components/organisms/terminal/terminal.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    NextComponent,
    TerminalComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
