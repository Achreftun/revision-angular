import { TestBed } from '@angular/core/testing';

import { AdresseService } from './adresse.service';

describe('AdresseService', () => {
  let service: AdresseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdresseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
