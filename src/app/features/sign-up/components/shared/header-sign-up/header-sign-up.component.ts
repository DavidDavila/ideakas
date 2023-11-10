import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { STEPS } from './steps';

@Component({
  selector: 'app-header-sign-up',
  templateUrl: './header-sign-up.component.html',
  styleUrls: ['./header-sign-up.component.scss'],
})
export class HeaderSignUpComponent {
  step!: number;
  @Input('steps') steps!: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.step = this.getStep(this.router.url);
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.step = this.getStep(val.url);
      }
    });
    const children = this.route.snapshot.routeConfig?.children
      ?.length as number;
    console.log(children);
    this.steps = children || 1;
  }
  private getStep(urlPath: string): number {
    const [, step] = STEPS.find(([url]) => url === urlPath) as [string, number];
    return step;
  }
  goBack() {
    const currentUrl = this.router.url;
    console.log({ currentUrl });
    const parts = currentUrl.split('/');
    parts.pop();
    const previousUrl = parts.join('/');
    this.router.navigateByUrl(previousUrl);
  }
}
