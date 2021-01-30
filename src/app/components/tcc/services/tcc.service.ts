import { AuthTokenService } from './../../../account/shared/auth-token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TccModel } from '../components/models/Tcc.model';
import { environment } from "../../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class TccService {
  save(tcc: TccModel) {
    this.http.post(environment.urls.tccSave, tcc,
      {
        headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken())
      });
  }


  constructor(private http: HttpClient, private tokenService: AuthTokenService) { }
}
