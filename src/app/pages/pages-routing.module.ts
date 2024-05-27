import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sld-dashboard',
    title: 'SDL Dashboard',
    loadChildren: () =>
      import('./sld-dashboard/sld-dashboard.module').then(
        (m) => m.SLDDashboardPageModule
      ),
  },

  {
    path: 'profile',
    title: 'Profile',
    loadChildren: () =>
      import('./profiles/profiles.module').then((m) => m.ProfilesPageModule),
  },

  {
    path: 'iot-dashboard',
    title: 'IOT Dashboard',
    loadChildren: () =>
      import('./iot-dashboard/iot-dashboard.module').then(
        (m) => m.IOTDashboardPageModule
      ),
  },

  {
    path: 'devices-management',
    title: 'Devices Management',
    loadChildren: () =>
      import('./devices-management/devices-management.module').then(
        (m) => m.DevicesManagementPageModule
      ),
  },

  {
    path: 'realtime-data',
    title: 'Realtime Data',
    loadChildren: () =>
      import('./realtime-data/realtime-data.module').then(
        (m) => m.RealtimeDataPageModule
      ),
  },

  {
    path: 'alert-rules',
    title: 'Alert Rules',
    loadChildren: () =>
      import('./alert-rules/alert-rules.module').then(
        (m) => m.AlertRulesPageModule
      ),
  },

  {
    path: 'setting',
    title: 'Setting',
    loadChildren: () =>
      import('./setting/setting.module').then((m) => m.SettingPageModule),
  },

  {
    path: 'history-and-report',
    title: 'History and Report',
    loadChildren: () =>
      import('./history-and-report/history-and-report.module').then(
        (m) => m.HistoryAndReportPageModule
      ),
  },

  {
    path: 'support',
    title: 'Support',
    loadChildren: () =>
      import('./support/support.module').then((m) => m.SupportPageModule),
  },

  { path: '', redirectTo: '/pages/sld-dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/pages/sld-dashboard' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PagesRoutingModule {}
