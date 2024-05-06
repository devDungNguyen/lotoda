import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sld-dashboard',
    loadChildren: () =>
      import('./sld-dashboard/sld-dashboard.module').then(
        (m) => m.SLDDashboardPageModule
      ),
  },

  { path: '', redirectTo: '/pages/sld-dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/pages/sld-dashboard' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PagesRoutingModule {}
