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
  email: any;
  password: any;
  formData: LoginBody;


    // 1
  constructor(private authService: AuthService, private router: Router) {
    this.formData = {
      email: '',
      password: '',
    };
  }

  // email: 'nguyenmanhdung.dev@gmail.com',
  // password: '123456789',


  // login() {

  //   this.formData.email = this.email

  //   console.log('Username:', this.formData.email);
  // }

  login() {
    try {

      this.formData.email = this.email;
      this.formData.password = this.password;

      this.authService.login(this.formData);
      alert('Login successfully');
    } catch (error) {
      alert(error);
    }
  }

  ngOnInit() {
  }
}
