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
  constructor(private tccService: TccService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      paramMap => this.getDetailedTcc(parseInt(paramMap.get('id') || '1')));
  }

  getDetailedTcc(tccId: number){
    this.tccService.detail(tccId).subscribe(tccdetail => this.tcc = tccdetail);
  }

}
