import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-sld-dashboard',
  templateUrl: './sld-dashboard.page.html',
  styleUrls: ['./sld-dashboard.page.scss'],
})
export class SLDDashboardPage implements OnInit {
  user: User;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService
      .profile()
      .subscribe((response) => (this.user = response.user));
  }
}
