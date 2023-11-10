/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigCollaboratorsComponent } from './config-collaborators.component';

describe('ConfigCollaboratorsComponent', () => {
  let component: ConfigCollaboratorsComponent;
  let fixture: ComponentFixture<ConfigCollaboratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigCollaboratorsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigCollaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
