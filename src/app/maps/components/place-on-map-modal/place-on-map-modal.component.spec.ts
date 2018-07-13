/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOnMapModalComponent } from './place-on-map-modal.component';

describe('PlaceOnMapModalComponent', () => {
  let component: PlaceOnMapModalComponent;
  let fixture: ComponentFixture<PlaceOnMapModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceOnMapModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOnMapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createMode', () => {
    expect(component).toBeTruthy();
  });
});
