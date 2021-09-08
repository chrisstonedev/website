import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProjectsService } from './projects/projects.service';
import { routeTransitionAnimations } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectsService],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  projectsService: ProjectsService;

  constructor(projectsService: ProjectsService) {
    this.projectsService = projectsService;
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
    );
  }
}
