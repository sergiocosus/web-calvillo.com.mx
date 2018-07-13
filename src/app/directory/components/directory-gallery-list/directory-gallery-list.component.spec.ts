import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryGalleryListComponent } from './directory-gallery-list.component';

describe('DirectoryGalleryListComponent', () => {
  let component: DirectoryGalleryListComponent;
  let fixture: ComponentFixture<DirectoryGalleryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectoryGalleryListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryGalleryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
