import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTccComponent } from './components/create-tcc/create-tcc.component';
import { UpdateTccComponent } from './components/update-tcc/update-tcc.component';
import { ListarTccComponent } from './components/listar-tcc/listar-tcc.component';
import { TccDetalheComponent } from './components/tcc-detalhe/tcc-detalhe.component';



@NgModule({
  declarations: [CreateTccComponent, UpdateTccComponent, ListarTccComponent, TccDetalheComponent],
  imports: [
    CommonModule
  ]
})
export class TccModule { }
