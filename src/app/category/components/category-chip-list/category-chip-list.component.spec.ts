import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryChipListComponent } from './category-chip-list.component';

describe('CategoryChipListComponent', () => {
  let component: CategoryChipListComponent;
  let fixture: ComponentFixture<CategoryChipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryChipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryChipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
