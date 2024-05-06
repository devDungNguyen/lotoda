import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { IonicModule } from '@ionic/angular';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { HeaderComponent } from '../components/header/header.component';
import { NgIconsModule } from '@ng-icons/core';
import { saxElement3Outline, saxHome1Outline } from '@ng-icons/iconsax/outline';
import { PagesPage } from './pages.page';

@NgModule({
  declarations: [PagesPage, HeaderComponent, SidenavComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IonicModule,
    NgIconsModule.withIcons({ saxHome1Outline, saxElement3Outline }),
  ],
})
export class PagesModule {}
