import { AlunoUpdateComponent } from './aluno-update/aluno-update.component';
import { AlunoReadComponent } from './aluno-read/aluno-read.component';
import { AlunoDeleteComponent } from './aluno-delete/aluno-delete.component';
import { AlunoCreateComponent } from './aluno-create/aluno-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ AlunoCreateComponent, AlunoDeleteComponent, AlunoReadComponent, AlunoUpdateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AlunoModule { }
