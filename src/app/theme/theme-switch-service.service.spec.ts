import { TestBed } from '@angular/core/testing';

import { ThemeSwitchServiceService } from './theme-switch-service.service';

describe('ThemeSwitchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeSwitchServiceService = TestBed.get(ThemeSwitchServiceService);
    expect(service).toBeTruthy();
  });
});
