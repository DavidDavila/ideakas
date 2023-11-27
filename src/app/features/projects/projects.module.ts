import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateProjectComponent } from './components/create/createProject/createProject.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectBoxComponent } from './components/project-list/components/project-box/project-box.component';
import { SearchProjectComponent } from './components/project-list/components/search-project/search-project.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsService } from './services/projects.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectsRoutingModule,
    SharedModule,
  ],
  declarations: [
    ProjectsComponent,
    ProjectListComponent,
    ProjectBoxComponent,
    CreateProjectComponent,
    SearchProjectComponent,
    ProjectDetailsComponent,
  ],
  providers: [ProjectsService],
})
export class ProjectsModule {}
