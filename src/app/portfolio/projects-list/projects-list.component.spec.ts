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
        languages: ['TypeScript'],
        platforms: ['Angular'],
        image: {path: 'assets/website.png', alt: 'Image alt'},
        image2: null,
        image3: null,
        availability: null,
        openSourceLink: 'https://google.com',
        description: '',
      }
    ];

    const projectServiceSpy = spyOn(
      projectService,
      'getProjects'
    ).and.returnValue(projectList);

    component.loadProjectData();

    expect(projectService.getProjects).toHaveBeenCalled();
    expect(projectServiceSpy).toHaveBeenCalled();
    expect(component.projects.length).toEqual(1);
  });

  it('should load the languages list from project data', () => {
    let projectList: Project[] = [
      {
        slug: null,
        name: null,
        languages: ['TypeScript', 'C#'],
        platforms: null,
        image: null,
        image2: null,
        image3: null,
        availability: null,
        openSourceLink: null,
        description: null,
      },
      {
        slug: null,
        name: null,
        languages: ['TypeScript', 'Java'],
        platforms: null,
        image: null,
        image2: null,
        image3: null,
        availability: null,
        openSourceLink: null,
        description: null,
      }
    ];

    spyOn(projectService, 'getProjects').and.returnValue(projectList);
    component.loadProjectData();

    expect(component.languages).toEqual(['C#', 'Java', 'TypeScript']);
  });

  it('should filter projects from the language dropdown', () => {
    let projectList: Project[] = [
      {
        slug: null,
        name: 'A',
        languages: ['TypeScript', 'HTML'],
        platforms: ['Web'],
        image: null,
        image2: null,
        image3: null,
        availability: null,
        openSourceLink: null,
        description: null,
      },
      {
        slug: null,
        name: 'B',
        languages: ['TypeScript'],
        platforms: ['Windows'],
        image: null,
        image2: null,
        image3: null,
        availability: null,
        openSourceLink: null,
        description: null,
      },
      {
        slug: null,
        name: 'C',
        languages: ['C#'],
        platforms: ['Windows'],
        image: null,
        image2: null,
        image3: null,
        availability: null,
        openSourceLink: null,
        description: null,
      }
    ];

    spyOn(projectService, 'getProjects').and.returnValue(projectList);

    component.loadProjectData();
    expect(component.projects.map(x=>x.name)).toEqual(['A', 'B', 'C']);
    expect(component.filteredProjects.map(x=>x.name)).toEqual(['A', 'B', 'C']);

    component.selectedLanguage = 'TypeScript';
    component.filterChange();
    expect(component.projects.map(x=>x.name)).toEqual(['A', 'B', 'C']);
    expect(component.filteredProjects.map(x=>x.name)).toEqual(['A', 'B']);

    component.selectedPlatform = 'Windows';
    component.filterChange();
    expect(component.projects.map(x=>x.name)).toEqual(['A', 'B', 'C']);
    expect(component.filteredProjects.map(x=>x.name)).toEqual(['B']);

    component.selectedLanguage = '';
    component.filterChange();
    expect(component.projects.map(x=>x.name)).toEqual(['A', 'B', 'C']);
    expect(component.filteredProjects.map(x=>x.name)).toEqual(['B', 'C']);

    component.selectedPlatform = '';
    component.filterChange();
    expect(component.projects.map(x=>x.name)).toEqual(['A', 'B', 'C']);
    expect(component.filteredProjects.map(x=>x.name)).toEqual(['A', 'B', 'C']);
  });
});
