import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealtimeDataPage } from './realtime-data.page';

const routes: Routes = [
  {
    path: '',
    component: RealtimeDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealtimeDataPageRoutingModule {}
