import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginBody, LoginResponse } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: any;
  password: any;
  formData: LoginBody;

  isAlertOpen: boolean;
  alertButtons: string[] = ['OK'];
  isComplete: boolean = false;
  message: string;

  formInput: {
    type: string;
    id: string;
    label: string;
    ngModel: string;
    placeholder: string;
  }[];

  constructor(private authService: AuthService) {
    this.isAlertOpen = false;

    this.formInput = [
      {
        type: 'email',
        id: 'email',
        label: 'Email',
        ngModel: '',
        placeholder: '',
      },
      {
        type: 'password',
        id: 'password',
        label: 'Password',
        ngModel: '',
        placeholder: '',
      },
    ];

    this.formData = {
      email: '',
      password: '',
    };
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  hide() {
    this.isAlertOpen = false;
    if (this.isComplete) {
      window.location.reload();
    }
  }

  login() {
    try {
      const keys = Object.keys(this.formData);

      this.formInput.map((input, index) => {
        if (!input.ngModel || input.ngModel.length <= 3) {
          throw 'Please, check your input!';
        }

        this.formData[keys[index]] = input.ngModel.trim();
      });

      this.authService.login(this.formData).subscribe({
        next: (response: LoginResponse) => {
          const isActive: boolean = response.user.active;

          if (!isActive) {
            alert('Login error. Please, try again!');
            return;
          }

          this.authService.setToken(response.token);
          this.message = 'Login successfully!';
          this.isComplete = true;
          return;
        },
        error: (error: HttpErrorResponse) => {
          this.message = 'Login failed. Please try again!';
        },
      });
    } catch (error: any) {
      this.message = error;
    } finally {
      this.setOpen(true);
    }
  }
}
