import { TccModule } from './components/tcc/tcc.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { AlunoCrudComponent } from './views/aluno-crud/aluno-crud.component';
import { ProfessorCrudComponent } from './views/professor-crud/professor-crud.component';
import { TrabalhoCrudComponent } from './views/trabalho-crud/trabalho-crud.component';
import { CalendarioComponent } from './views/calendario/calendario.component';
import { MeusDadosComponent } from './views/meus-dados/meus-dados.component';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlunoReadComponent } from './components/aluno/aluno-read/aluno-read.component';
import { MatTableModule } from '@angular/material/table';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { AlunoUpdateComponent } from './components/aluno/aluno-update/aluno-update.component';
import { AlunoDeleteComponent } from './components/aluno/aluno-delete/aluno-delete.component';
import { ProfessorCreateComponent } from './components/professor/professor-create/professor-create.component';
import { ProfessorDeleteComponent } from './components/professor/professor-delete/professor-delete.component';
import { ProfessorReadComponent } from './components/professor/professor-read/professor-read.component';
import { ProfessorUpdateComponent } from './components/professor/professor-update/professor-update.component';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';



registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AlunoCrudComponent,
    TrabalhoCrudComponent,
    CalendarioComponent,
    MeusDadosComponent,
    AlunoCreateComponent,
    AlunoReadComponent,
    AlunoUpdateComponent,
    AlunoDeleteComponent,
    ProfessorCreateComponent,
    ProfessorDeleteComponent,
    ProfessorReadComponent,
    ProfessorUpdateComponent,
    ProfessorCrudComponent,
    LoginComponent,
    AuthenticationComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    TccModule


  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
