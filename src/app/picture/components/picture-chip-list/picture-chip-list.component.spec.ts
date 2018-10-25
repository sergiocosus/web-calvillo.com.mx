import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureChipListComponent } from './picture-chip-list.component';

describe('PictureChipListComponent', () => {
  let component: PictureChipListComponent;
  let fixture: ComponentFixture<PictureChipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureChipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureChipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
