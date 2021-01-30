import { AuthTokenService } from './../../../account/shared/auth-token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Aluno } from '../aluno.model';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private tokenService: AuthTokenService ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }


  get(): Observable<Aluno[]>  {
    return this.http.get<Aluno[]>( environment.urls.personList, {
      headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken())
    });

  }

  create(person: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(environment.urls.personSave, person, {
      headers: new HttpHeaders().append('Authorization',this.tokenService.sendToken())
    });
  }

  getById(id: number): Observable<Aluno>{
    const url = `${environment.urls.personById}/${id}`;
    return this.http.get<Aluno>(url, {
      headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken())
    });

  }

  update(person: Aluno): Observable<Aluno>{
    const url = `${environment.urls.personUpdate}/${person.id}`;
    return this.http.put<Aluno>(url, person, {
      headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken())
    });
  }

  delete(id: number): Observable<Aluno>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Aluno>(url);
  }
}
