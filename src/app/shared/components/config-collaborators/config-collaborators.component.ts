import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RolesEnum } from 'src/app/core/types/roles.types';
import { CollaboratorsService } from '../../services/collaborators/collaborators.service';
import { SharedModule } from '../../shared.module';
import { BasicCollaboratorT } from '../../types/collaborators.types';

@Component({
  selector: 'app-config-collaborators',
  templateUrl: './config-collaborators.component.html',
  styleUrls: ['./config-collaborators.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  providers: [CollaboratorsService],
  standalone: true,
})
export class ConfigCollaboratorsComponent {
  roles: string[] = Object.values(RolesEnum);
  currentCollaborator: { email: string; role: RolesEnum } = {
    email: '',
    role: RolesEnum.CTO,
  };
  @Output() hasCollaborators = new EventEmitter<boolean>();
  collaborators!: BasicCollaboratorT[];
  constructor(private collaboratorsService: CollaboratorsService) {
    this.collaboratorsService.collaborators$.subscribe((collaborators) =>
      this.sendCollaborators(collaborators)
    );
  }
  onOptionSelected(role: string) {
    this.currentCollaborator.role = role as RolesEnum;
  }
  addCollaborator() {
    this.collaboratorsService.addCollaborator(this.currentCollaborator);
    this.currentCollaborator = {
      email: '',
      role: RolesEnum.CTO,
    };
  }
  removeCollaborator(email: string) {
    this.collaboratorsService.removeCollaborator(email);
  }
  sendCollaborators(collaborators: BasicCollaboratorT[]) {
    this.collaborators = collaborators;
    const length = collaborators.length > 0;
    this.hasCollaborators.emit(length);
  }
}
