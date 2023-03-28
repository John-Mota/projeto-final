import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { CalculatorModule } from './projetos/calculator';
import { ConversorModule } from './projetos/conversor-de-moedas/conversor/conversor.module';
import { DashboardModule } from './projetos/dashboard/dashboard.module';
import { JogoDaVelhaModule } from './projetos/jogo-da-velha/jogo-da-velha.module';
import { TasksModule } from './projetos/tasks/tasks.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CalculatorModule,
    ConversorModule,
    DashboardModule,
    JogoDaVelhaModule,
    TasksModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
