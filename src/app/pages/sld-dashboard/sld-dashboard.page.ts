import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-sld-dashboard',
  templateUrl: './sld-dashboard.page.html',
  styleUrls: ['./sld-dashboard.page.scss'],
})
export class SLDDashboardPage implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    return 0;
  }
}
