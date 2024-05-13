import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesManagementPage } from './devices-management.page';

const routes: Routes = [
  {
    path: '',
    component: DevicesManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesManagementPageRoutingModule {}
