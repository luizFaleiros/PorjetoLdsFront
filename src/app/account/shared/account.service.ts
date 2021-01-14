import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any){
    const result = await this.http.post<any>('${environment.api}/auth/login', user).toPromise();
    if(result && result.access_token) {
      window.localStorage.setItem('token', result.acces_token);
      return true;
    }

    return false;
  }

  
}
