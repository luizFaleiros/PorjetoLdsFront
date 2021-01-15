import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-delete',
  templateUrl: './aluno-delete.component.html',
  styleUrls: ['./aluno-delete.component.css']
})
export class AlunoDeleteComponent implements OnInit {

  aluno: Aluno | undefined

  constructor(private alunoService: AlunoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   /* const id = this.route.snapshot.paramMap.get('id')
    this.alunoService.getById(id).subscribe(aluno => {
      this.aluno = aluno
    });*/
  }

 /* deleteAluno(): void {

     this.alunoService.delete(this.aluno.id).subscribe(() => {
     this.alunoService.showMessage('Dados do aluno atualizado com sucesso!')
     this.router.navigate(['/alunos']);
    });
  }*/

  cancel(): void {
    this.router.navigate(['/alunos']);
  }

}




