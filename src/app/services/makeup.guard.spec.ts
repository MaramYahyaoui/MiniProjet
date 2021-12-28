import { TestBed } from '@angular/core/testing';

import { MakeupGuard } from './makeup.guard';

describe('MakeupGuard', () => {
  let guard: MakeupGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MakeupGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
