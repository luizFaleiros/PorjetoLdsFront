import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-read',
  templateUrl: './aluno-read.component.html',
  styleUrls: ['./aluno-read.component.css']
})
export class AlunoReadComponent implements OnInit {

  alunos: Aluno[] | undefined

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunoService.read().subscribe(alunos => {
      this.alunos = alunos
      console.log(alunos)
    })
  }

}
