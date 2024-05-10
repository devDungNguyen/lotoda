import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  user: User;


  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.profile().subscribe(res => this.user = res.user);
  }

}
