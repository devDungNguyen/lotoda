import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { OnOffButton, SheetAction, Widget } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-iot-dashboard',
  templateUrl: './iot-dashboard.page.html',
  styleUrls: ['./iot-dashboard.page.scss'],
})
export class IOTDashboardPage implements OnDestroy, OnInit {
  private subscription: Subscription;
  private currentState: number | string;
  // private topic: string = 'ePdcZPfycf/tele/lotoda32477BCC/SENSOR'; //   ePdcZPfycf/#
  private topic: string = 'ePdcZPfycf/Test';

  public actionSheetButtons = [
    {
      text: 'Create ON/OFF button',
      role: 'share',
      data: {
        action: SheetAction.createOnOff,
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: SheetAction.cancel,
      },
    },
  ];

  public widgets: Widget;

  private onOffList: OnOffButton[] = [];

  public temperatureHistory: {
    value: number;
    timestamp: string;
  }[] = [];

  public temperature: {
    value: number;
    timestamp: string;
  }[];

  constructor(private _mqttService: MqttService) {
    this._mqttService.connect({
      username: 'ePdcZPfycf',
      password: 'lBsIfMhmbU6pkUSbHdPu',
    });

    this.subscription = this._mqttService
      .observe(this.topic)
      .subscribe((message: IMqttMessage) => {
        const response = JSON.parse(message.payload.toString());
        if (typeof response === 'number') {
          this.currentState = response;
          this.updateWidgetBtn();
        }
        // if (this.temperatureHistory.length > 10) {
        //   this.temperature.shift();
        // }
        // this.temperatureHistory.push({
        //   value: response['Temperature'],
        //   timestamp: response['Time'],
        // });
        // this.temperature = this.temperatureHistory;
        console.log(response);
      });
  }

  ngOnInit(): void {
    const widgets = localStorage.getItem('widgets');
    if (widgets) this.widgets = JSON.parse(widgets);
    else {
      this.widgets = {};
    }
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public unsafePublish(newState: string | number): void {
    this.currentState = newState.toString();

    this._mqttService.unsafePublish(this.topic, this.currentState, {
      qos: 1,
      retain: true,
    });
  }

  public handleAction(e: any) {
    const action = e.detail.data.action;
    if (action === SheetAction.createOnOff) {
      if (this.widgets['OnOffBtn'] === undefined) {
        this.widgets['OnOffBtn'] = {
          title: 'ON/OFF Buttons',
          children: [],
        };
      }

      this.onOffList.push({
        name: 'Switch No.' + (this.onOffList.length + 1),
        state: Number(this.currentState),
        topic: 'Sukem',
      });
      this.widgets['OnOffBtn'].children = this.onOffList;
      this.storageWidget();
    }
  }

  editBtn(item: OnOffButton) {
    // this.unsafePublish();
    // this.onOffList.map((btn) => {
    //   btn.status = Number(this.currentState);
    // });
    // console.log(item);
  }

  public updateBtnState(item: OnOffButton) {
    const newState = item.state === 1 ? 0 : 1;
    this.unsafePublish(newState);
  }

  private updateWidgetBtn() {
    this.widgets['OnOffBtn'].children.map((item) => {
      item.state = Number(this.currentState);
    });
    this.storageWidget();
  }

  private storageWidget() {
    localStorage.setItem('widgets', JSON.stringify(this.widgets));
    // console.log(this.widgets['OnOffBtn'].children);
  }
}
