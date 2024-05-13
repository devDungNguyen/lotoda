import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IOTDashboardPage } from './iot-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: IOTDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IOTDashboardPageRoutingModule {}
