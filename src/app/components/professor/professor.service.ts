import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Professor } from './professor.model';


@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  baseUrl = "https://projeto-lds.herokuapp.com/person"

  token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYXVsb0BnbWFpbC5jb20iLCJleHAiOjE2MTA3NTc1NTV9.IgyQFis4Qu-ygf_hs2wEKqpT4M3SwtnDNjrdij0CffXVTtML5XRs_fXf_L7vWqKfb28ipaquTbmM02NjGqs2Pw';

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  get(): Observable<Professor[]>  {
    return this.http.get<Professor[]>( `${this.baseUrl}/list`, {
      headers: new HttpHeaders().append('Authorization', this.token)
    });
  }

  create(person: Professor): Observable<Professor> {
    return this.http.post<Professor>(`${this.baseUrl}/save`, person, {
      headers: new HttpHeaders().append('Authorization', this.token)
    });
  }

  getById(id: number): Observable<Professor>{
    const url = `${this.baseUrl}/get-by-id/${id}`;
    return this.http.get<Professor>(url, {
      headers: new HttpHeaders().append('Authorization', this.token)
    });
    
  }

  update(person: Professor): Observable<Professor>{
    const url = `${this.baseUrl}/${person.id}`;
    return this.http.put<Professor>(url, person, {
      headers: new HttpHeaders().append('Authorization', this.token)
    });
  }

  delete(id: number): Observable<Professor>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Professor>(url);
  }

}
