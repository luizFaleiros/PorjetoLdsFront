import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Professor } from './professor.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  //baseUrl = "https://projeto-lds.herokuapp.com/person"

  //token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYXVsb0BnbWFpbC5jb20iLCJleHAiOjE2MTA3NTc1NTV9.IgyQFis4Qu-ygf_hs2wEKqpT4M3SwtnDNjrdij0CffXVTtML5XRs_fXf_L7vWqKfb28ipaquTbmM02NjGqs2Pw';

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  get(): Observable<Professor[]>  {
    return this.http.get<Professor[]>( environment.urls.personList, {
      headers: new HttpHeaders().append('Authorization', this.gettoken())
    });
  }

  create(person: Professor): Observable<Professor> {
    return this.http.post<Professor>(environment.urls.personSave, person, {
      headers: new HttpHeaders().append('Authorization', this.gettoken())
    });
  }

  getById(id: number): Observable<Professor>{
    const url = `${environment.urls.personById}/${id}`;
    return this.http.get<Professor>(url, {
      headers: new HttpHeaders().append('Authorization', this.gettoken())
    });
    
  }

  update(person: Professor): Observable<Professor>{
    const url = `${environment.urls.personUpdate}/${person.id}`;
    return this.http.put<Professor>(url, person, {
      headers: new HttpHeaders().append('Authorization', this.gettoken())
    });
  }

  // delete(id: number): Observable<Professor>{
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.delete<Professor>(url);
  // }

  gettoken(): string {
    return localStorage.getItem("token") || '';
  }

}
