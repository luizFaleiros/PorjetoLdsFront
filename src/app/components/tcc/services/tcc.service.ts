import { AuthTokenService } from './../../../account/shared/auth-token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TccModel } from '../components/models/Tcc.model';
import { environment } from "../../../../environments/environment";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TccService {
  list(): Observable<TccModel[]> {
    return this.http.get<TccModel[]>(environment.urls.tccList,
      {
        headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken())
      });
  }

  save(tcc: TccModel): void {
    this.http.post(environment.urls.tccSave, tcc,
      {
        headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken())
      });
  }

  postFile(fileToUpload: File) {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    this.http
      .put(endpoint, formData, { headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken()).append('Content-Type', 'multipart/form-data') });
}


  constructor(private http: HttpClient, private tokenService: AuthTokenService) { }
}
