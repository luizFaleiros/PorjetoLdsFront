import { Component, OnInit } from '@angular/core';
import { PersonType } from '../person-type-enum';
import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';
import { Professor } from '../professor.model';


@Component({
  selector: 'app-professor-create',
  templateUrl: './professor-create.component.html',
  styleUrls: ['./professor-create.component.css']
})
export class ProfessorCreateComponent implements OnInit {

  professor: Professor = {
    id: '',
    name: '',
    lastName: '',
    cpf: null as any,
    personType: PersonType.PROFESSOR
  }

  constructor(private professorService: ProfessorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProfessor(): void{
    this.professorService.create(this.professor).subscribe(() => {
      this.professorService.showMessage('Professor criado com sucesso!')
      this.router.navigate(['/professores'])
    })
    
  }

  cancel(): void{
    this.router.navigate(['/professores'])
  }

}








