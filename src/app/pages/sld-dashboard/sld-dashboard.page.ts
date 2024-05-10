import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sld-dashboard',
  templateUrl: './sld-dashboard.page.html',
  styleUrls: ['./sld-dashboard.page.scss'],
})
export class SLDDashboardPage implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.profile();
  }
}
