import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidInstallSheetComponent } from './android-install-sheet.component';

describe('AndroidInstallSheetComponent', () => {
  let component: AndroidInstallSheetComponent;
  let fixture: ComponentFixture<AndroidInstallSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidInstallSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidInstallSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
