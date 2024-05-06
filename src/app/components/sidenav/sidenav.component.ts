import { Component, OnInit } from '@angular/core';
import { ADMIN_SIDENAV } from 'src/app/utils/definitions';
import { MenuItem } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menuItem: MenuItem[];
  constructor() {
    this.menuItem = ADMIN_SIDENAV;
  }

  ngOnInit() {}
}
