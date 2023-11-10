import { Component, EventEmitter, Output } from '@angular/core';
import { RolesEnum } from 'src/app/core/types/roles.types';
import { BasicCollaboratorT } from 'src/app/shared/types/collaborators.types';
import { ProjectsService } from '../../../services/projects.service';
import { ProjectInfoT, ProjectT } from '../../../types/projects.types';

@Component({
  selector: 'app-create-project',
  templateUrl: './createProject.component.html',
  styleUrls: ['./createProject.component.scss'],
})
export class CreateProjectComponent {
  roles: string[] = Object.values(RolesEnum);
  role: RolesEnum = RolesEnum.CTO;
  @Output() hasCollaborators = new EventEmitter<boolean>();
  collaborators!: BasicCollaboratorT[];
  newProject: ProjectInfoT & ProjectT = {
    name: '',

    mission: '',
    vission: '',
  };

  constructor(private projectsService: ProjectsService) {}
  onOptionSelected(role: string) {
    this.role = role as RolesEnum;
  }
  saveProject() {
    this.projectsService.saveProject(this.newProject, this.role);
  }
}
