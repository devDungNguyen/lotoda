import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertRulesPage } from './alert-rules.page';

const routes: Routes = [
  {
    path: '',
    component: AlertRulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertRulesPageRoutingModule {}
