import { Injectable } from '@angular/core';
import { RolesEnum } from 'src/app/core/types/roles.types';
import { ProjectInfoT, ProjectT } from '../types/projects.types';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}
  getProjectList() {
    return [
      {
        name: 'Mi proyecto',
        id: 1,
      },
      {
        name: 'Mi proyecto 2',
        id: 2,
      },
    ];
  }
  saveProject(project: ProjectT & ProjectInfoT, role: RolesEnum) {
    //Guarda el proyecto
    //Añade el rol del creador al proyecto
    debugger;
  }
}
