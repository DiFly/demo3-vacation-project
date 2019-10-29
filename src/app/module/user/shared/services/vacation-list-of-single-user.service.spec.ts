import { TestBed } from '@angular/core/testing';

import { VacationListOfSingleUserService } from './vacation-list-of-single-user.service';

describe('VacationListOfSingleUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VacationListOfSingleUserService = TestBed.get(VacationListOfSingleUserService);
    expect(service).toBeTruthy();
  });
});
