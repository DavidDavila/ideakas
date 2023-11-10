/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CollaboratorsService } from './collaborators.service';

describe('Service: ConfigCollaborators', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollaboratorsService],
    });
  });

  it('should ...', inject(
    [CollaboratorsService],
    (service: CollaboratorsService) => {
      expect(service).toBeTruthy();
    }
  ));
});
