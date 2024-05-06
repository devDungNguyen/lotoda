import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SLDDashboardPageRoutingModule } from './sld-dashboard-routing.module';

import { SLDDashboardPage } from './sld-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SLDDashboardPageRoutingModule
  ],
  declarations: [SLDDashboardPage]
})
export class SLDDashboardPageModule {}
