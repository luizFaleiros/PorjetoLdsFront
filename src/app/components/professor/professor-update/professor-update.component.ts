import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professor } from '../professor.model';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-update',
  templateUrl: './professor-update.component.html',
  styleUrls: ['./professor-update.component.css']
})
export class ProfessorUpdateComponent implements OnInit {

  professor: Professor | undefined

  constructor(private professorService: ProfessorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.professorService.readById(id).subscribe(professor => {
      this.professor = professor
    });
  }

  updateProfessor(): void {
    this.professorService.update(this.professor).subscribe(() => {
      this.professorService.showMessage('Dados do professor atualizado com sucesso!')
      this.router.navigate(['/professores']);
    });
  }

  cancel(): void {
    this.router.navigate(['/professores']);
  }

}
