import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './Login.interface';
import { environment } from "./../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public login(user: Login) {
    return this.http
               .post<Login>(environment.urls.login, user,
                {
                  observe: 'response',
                  responseType: 'text'
                })
}


}
