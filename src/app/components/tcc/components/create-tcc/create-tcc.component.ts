import { TccModel } from './../models/tcc.model';
import { TccService } from './../../services/tcc.service';
import { Aluno } from './../../../aluno/aluno.model';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from 'src/app/components/aluno/aluno.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-tcc',
  templateUrl: './create-tcc.component.html',
  styleUrls: ['./create-tcc.component.css']
})
export class CreateTccComponent implements OnInit {
  tccForm: FormGroup;
  studants: Aluno[] = [];
  constructor(private formBuilder: FormBuilder, private alunoService: AlunoService, private tccService: TccService, private router: Router) {
    this.fillStudants().subscribe(
      alunos => this.studants = alunos
    );
   }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.tccForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      subjects: ['', [Validators.required, Validators.minLength(2)]],
      studants: [this.studants]
    });
    this.fillStudants();
  }


  fillStudants(){
    return this.alunoService.get();
  }


  createTCC(){
    const tcc = this.castToTccModel(this.tccForm.value);
    this.tccService.save(tcc).subscribe( resp =>
        this.router.navigate(['trabalhos/lista/'])
      );
  }

  castToTccModel(value: any): TccModel {
    return {
      name: value.name,
      studants: value.studants,
      subjects: value.subjects
    };
  }


}
