import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { validateEmail } from 'src/app/utils/utils';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  email: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    return;
  }

  forgotPassword() {
    if (!validateEmail(this.email)) {
      alert('Please try a correct email.');
      return;
    }
    this.authService.forgotPassword(this.email);
  }
}
