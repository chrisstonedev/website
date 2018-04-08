import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  projects = [];
  activatedRoute: ActivatedRoute;
  projectsService: ProjectsService;

  constructor(activatedRoute: ActivatedRoute, projectsService: ProjectsService) {
    this.activatedRoute = activatedRoute;
    this.projectsService = projectsService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.projects = this.projectsService.getProjects();
      }
    );
  }
}
