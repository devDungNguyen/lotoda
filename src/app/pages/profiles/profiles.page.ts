import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DEFAULT_USER_AVATAR } from 'src/app/utils/definitions';
import { CloudinaryImageResponse, User } from 'src/app/utils/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  user: User;

  avatarURL: string;

  myWidget: any;

  constructor(private authService: AuthService) {
    this.avatarURL = DEFAULT_USER_AVATAR;
  }

  ngOnInit() {
    this.authService.profile().subscribe((res) => (this.user = res.user));
    this.myWidget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: environment.cloudinary.cloudName,
        uploadPreset: environment.cloudinary.uploadPreset,
        cropping: true,
        maxImageFileSize: 5000000, // 5 MB
      },
      (
        error: any,
        result: {
          event: string;
          info: CloudinaryImageResponse;
        }
      ) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info.url);
          document
            .querySelector('#avatar')
            ?.setAttribute('src', result.info.secure_url);
        }
      }
    );
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

  openWidget() {
    this.myWidget.open();
  }
}
