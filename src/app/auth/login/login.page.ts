import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginBody } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any;
  formData: LoginBody;

  constructor(private authService: AuthService, private router: Router) {
    this.formData = {
      email: 'nguyenmanhdung.dev@gmail.com',
      password: '123456789',
    };
  }

  ngOnInit() {
    return 0;
  }

  login() {
    try {
      this.authService.login(this.formData);
      alert('Login successfully');
    } catch (error) {
      alert(error);
    }
  }
}
