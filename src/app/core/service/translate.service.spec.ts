import { TestBed } from '@angular/core/testing';

import { TranslateGeralService } from './translate.service';

describe('TranslateService', () => {
  let service: TranslateGeralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateGeralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
