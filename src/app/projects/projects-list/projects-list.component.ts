import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsListComponent implements OnInit {
  projects = [];
  activatedRoute: ActivatedRoute;
  projectsService: ProjectsService;

  constructor(activatedRoute: ActivatedRoute, projectsService: ProjectsService) {
    this.activatedRoute = activatedRoute;
    this.projectsService = projectsService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      () => {
        this.projects = this.projectsService.getProjects();
      }
    );
  }
}
