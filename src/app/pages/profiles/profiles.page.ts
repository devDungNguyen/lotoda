import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DEFAULT_USER_AVATAR } from 'src/app/utils/definitions';
import { User } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  user: User;

  avatarURL: string;

  constructor(private authService: AuthService) {
    this.avatarURL = DEFAULT_USER_AVATAR;
  }

  ngOnInit() {
    this.authService.profile().subscribe((res) => (this.user = res.user));
  }

  onChange(event: any) {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      this.avatarURL = event.target.result;
    };

    reader.onerror = (event: any) =>
      console.log('File could not be read: ' + event.target.error.code);

    if (event.target.files[0]) reader.readAsDataURL(event.target.files[0]);
  }
}
