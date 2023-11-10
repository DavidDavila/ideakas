import { Component, Input, OnInit } from '@angular/core';
import { ProjectT } from 'src/app/features/projects/types/projects.types';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.scss'],
})
export class ProjectBoxComponent implements OnInit {
  @Input() data!: ProjectT;

  constructor() {}

  ngOnInit() {}
}
