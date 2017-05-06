import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryGalleryListComponent } from './category-gallery-list.component';

describe('CategoryGalleryListComponent', () => {
  let component: CategoryGalleryListComponent;
  let fixture: ComponentFixture<CategoryGalleryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryGalleryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryGalleryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
