import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-sld-dashboard',
  templateUrl: './sld-dashboard.page.html',
  styleUrls: ['./sld-dashboard.page.scss'],
})
export class SLDDashboardPage implements OnInit {
  constructor(private toastService: ToastService) {}

  ngOnInit() {
    return;
  }

  show(message: string, type: 'success' | 'danger' | 'warning') {
    this.toastService.presentToast(message, type);
  }
}
