/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureThumbnailComponent } from './picture-thumbnail.component';

describe('PictureThumbnailComponent', () => {
  let component: PictureThumbnailComponent;
  let fixture: ComponentFixture<PictureThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureThumbnailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createMode', () => {
    expect(component).toBeTruthy();
  });
});
