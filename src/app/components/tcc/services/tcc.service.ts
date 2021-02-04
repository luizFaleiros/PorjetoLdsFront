import { TccModel } from './../components/models/tcc.model';
import { AuthTokenService } from './../../../account/shared/auth-token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { Observable } from 'rxjs';
import { TccResponseModel } from '../components/models/tcc-response.model';
@Injectable({
  providedIn: 'root'
})
export class TccService {

  detail(tccId: number): Observable<TccResponseModel> {
    return this.http.get<TccResponseModel>(`${environment.urls.tccDetail}/${tccId}`,
      {
        headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken())
      });
  }

  public list(): Observable<TccModel[]> {
    return this.http.get<TccModel[]>(environment.urls.tccList,
      {
        headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken())
      });
  }

  public save(tcc: TccModel): Observable<any> {

    return this.http.post(environment.urls.tccSave, tcc,
      {
        headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken())
      });
  }

  public postFile(fileToUpload: File, id:number) {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    this.http
      .put(`${environment.urls.uploadFile}/${id}`, formData, { headers: new HttpHeaders().append('Authorization', this.tokenService.sendToken()).append('Content-Type', 'multipart/form-data') });
}


  constructor(private http: HttpClient, private tokenService: AuthTokenService) { }
}
