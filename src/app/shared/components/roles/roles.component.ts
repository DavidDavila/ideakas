import { Component, OnInit } from '@angular/core';
import { ROLES } from 'src/app/core/const/roles.const';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  roles = Object.values(ROLES);
  constructor() {}

  ngOnInit() {}
}
