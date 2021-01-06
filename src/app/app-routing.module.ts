import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AlunoCrudComponent } from './views/aluno-crud/aluno-crud.component';
import { TrabalhoCrudComponent } from './views/trabalho-crud/trabalho-crud.component';
import { MeusDadosComponent } from './views/meus-dados/meus-dados.component';
import { CalendarioComponent } from './views/calendario/calendario.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "alunos",
    component: AlunoCrudComponent
  },
  {
    path: "trabalhos",
    component: TrabalhoCrudComponent
  },
  {
    path: "calendario",
    component: CalendarioComponent
  },
  {
    path: "meusdados",
    component: MeusDadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
