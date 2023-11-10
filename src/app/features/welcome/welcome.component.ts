import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnDestroy {
  timeout!: NodeJS.Timeout;
  constructor(private router: Router) {
    this.timeout = setTimeout(() => this.router.navigate(['home']), 3000);
  }
  ngOnDestroy() {
    clearTimeout(this.timeout);
  }
}
