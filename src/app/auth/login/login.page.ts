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
  error: any;
  success: any;

  formInput: {
    type: string;
    id: string;
    label: string;
    ngModel: string;
    placeholder: string;
  }[];

  constructor(private authService: AuthService) {
    this.formInput = [
      {
        type: 'email',
        id: 'email',
        label: 'Email',
        ngModel: '',
        placeholder: ''
      },
      {
        type: 'password',
        id: 'password',
        label: 'Password',
        ngModel: '',
        placeholder: ''
      },
    ];

    this.formData = {
      email: '',
      password: '',
    };
  }


  login() {
    try {
      const keys = Object.keys(this.formData);

      this.formInput.map((input, index) => {
        if (!input.ngModel || input.ngModel.length <= 3) {
          throw this.error = "! Please, check your input";
        }
        
        this.formData[keys[index]] = input.ngModel.trim();
      });

      this.authService
        .login(this.formData)
        this.success = "Log in successfully";
    } catch (error) {
    }
  }
}
