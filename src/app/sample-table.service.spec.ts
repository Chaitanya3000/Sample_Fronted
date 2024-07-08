import { TestBed } from '@angular/core/testing';

import { SampleTableService } from './sample-table.service';

describe('SampleTableService', () => {
  let service: SampleTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
