import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryAndReportPageRoutingModule } from './history-and-report-routing.module';

import { HistoryAndReportPage } from './history-and-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryAndReportPageRoutingModule
  ],
  declarations: [HistoryAndReportPage]
})
export class HistoryAndReportPageModule {}
