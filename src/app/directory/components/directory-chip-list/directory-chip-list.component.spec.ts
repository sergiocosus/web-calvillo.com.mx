import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryChipListComponent } from './directory-chip-list.component';

describe('DirectoryChipListComponent', () => {
  let component: DirectoryChipListComponent;
  let fixture: ComponentFixture<DirectoryChipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryChipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryChipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
