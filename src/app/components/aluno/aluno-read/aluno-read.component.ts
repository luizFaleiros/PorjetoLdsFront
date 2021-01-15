import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-read',
  templateUrl: './aluno-read.component.html',
  styleUrls: ['./aluno-read.component.css']
})
export class AlunoReadComponent implements OnInit {

  alunos: Aluno[] = [];
  displayedColumns = ['firstName', 'lastName', 'code', 'email', 'action']

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunoService.get().subscribe(alunos => {
      this.alunos = alunos;
    })
  }

}
