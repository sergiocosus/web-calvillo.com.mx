/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PictureGalleryComponent } from './picture-gallery.component';

describe('PictureGalleryComponent', () => {
  let component: PictureGalleryComponent;
  let fixture: ComponentFixture<PictureGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createMode', () => {
    expect(component).toBeTruthy();
  });
});
