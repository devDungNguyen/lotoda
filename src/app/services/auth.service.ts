import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginBody, RegisterBody } from '../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(body: LoginBody): Observable<any> {
    return this.http.post(`${environment.apiUrl}/login`, body);
  }

  register(body: RegisterBody): Observable<any> {
    return this.http.post(`${environment.apiUrl}/register`, body);
  }
}
