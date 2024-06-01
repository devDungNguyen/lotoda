import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CloudinaryModule } from '@cloudinary/ng';

import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';
import { FormsModule } from '@angular/forms';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'app.lotoda.vn',
  port: 8084,
  protocol: 'wss',
  path: '/',
  // username: 'ePdcZPfycf',
  // password: 'lBsIfMhmbU6pkUSbHdPu',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CloudinaryModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
