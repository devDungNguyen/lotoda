import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IOTDashboardPageRoutingModule } from './iot-dashboard-routing.module';

import { IOTDashboardPage } from './iot-dashboard.page';
import { ChartsModule } from 'src/app/components/charts/charts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IOTDashboardPageRoutingModule,
    ChartsModule,
  ],
  declarations: [IOTDashboardPage],
})
export class IOTDashboardPageModule {}
