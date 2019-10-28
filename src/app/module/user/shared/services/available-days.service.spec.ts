import { TestBed } from '@angular/core/testing';

import { AvailableDaysService } from './available-days.service';

describe('AvailableDaysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailableDaysService = TestBed.get(AvailableDaysService);
    expect(service).toBeTruthy();
  });
});
