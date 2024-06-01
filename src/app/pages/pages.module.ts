import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { IonicModule } from '@ionic/angular';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { HeaderComponent } from '../components/header/header.component';
import { PagesPage } from './pages.page';

@NgModule({
  declarations: [PagesPage, HeaderComponent],
  imports: [CommonModule, PagesRoutingModule, IonicModule, SidenavComponent],
})
export class PagesModule {}
