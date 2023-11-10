import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ProjectT } from '../../types/projects.types';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projectList!: ProjectT[];

  constructor(private projectsService: ProjectsService) {
    this.projectList = this.projectsService.getProjectList();
  }

  ngOnInit() {}
}
