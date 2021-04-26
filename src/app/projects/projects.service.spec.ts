import { ProjectsService } from './projects.service';

import { TestBed, waitForAsync, inject } from '@angular/core/testing';

describe('ProjectsService', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [ProjectsService],
      });
    })
  );

  it(
    'should return a Projects list with 13 users',
    waitForAsync(
      inject([ProjectsService], (service: ProjectsService) => {
        const response = service.getProjects();
        expect(response.length).toBe(13);
      })
    )
  );
});
