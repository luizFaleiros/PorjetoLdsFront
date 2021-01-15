import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor.model';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-read',
  templateUrl: './professor-read.component.html',
  styleUrls: ['./professor-read.component.css']
})
export class ProfessorReadComponent implements OnInit {

  professores: Professor[] = [];
  displayedColumns = ['firstName', 'lastName', 'email', 'action']

  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.professorService.get().subscribe(professores => {
      this.professores = professores;
    })
  }

}
