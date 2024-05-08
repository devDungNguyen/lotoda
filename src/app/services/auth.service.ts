import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginBody, LoginResponse, RegisterBody } from '../utils/interfaces';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessTokenPrefix: string = 'accessToken';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(body: LoginBody) {
    this.http
      .post<LoginResponse>(
        `${environment.apiUrl}/${environment.apiAuth.login}`,
        body
      )
      .subscribe((response: LoginResponse) => {
        this.setToken(response.token);
      });
  }

  private setToken(jwtToken: string) {
    this.cookieService.set(this.accessTokenPrefix, jwtToken, undefined, '/');
  }

  isLogin() {
    const token = this.cookieService.get(this.accessTokenPrefix);
    return token.length > 0;
  }

  register(body: RegisterBody): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/${environment.apiAuth.register}`,
      body
    );
  }
}
