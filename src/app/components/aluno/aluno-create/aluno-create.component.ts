import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { PersonType } from '../person-type-enum';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  aluno: Aluno = {
    id: '',
    name: '',
    lastName: '',
    cpf: null as any,
    personType: PersonType.STUDANT
    
  }

  constructor(private alunoService: AlunoService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createAluno(): void{
    this.alunoService.create(this.aluno).subscribe(() => {
      this.alunoService.showMessage('Aluno criado com sucesso!')
      this.router.navigate(['/alunos'])
    })
    
  }

  cancel(): void{
    this.router.navigate(['/alunos'])
  }

}
