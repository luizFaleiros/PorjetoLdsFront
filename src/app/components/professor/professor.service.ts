import { AuthTokenService } from './../../account/shared/auth-token.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Professor } from './professor.model';
import { environment } from 'src/environments/environment';
import { PersonType } from '../aluno/person-type-enum';


@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private tokenService: AuthTokenService ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  get(): Observable<Professor[]>  {
    return this.http.get<Professor[]>(`${environment.urls.personList}?person-type= ${PersonType.PROFESSOR}`, {
      headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken())
    });
  }

  create(person: Professor): Observable<Professor> {
    return this.http.post<Professor>(environment.urls.personSave, person, {
      headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken())
    });
  }

  getById(id: number): Observable<Professor>{
    const url = `${environment.urls.personById}/${id}`;
    return this.http.get<Professor>(url, {
      headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken())
    });

  }

  update(person: Professor): Observable<Professor>{
    const url = `${environment.urls.personUpdate}/${person.id}`;
    return this.http.put<Professor>(url, person, {
      headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken())
    });
  }

  delete(professor: Professor) {
    console.log(professor.id);
    const url = `${environment.urls.personDelete}/${professor.id}`;
    return this.http.delete<Professor>(url, {
      headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken())
    });
  }
}
