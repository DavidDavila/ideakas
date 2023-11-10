import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ROUTES } from '../../../core/const/routes.const';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  standalone: true,
})
export class TitleComponent {
  currentRoute!: string;
  routes = ROUTES;
  constructor(private router: Router) {
    this.getTitle(this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getTitle(event.url);
      }
    });
  }
  getTitle(url: string) {
    const path = url.split('/')[2];
    path &&
      (this.currentRoute = this.routes.find((route) => route.path === path)
        ?.title as string);
  }
}
