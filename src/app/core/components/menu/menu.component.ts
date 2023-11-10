import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../const/routes.const';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  routes = ROUTES;
  constructor() {}

  ngOnInit() {}
}
