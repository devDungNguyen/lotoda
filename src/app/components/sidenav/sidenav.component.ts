import { Component, OnInit } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ADMIN_SIDENAV } from 'src/app/utils/definitions';
import { MenuItem } from 'src/app/utils/interfaces';
import * as iconsax from '@ng-icons/iconsax/outline';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [NgIconComponent, IonicModule, CommonModule],
  viewProviders: [provideIcons(iconsax)],
})
export class SidenavComponent {
  menuItem: MenuItem[];

  constructor(private authService: AuthService) {
    this.menuItem = ADMIN_SIDENAV;
  }

  logout() {
    this.authService.removeToken();
  }
}
