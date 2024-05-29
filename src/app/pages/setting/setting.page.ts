import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  formInput: {
    type: string;
    id: string;
    label: string;
    ngModel: string;
    placeholder: string;
    icon:string;
  }[];

  constructor() { 
  }

  ngOnInit() {
    this.formInput = [
      {
        type: 'text',
        id: 'userkey',
        label: 'User ID Key',
        ngModel: '',
        placeholder: 'Enter Username ID Key',
        icon:'person'
      },
      {
        type: 'password',
        id: 'passwordkey',
        label: 'Password ID Key',
        ngModel: '',
        placeholder: 'Enter Password ID Key',
        icon:'key'
      },
    ]
  }

}
