import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professor } from '../professor.model';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-delete',
  templateUrl: './professor-delete.component.html',
  styleUrls: ['./professor-delete.component.css']
})
export class ProfessorDeleteComponent implements OnInit {

  professor: Professor | undefined

  constructor(private professorService: ProfessorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.professorService.readById(id).subscribe(professor => {
      this.professor = professor
    });
  }

  deleteProfessor(): void {
    this.professorService.delete(this.professor.id).subscribe(() => {
      this.professorService.showMessage('Dados do professor atualizado com sucesso!')
      this.router.navigate(['/professores']);
    });
  }

  cancel(): void {
    this.router.navigate(['/professores']);
  }

}









