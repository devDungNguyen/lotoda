import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { OnOffButton } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-iot-dashboard',
  templateUrl: './iot-dashboard.page.html',
  styleUrls: ['./iot-dashboard.page.scss'],
})
export class IOTDashboardPage implements OnDestroy {
  subscription: Subscription;
  message: 0 | 1 | '0' | '1';
  topic: string = 'ePdcZPfycf/Sukem'; //   ePdcZPfycf/#

  actionSheetButtonText: string[] = [
    'Create DIY On/Off Type',
    'Create On/Off Roller',
    'Create On/Off Button',
    'Create LoRa',
  ];

  actionSheetButtons = this.actionSheetButtonText.map((t) => {
    return {
      text: t,
      role: 'share',
      data: {
        action: 'switch',
      },
    };
  });

  onOffList: OnOffButton[] = [];

  constructor(private _mqttService: MqttService) {
    this.actionSheetButtons.push({
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    });

    this._mqttService.connect({
      username: 'ePdcZPfycf',
      password: 'lBsIfMhmbU6pkUSbHdPu',
    });
    this.subscription = this._mqttService
      .observe(this.topic)
      .subscribe((message: IMqttMessage) => {
        this.message = JSON.parse(message.payload.toString());
        console.log('current', JSON.parse(message.payload.toString()));
        this.onOffList.map((btn) => {
          btn.status = Number(this.message);
        });
      });
  }

  public unsafePublish(): void {
    if (this.message == '0') {
      this.message = '1';
    } else {
      this.message = '0';
    }

    this._mqttService.unsafePublish(this.topic, this.message, {
      qos: 1,
      retain: true,
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggle(s: any) {
    if (s.status === 0) {
      s.status = 1;
      return;
    }
    s.status = 0;
  }

  handleAction(e: any) {
    const action = e.detail.data.action;
    if (action === 'switch') {
      this.onOffList.push({
        name: 'Switch No.' + (this.onOffList.length + 1),
        status: 1,
        topic: 'Sukem',
      });
    }
  }

  editBtn(item: OnOffButton) {
    this.unsafePublish();
    this.onOffList.map((btn) => {
      btn.status = Number(this.message);
    });
    console.log(item);
  }
}
