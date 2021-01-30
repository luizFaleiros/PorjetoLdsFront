import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  public getToken(): string {
    return localStorage.getItem('token') || '';
  }

  public decodePayloadJWT(): any {
    try {
      return jwt_decode(this.getToken());
    } catch (Error) {
      return null;
    }
  }

  public setToken(token: string){
      token = token.substr(7);
      localStorage.setItem('token', token);
  }

  public sendToken(): string{
    return `Bearer ${this.getToken}`
  }

}
