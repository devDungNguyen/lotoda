import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  website: string;
  email: string;
  image: string;
  isModalOpen = false;

  contact: {
    value: string;
    icon: string;
  }[];

  socials: {
    value: string;
    label: string;
    icon: string;
  }[];

  steps: {
    step: number;
    content: string;
  }[];

  constructor(private http: HttpClient) {
    this.website = 'www.lotoda.vn';
    this.email = 'support@lotoda.vn';
    this.image = 'https://dashboard.lotoda.vn/assets/images/icon_lotoda.jpg';
    this.contact = [
      {
        value: '+84 286 278 327',
        icon: 'headset-outline',
      },
      {
        value: '+84 932 647 607',
        icon: 'phone-portrait-outline',
      },
      {
        value: this.email,
        icon: 'mail-outline',
      },
      {
        value: this.website,
        icon: 'link-outline',
      },
    ];

    this.socials = [
      {
        value: '@lotodavn',
        label: 'Facebook',
        icon: 'logo-facebook',
      },
      {
        value: '@lotoda_iot',
        label: 'Linkedin',
        icon: 'logo-linkedin',
      },
    ];

    this.steps = [
      {
        step: 1,
        content: 'Go to Settings',
      },
      {
        step: 2,
        content: 'Enter User ID Key and Password ID Key',
      },
      {
        step: 3,
        content: 'Add some Topics (Channels)',
      },
      {
        step: 4,
        content: "Click on 'Connect ...' to connect to LOTODA's system",
      },
      {
        step: 5,
        content: 'Go to Dasboard',
      },
      {
        step: 6,
        content: 'Add widgets and choose Topic (channel) for widget',
      },
    ];
  }

  ngOnInit() {
    return 0;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
