import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AlunoCrudComponent } from './views/aluno-crud/aluno-crud.component';
import { TrabalhoCrudComponent } from './views/trabalho-crud/trabalho-crud.component';
import { MeusDadosComponent } from './views/meus-dados/meus-dados.component';
import { CalendarioComponent } from './views/calendario/calendario.component';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';
import { AlunoUpdateComponent } from './components/aluno/aluno-update/aluno-update.component';
import { AlunoDeleteComponent } from './components/aluno/aluno-delete/aluno-delete.component';
import { ProfessorCrudComponent } from './views/professor-crud/professor-crud.component';
import { ProfessorCreateComponent } from './components/professor/professor-create/professor-create.component';
import { ProfessorUpdateComponent } from './components/professor/professor-update/professor-update.component';
import { ProfessorDeleteComponent } from './components/professor/professor-delete/professor-delete.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'alunos',
        component: AlunoCrudComponent
      },
      {
        path: "professores",
        component: ProfessorCrudComponent
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
      },
      {
        path: "alunos/create",
        component: AlunoCreateComponent
      },
      {
        path: "alunos/update/:id",
        component: AlunoUpdateComponent
      },
      {
        path: "alunos/delete/:id",
        component: AlunoDeleteComponent
      },
      {
        path: "professores/create",
        component: ProfessorCreateComponent
      },
      {
        path: "professores/update/:id",
        component: ProfessorUpdateComponent
      },
      {
        path: "professores/delete/:id",
        component: ProfessorDeleteComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
