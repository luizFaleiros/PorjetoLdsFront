import { FormGroup, FormBuilder } from '@angular/forms';
import { FilesTccModel } from './../models/files-tcc.model';
import { TccResponseModel } from './../models/tcc-response.model';
import { TccModel } from './../models/tcc.model';
import { TccService } from './../../services/tcc.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tcc-detalhe',
  templateUrl: './tcc-detalhe.component.html',
  styleUrls: ['./tcc-detalhe.component.css']
})
export class TccDetalheComponent implements OnInit {

  tcc: TccResponseModel = {};
  form: FormGroup;
  error: string;
  tccId: number;
  uploadResponse = { status: '', message: '', filePath: '' };

  constructor(private tccService: TccService, private route: ActivatedRoute, private formBuidler: FormBuilder) {
    this.route.paramMap.subscribe(
      paramMap => {
        this.tccId = parseInt(paramMap.get('id') || '1');
        this.getDetailedTcc(this.tccId);
      });

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      paramMap => {
        this.tccId = parseInt(paramMap.get('id') || '1');
        this.getDetailedTcc(this.tccId);
      });

      this.form = this.formBuidler.group({
        avatar: ['']
      });
  }

  getDetailedTcc(tccId: number){
    this.tccService.detail(tccId).subscribe(tccdetail => this.tcc = tccdetail);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.controls.avatar.value);

    this.tccService.upload(formData, this.tccId).subscribe(
      (res) => this.tcc = res,
      (err) => this.error = err
    );
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.controls.avatar.setValue(file);
    }
  }

}
