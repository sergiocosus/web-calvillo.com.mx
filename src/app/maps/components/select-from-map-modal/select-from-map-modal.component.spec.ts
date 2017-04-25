/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelectFromMapModalComponent } from './select-from-map-modal.component';

describe('SelectFromMapModalComponent', () => {
  let component: SelectFromMapModalComponent;
  let fixture: ComponentFixture<SelectFromMapModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFromMapModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFromMapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createMode', () => {
    expect(component).toBeTruthy();
  });
});
