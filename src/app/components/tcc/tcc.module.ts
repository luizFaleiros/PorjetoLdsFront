import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateTccComponent } from './components/create-tcc/create-tcc.component';
import { UpdateTccComponent } from './components/update-tcc/update-tcc.component';
import { ListarTccComponent } from './components/listar-tcc/listar-tcc.component';
import { TccDetalheComponent } from './components/tcc-detalhe/tcc-detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

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
    BrowserModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatListModule,
    RouterModule,
    MatTableModule

  ],
  exports: [
    CreateTccComponent,
    UpdateTccComponent,
    ListarTccComponent,
    TccDetalheComponent
  ]
})
export class TccModule { }
