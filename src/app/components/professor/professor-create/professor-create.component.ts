import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';
import { Professor } from '../professor.model';
import { PersonType } from '../../aluno/person-type-enum';


@Component({
  selector: 'app-professor-create',
  templateUrl: './professor-create.component.html',
  styleUrls: ['./professor-create.component.css']
})
export class ProfessorCreateComponent implements OnInit {

  //professor = {} as Professor
  professor: Professor = {
    id: 0,

    lastName: '',
    firstName: '',
    email: '',
    password: '',
    cpf: '',
    personType: PersonType.PROFESSOR
    
  }

  constructor(private professorService: ProfessorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProfessor(): void{
    //this.professor.personType=PersonType.PROFESSOR
    this.professorService.create(this.professor).subscribe(() => {
      this.professorService.showMessage('Professor criado com sucesso!')
      this.router.navigate(['/professores'])
    })

  }

  cancel(): void{
    this.router.navigate(['/professores'])
  }

}








