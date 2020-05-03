import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  public API_Server = 'https://codbar-api.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  postLogin(login): Observable<any> {
    return this.http.post(this.API_Server + 'usuarios/login/', login);
  }
}
