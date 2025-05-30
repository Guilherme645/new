import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { withoutTokenGuard } from './without-token.guard';

describe('withoutTokenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => withoutTokenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
