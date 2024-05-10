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
  {
    path: 'profile',
    loadChildren: () =>
      import('./profiles/profiles.module').then(
        (m) => m.ProfilesPageModule
      ),
  },

  { path: '', redirectTo: '/pages/sld-dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/pages/sld-dashboard' },
  {
    path: 'profiles',
    loadChildren: () => import('./profiles/profiles.module').then( m => m.ProfilesPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PagesRoutingModule {}
