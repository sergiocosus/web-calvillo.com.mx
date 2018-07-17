import { TestBed, inject } from '@angular/core/testing';

import { SideDrawerService } from './side-drawer.service';

describe('SideDrawerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideDrawerService]
    });
  });

  it('should be created', inject([SideDrawerService], (service: SideDrawerService) => {
    expect(service).toBeTruthy();
  }));
});
