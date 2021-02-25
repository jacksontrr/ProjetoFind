import { TestBed } from '@angular/core/testing';

import { CurriculoProfService } from './curriculo-prof.service';

describe('CurriculoProfService', () => {
  let service: CurriculoProfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculoProfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
