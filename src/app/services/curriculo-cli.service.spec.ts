import { TestBed } from '@angular/core/testing';

import { CurriculoCliService } from './curriculo-cli.service';

describe('CurriculoCliService', () => {
  let service: CurriculoCliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculoCliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
