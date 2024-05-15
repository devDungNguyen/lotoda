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
} from '../utils/interfaces';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessTokenPrefix: string = 'accessToken';
  expired: number = 10;

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(body: LoginBody) {
    this.http
      .post<LoginResponse>(
        `${environment.API_URL}/${environment.api.auth.login}`,
        body
      )
      .subscribe({
        next: (response: LoginResponse) => {
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
        error: (error: HttpErrorResponse) => {
          alert(error.status);
        },
      });
  }

  private setToken(jwtToken: string) {
    this.cookieService.set(this.accessTokenPrefix, jwtToken, this.expired, '/');
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
      `${environment.API_URL}/${environment.api.auth.register}`,
      body
    );
  }

  profile(): Observable<AuthenticatedUser> {
    return this.http.get<AuthenticatedUser>(
      `${environment.API_URL}/${environment.api.user.get}`
    );
  }

  forgotPassword(email: string) {
    return this.http
      .post(`${environment.API_URL}/${environment.api.auth.forgotPassword}`, {
        email: email,
      })
      .subscribe({
        next: () => {},
        error: (r) => alert('Check your email to your reset password.'),
      });
  }
}
