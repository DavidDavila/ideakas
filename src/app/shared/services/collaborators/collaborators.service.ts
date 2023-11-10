import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BasicCollaboratorT } from '../../types/collaborators.types';

@Injectable({
  providedIn: 'root',
})
export class CollaboratorsService {
  collaborators$: BehaviorSubject<BasicCollaboratorT[]> = new BehaviorSubject<
    BasicCollaboratorT[]
  >([]);

  constructor() {}

  addCollaborator(collaborator: BasicCollaboratorT) {
    const newCollaborators = [...this.collaborators$.getValue(), collaborator];
    this.updateCollaborators(newCollaborators);
  }
  removeCollaborator(email: string) {
    const newCollaborators = this.collaborators$
      .getValue()
      .filter((collaborator) => collaborator.email !== email);
    this.updateCollaborators(newCollaborators);
  }
  updateCollaborators(collaborators: BasicCollaboratorT[]) {
    this.collaborators$.next(collaborators);
  }
}
