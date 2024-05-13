import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  AuthenticatedUser,
  LoginBody,
  LoginResponse,
  RegisterBody,
  User,
} from '../utils/interfaces';
import { CookieService } from 'ngx-cookie-service';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessTokenPrefix: string = 'accessToken';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(body: LoginBody) {
    this.http
      .post<LoginResponse>(
        `${environment.apiUrl}/${environment.api.auth.login}`,
        body
      )
      .subscribe(
        (response: LoginResponse) => {
          console.log(response);

          const isActive: boolean = response.user.active;

          if (!isActive) {
            alert('Login error. Please, try again!');
            return;
          }

          this.setToken(response.token);
          alert(`Hello, ${response.user.email} !`);
          window.location.reload();
          return;
        },
        (error: HttpErrorResponse) => {
          alert(error.status);
        }
      );
  }

  private setToken(jwtToken: string) {
    this.cookieService.set(this.accessTokenPrefix, jwtToken, undefined, '/');
  }

  public getToken(): string {
    return this.cookieService.get(this.accessTokenPrefix);
  }

  public removeToken() {
    this.cookieService.delete(this.accessTokenPrefix, '/');

    window.location.reload();
  }

  isLogin() {
    const token = this.cookieService.get(this.accessTokenPrefix);
    return token.length > 0;
  }

  register(body: RegisterBody): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/${environment.api.auth.register}`,
      body
    );
  }

  profile(): Observable<AuthenticatedUser> {
    return this.http.get<AuthenticatedUser>(
      `${environment.apiUrl}/${environment.api.auth.user.get}`
    );
  }
}
