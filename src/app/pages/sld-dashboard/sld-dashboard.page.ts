import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-sld-dashboard',
  templateUrl: './sld-dashboard.page.html',
  styleUrls: ['./sld-dashboard.page.scss'],
})
export class SLDDashboardPage implements OnInit {
  constructor(private toastController: ToastController) {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
      color: 'primary',
      icon: 'checkmark-done-sharp',
    });

    await toast.present();
  }

  ngOnInit() {
    return;
  }
}
