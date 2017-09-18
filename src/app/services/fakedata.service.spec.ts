import { TestBed, inject } from '@angular/core/testing';

import { FakedataService } from './fakedata.service';

describe('FakedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakedataService]
    });
  });

  it('should be created', inject([FakedataService], (service: FakedataService) => {
    expect(service).toBeTruthy();
  }));
});
