import { Component, ViewEncapsulation, Input } from '@angular/core';

import { ProjectsService } from '../../projects.service';
import { Project } from '../../project';

@Component({
  selector: 'app-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ProjectsService],
})
export class ProjectsListItemComponent {
  @Input() project: Project;
  projectsService: ProjectsService;

  constructor(projectsService: ProjectsService) {
    this.projectsService = projectsService;
  }
}
