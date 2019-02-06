import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { GraficoComponent } from './grafico/grafico.component';
import { routing } from './app.routes';
import { ChartistModule } from 'ng-chartist';


@NgModule({
  declarations: [
    AppComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ChartistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
