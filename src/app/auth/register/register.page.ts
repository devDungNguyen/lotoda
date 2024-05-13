import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterBody } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: any;
  password: any;
  fullname: any;
  formData: RegisterBody;

  formInput: {
    type: string;
    id: string;
    label: string;
    ngModel: string;
  }[];

  constructor(private authService: AuthService) {
    this.formInput = [
      {
        type: 'text',
        id: 'fullname',
        label: 'Full name',
        ngModel: '',
      },
      {
        type: 'email',
        id: 'email',
        label: 'Email',
        ngModel: '',
      },
      {
        type: 'password',
        id: 'password',
        label: 'Password',
        ngModel: '',
      },
    ];

    this.formData = {
      email: '',
      password: '',
      username: '',
    };
  }

  ngOnInit(): void {
    return;
  }

  register() {
    try {
      const keys = Object.keys(this.formData);

      this.formInput.map((input, index) => {
        if (!input.ngModel || input.ngModel.length <= 3) {
          throw 'Register error. Check your input';
        }
        this.formData[keys[index]] = input.ngModel.trim();
      });

      this.authService
        .register(this.formData)
        .subscribe((res) => console.log(res));

      alert(
        'Register successfully! Please, check your email to verify your account.'
      );
    } catch (error) {
      alert(error);
    }
  }
}
