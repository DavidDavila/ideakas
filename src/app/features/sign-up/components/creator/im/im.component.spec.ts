/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImComponent } from './im.component';

describe('ImComponent', () => {
  let component: ImComponent;
  let fixture: ComponentFixture<ImComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
