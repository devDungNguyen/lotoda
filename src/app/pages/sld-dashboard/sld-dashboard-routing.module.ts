import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SLDDashboardPage } from './sld-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: SLDDashboardPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SLDDashboardPageRoutingModule {}
