import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { DEFAULT_USER_AVATAR } from 'src/app/utils/definitions';
import {
  AuthenticatedEditUser,
  CloudinaryImageResponse,
  User,
} from 'src/app/utils/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  user: User;
  name: any;
  phone: any;
  location: any;
  formData: AuthenticatedEditUser;

  avatarURL: string;

  myWidget: any;

  formInput: {
    name: any;
    class: any;
    value: any;
    isDisabled: any;
    [key: string]: string | undefined | null;
  }[];

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    this.avatarURL = DEFAULT_USER_AVATAR;
    this.formData = {
      user: {
        name: '',
        phone: '',
        location: '',
      },
    };
  }

  ngOnInit() {
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

    this.authService.profile().subscribe((res) => {
      this.user = res.user;
      this.formInput = [
        {
          name: 'people-sharp',
          class: 'icon',
          value: this.user['name'],
          isDisabled: 'false',
        },
        {
          name: 'mail',
          class: 'icon',
          value: this.user['email'],
          isDisabled: 'true',
        },
        {
          name: 'logo-whatsapp',
          class: 'icon',
          value: this.user['phone'],
          isDisabled: 'false',
        },
        {
          name: 'location-sharp',
          class: 'icon',
          value: this.user['location'],
          isDisabled: 'false',
        },
      ];
    });
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

  edit() {
    try {
      const keys = Object.keys(this.formData.user);
      console.log(keys);

      let i = 0;

      this.formInput.map((input) => {
        if (input.isDisabled === 'false') {
          this.formData.user[keys[i]] = input.value.trim();
          i++;
        }
      });
      console.log(this.formData);

      this.userService.editUser(this.formData).subscribe((r) => console.log(r));
    } catch (error) {
      throw error;
    }
  }
}
