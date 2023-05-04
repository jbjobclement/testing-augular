import { TestBed } from '@angular/core/testing';

import { FirstAuthGuardGuard } from './first-auth-guard.guard';

describe('FirstAuthGuardGuard', () => {
  let guard: FirstAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FirstAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
