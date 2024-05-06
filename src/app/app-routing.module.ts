import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagesPage } from './pages/pages.page';
import { AuthPage } from './auth/auth.page';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthPage,
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'pages',
    component: PagesPage,
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },

  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
