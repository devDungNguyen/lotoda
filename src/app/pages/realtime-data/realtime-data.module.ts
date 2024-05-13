import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealtimeDataPageRoutingModule } from './realtime-data-routing.module';

import { RealtimeDataPage } from './realtime-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealtimeDataPageRoutingModule
  ],
  declarations: [RealtimeDataPage]
})
export class RealtimeDataPageModule {}
