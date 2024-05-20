import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async presentToast(message: string, type: 'success' | 'danger' | 'warning') {
    let icon: string = 'checkmark-done-sharp';
    if (type === 'warning') {
      icon = 'warning-outline';
    } else {
      icon = 'close-circle-outline';
    }
    const toast = await this.toastController.create({
      message: message,
      duration: 150000,
      position: 'bottom',
      color: type,
      icon: icon,
      cssClass: 'toast-success',
    });

    await toast.present();
  }
}
