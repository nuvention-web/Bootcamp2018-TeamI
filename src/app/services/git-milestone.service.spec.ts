import { TestBed, inject } from '@angular/core/testing';

import { GitIssuesService } from './git-miletstone.service';

describe('GitIssuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitIssuesService]
    });
  });

  it('should be created', inject([GitIssuesService], (service: GitIssuesService) => {
    expect(service).toBeTruthy();
  }));
});
