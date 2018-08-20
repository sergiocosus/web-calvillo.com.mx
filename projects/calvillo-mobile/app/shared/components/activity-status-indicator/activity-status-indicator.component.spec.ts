import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStatusIndicatorComponent } from './activity-status-indicator.component';

describe('ActivityStatusIndicatorComponent', () => {
  let component: ActivityStatusIndicatorComponent;
  let fixture: ComponentFixture<ActivityStatusIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityStatusIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityStatusIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
