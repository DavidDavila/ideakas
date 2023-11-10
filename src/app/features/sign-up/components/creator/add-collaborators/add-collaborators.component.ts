import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-collaborators',
  templateUrl: './add-collaborators.component.html',
  styleUrls: ['./add-collaborators.component.scss'],
})
export class AddCollaboratorsComponent implements OnInit {
  collaborators: boolean = false;
  constructor() {}

  ngOnInit() {}
}
