/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UploadPictureModalComponent } from './upload-picture-modal.component';

describe('UploadPictureModalComponent', () => {
  let component: UploadPictureModalComponent;
  let fixture: ComponentFixture<UploadPictureModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPictureModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPictureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createMode', () => {
    expect(component).toBeTruthy();
  });
});
