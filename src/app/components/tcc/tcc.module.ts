import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateTccComponent } from './components/create-tcc/create-tcc.component';
import { UpdateTccComponent } from './components/update-tcc/update-tcc.component';
import { ListarTccComponent } from './components/listar-tcc/listar-tcc.component';
import { TccDetalheComponent } from './components/tcc-detalhe/tcc-detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CreateTccComponent,
    UpdateTccComponent,
    ListarTccComponent,
    TccDetalheComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    CreateTccComponent,
    UpdateTccComponent,
    ListarTccComponent,
    TccDetalheComponent
  ]
})
export class TccModule { }
