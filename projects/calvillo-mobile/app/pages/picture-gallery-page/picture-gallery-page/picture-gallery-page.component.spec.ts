import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureGalleryPageComponent } from './picture-gallery-page.component';

describe('PictureGalleryPageComponent', () => {
  let component: PictureGalleryPageComponent;
  let fixture: ComponentFixture<PictureGalleryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureGalleryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureGalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
