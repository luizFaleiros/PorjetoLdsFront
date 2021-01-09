import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Professor } from './professor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  baseUrl = "http://localhost:3001/professores"

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.baseUrl, professor);
  }

  read(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.baseUrl);
  }

  readById(id: string): Observable<Professor>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Professor>(url);
  }

  update(professor: Professor): Observable<Professor>{
    const url = `${this.baseUrl}/${professor.id}`;
    return this.http.put<Professor>(url, professor);
  }

  delete(id: number): Observable<Professor>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Professor>(url);
  }

}
