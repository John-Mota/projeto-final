import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardRoutes } from './projetos/dashboard/dashboard-routing.module';
import { CalculadoraRoutes } from './projetos/calculator/calculator.routing.module';
import { ConversorRoutes } from './projetos/conversor-de-moedas/conversor.routing.module';
import { JogoDaVelhaRoutes } from './projetos/jogo-da-velha/jogoDavelha.routing.module';
import { TasksRoutes } from './projetos/tasks/task.routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  ...DashboardRoutes,
  ...CalculadoraRoutes,
  ...ConversorRoutes,
  ...JogoDaVelhaRoutes,
  ...TasksRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
