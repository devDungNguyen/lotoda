import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginBody } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: any;
  password: any;
  formData: LoginBody;

  constructor(private authService: AuthService, private router: Router) {
    this.formData = {
      email: '',
      password: '',
    };
  }

  login() {
    try {
      this.formData.email = this.email;
      this.formData.password = this.password;

      this.authService.login(this.formData);
    } catch (error) {
      alert(error);
    }
  }
}
