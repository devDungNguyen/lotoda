import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService) {
    this.formData = {
      email: 'nguyenmanhdung.dev@gmail.com',
      password: '123456789',
    };
  }

  ngOnInit() {
    return 0;
  }

  login() {
    console.log('login.....');

    this.authService.login(this.formData).subscribe((response) => {
      this.user = response;
      console.log(this.user);
    });
  }
}
