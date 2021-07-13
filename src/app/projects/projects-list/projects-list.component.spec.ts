import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectsService } from '../projects.service';
import { Project } from '../project';

import { ProjectsListComponent } from './projects-list.component';

describe('ProjectsListComponent', () => {
  let component: ProjectsListComponent;
  let projectService: ProjectsService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [ProjectsService, ProjectsListComponent],
        imports: [RouterTestingModule],
      }).compileComponents();
      component = TestBed.inject(ProjectsListComponent);
      projectService = TestBed.inject(ProjectsService);
    })
  );

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ProjectsListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do something else that is good', () => {
    let projectList: Project[] = [
      {
        id: 'website',
        name: 'Website',
        platform: 'TypeScript Angular app',
        image: 'assets/website.png',
        availability: '',
        availabilityLink: '',
        source: 'https://github.com/chrisstonedev/website',
        description: '',
      },
      {
        id: 'sprint-planning-timer',
        name: 'Sprint Planning Timer',
        platform: 'Kotlin Android app',
        image: 'assets/sprintplanning.png',
        availability: '',
        availabilityLink: '',
        source:
          'https://github.com/chrisstonedev/sprint-planning-timer-android',
        description: '',
      },
      {
        id: 'transfer-plus',
        name: 'Transfer Plus',
        platform: 'C# Windows Forms app',
        image: 'assets/transferplus.png',
        availability: '',
        availabilityLink: '',
        source: '',
        description: '',
      },
      {
        id: 'self-check-in',
        name: 'Self Check-In',
        platform: 'C# WPF app',
        image: 'assets/selfcheckinuserflow.png',
        availability: '',
        availabilityLink: '',
        source: '',
        description: '',
      },
      {
        id: 'communicator',
        name: 'Communicator',
        platform: 'C# Windows Forms app',
        image: 'assets/ticketpostredesign.png',
        availability: '',
        availabilityLink: '',
        source: '',
        description: '',
      },
      {
        id: 'audit-log',
        name: 'Audit Log',
        platform: 'C# Windows Forms app',
        image: 'assets/auditlog.png',
        availability: '',
        availabilityLink: '',
        source: '',
        description: '',
      },
      {
        id: 'ticket-entry',
        name: 'Ticket Entry',
        platform: 'Visual Basic 6.0 desktop app',
        image: 'assets/ticketentry.png',
        availability: '',
        availabilityLink: '',
        source: '',
        description: '',
      },
      {
        id: 'gymrattrax',
        name: 'GymRatTrax',
        platform: 'Java Android application',
        image: 'assets/gymrattrax.png',
        availability: 'Download app',
        availabilityLink:
          'https://play.google.com/store/apps/details?id=com.gymrattrax.scheduler&hl=en',
        source: 'https://github.com/GymRatTrax/GymRatTrax-FitnessScheduler',
        description: '',
      },
      {
        id: 'hash-it-out',
        name: 'Hash It Out',
        platform: 'C# WPF app',
        image: 'assets/hashitout.png',
        availability: 'Download app',
        availabilityLink: 'assets/HashItOut.zip',
        source: 'https://github.com/chrisstonedev/hash-it-out',
        description: '',
      },
      {
        id: 'bookshop',
        name: 'Bookshop',
        platform: 'PHP web app',
        image: 'assets/bookshop.png',
        availability: '',
        availabilityLink: '',
        source: 'https://github.com/chrisstonedev/bookshop-demo',
        description: '',
      },
      {
        id: 'physics-units',
        name: 'Physics Units',
        platform: 'JavaScript web app',
        image: 'assets/physics.png',
        availability: 'Live demo',
        availabilityLink: 'projects/physics-units/demo',
        source: 'https://github.com/chrisstonedev/physics-units',
        description: '',
      },
      {
        id: 'mcls',
        name: 'MCLS, et al.',
        platform: 'HTML websites',
        image: 'assets/mcls.png',
        availability: '',
        availabilityLink: '',
        source: '',
        description: '',
      },
      {
        id: 'imminent-development',
        name: 'Imminent Development',
        platform: 'Music project',
        image: 'assets/imminentdevelopment.png',
        availability: 'Download "Time and Again"',
        availabilityLink: 'assets/timeandagain.mp3',
        source: '',
        description: '',
      },
    ];

    const projectServiceSpy = spyOn(
      projectService,
      'getProjects'
    ).and.returnValue(projectList);

    const something = component.getAllProjects();
    component.loadProjects();

    expect(projectService.getProjects).toHaveBeenCalled();
    expect(projectServiceSpy).toHaveBeenCalled();
    expect(something.length).toEqual(13);
    expect(component.projects.length).toEqual(13);
    expect(component.filteredProjects.length).toEqual(13);
  });
});
