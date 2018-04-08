import { Component } from '@angular/core';

import { ProjectsService } from './projects/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectsService: ProjectsService;

  constructor (projectsService: ProjectsService) {
    this.projectsService = projectsService;
  }
}
