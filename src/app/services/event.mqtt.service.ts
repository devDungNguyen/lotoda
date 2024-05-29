import { Injectable } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventMqttService {
  private endpoint: string;

  constructor(private _mqttService: MqttService) {
    this.endpoint = 'events';
    // useridkey/cmnd/deviceid/saocungdc
  }

  topic(deviceId: string): Observable<IMqttMessage> {
    // let topicName = `ePdcZPfycf/cmnd/DF/power1`;
    return this._mqttService.observe(deviceId);
  }
}
