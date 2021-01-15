import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-update',
  templateUrl: './aluno-update.component.html',
  styleUrls: ['./aluno-update.component.css']
})
export class AlunoUpdateComponent implements OnInit {

  aluno = {} as Aluno;

  constructor(private alunoService: AlunoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   /* const id = this.route.snapshot.paramMap.get('id')
    this.alunoService.getById(id).subscribe(aluno => {
      this.aluno = aluno
    });*/
  }

  updateAluno(): void {
    this.alunoService.update(this.aluno).subscribe(() => {
      this.alunoService.showMessage('Dados do aluno atualizado com sucesso!')
      this.router.navigate(['/alunos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/alunos']);
  }

}
