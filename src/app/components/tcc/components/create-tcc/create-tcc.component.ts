import { TccService } from './../../services/tcc.service';
import { Aluno } from './../../../aluno/aluno.model';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from 'src/app/components/aluno/aluno.service';
import { TccModel } from '../models/Tcc.model';

@Component({
  selector: 'app-create-tcc',
  templateUrl: './create-tcc.component.html',
  styleUrls: ['./create-tcc.component.css']
})
export class CreateTccComponent implements OnInit {
  tccForm: FormGroup;
  studants: Aluno[];
  constructor(private formBuilder: FormBuilder, private alunoService: AlunoService, private tccService: TccService) {
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
      subject: ['', [Validators.required, Validators.minLength(2)]],
      studants: [this.studants, [Validators.required]]
    });
    this.fillStudants();
  }


  fillStudants(){
    return this.alunoService.get();
  }


  createTCC(){
    const tcc = this.castToTccModel(this.tccForm.value);
    this.tccService.save(tcc);
  }
  castToTccModel(value: any): TccModel {
    return this.tccForm.value;
  }


}
