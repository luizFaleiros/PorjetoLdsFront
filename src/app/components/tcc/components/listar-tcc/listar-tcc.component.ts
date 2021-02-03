import { TccService } from './../../services/tcc.service';
import { Component, OnInit } from '@angular/core';
import { TccModel } from '../models/Tcc.model';

@Component({
  selector: 'app-listar-tcc',
  templateUrl: './listar-tcc.component.html',
  styleUrls: ['./listar-tcc.component.css']
})
export class ListarTccComponent implements OnInit {

  trabalhos: TccModel[] = [];
  displayedColumns = ['nome', 'subject','action']

  constructor(private tccService: TccService) { }


  ngOnInit(): void {
    this.tccList();
  }

  tccList(){
    this.tccService.list().subscribe(tccs => this.trabalhos = tccs);
  }
}
