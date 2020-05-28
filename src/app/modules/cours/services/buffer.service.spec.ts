import { TestBed } from '@angular/core/testing';

import { BufferService } from './buffer.service';

describe('BufferService', () => {
  let service: BufferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BufferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
