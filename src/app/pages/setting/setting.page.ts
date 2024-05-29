import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit, OnDestroy {
  private subscription: Subscription;
  public message: string;
  constructor(private mqttService: MqttService) {
    mqttService.connect({
      username: 'ePdcZPfycf',
      password: 'lBsIfMhmbU6pkUSbHdPu',
    });

    this.subscription = this.mqttService
      .observe('ePdcZPfycf/Sukem')
      .subscribe((message: IMqttMessage) => {
        this.message = message.payload.toString();
        console.log('sukem');
      });
  }

  ngOnInit() {
    return;
  }

  public unsafePublish(topic: string, message: string): void {
    this.mqttService.unsafePublish(topic, message, { qos: 1, retain: false });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
