import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: any;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.route.snapshot.routeConfig?.title;
    console.log(this.route);
    return 0;
  }
}
