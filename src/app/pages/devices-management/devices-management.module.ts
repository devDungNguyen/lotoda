import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicesManagementPageRoutingModule } from './devices-management-routing.module';

import { DevicesManagementPage } from './devices-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicesManagementPageRoutingModule
  ],
  declarations: [DevicesManagementPage]
})
export class DevicesManagementPageModule {}
