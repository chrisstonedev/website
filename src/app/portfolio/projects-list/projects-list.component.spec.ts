import {TestBed, waitForAsync} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {PortfolioService} from '../portfolio.service';
import {Project} from '../project';

import {ProjectsListComponent} from './projects-list.component';

describe('ProjectsListComponent', () => {
  let component: ProjectsListComponent;
  let projectService: PortfolioService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [PortfolioService, ProjectsListComponent],
        imports: [RouterTestingModule],
      }).compileComponents();
      component = TestBed.inject(ProjectsListComponent);
      projectService = TestBed.inject(PortfolioService);
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all projects', () => {
    let projectList: Project[] = [
      {
        slug: 'website',
        name: 'Website',
        platform: 'TypeScript Angular app',
        image: {path: 'assets/website.png', alt: 'Image alt'},
        availability: null,
        openSourceLink: 'https://google.com',
        description: '',
      }
    ];

    const projectServiceSpy = spyOn(
      projectService,
      'getProjects'
    ).and.returnValue(projectList);

    const something = component.getAllProjects();
    component.loadProjects();

    expect(projectService.getProjects).toHaveBeenCalled();
    expect(projectServiceSpy).toHaveBeenCalled();
    expect(something.length).toEqual(1);
    expect(component.projects.length).toEqual(1);
  });
});
