import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryMapComponent } from './directory-map.component';

describe('DirectoryMapComponent', () => {
  let component: DirectoryMapComponent;
  let fixture: ComponentFixture<DirectoryMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
