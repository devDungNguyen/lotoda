import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryAndReportPage } from './history-and-report.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryAndReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryAndReportPageRoutingModule {}
