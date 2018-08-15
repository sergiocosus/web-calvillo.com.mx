import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureMapPageComponent } from './picture-map-page.component';

describe('PictureMapPageComponent', () => {
  let component: PictureMapPageComponent;
  let fixture: ComponentFixture<PictureMapPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureMapPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
