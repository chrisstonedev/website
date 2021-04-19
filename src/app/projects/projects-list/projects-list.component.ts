import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectsService } from '../projects.service';
import { Project } from '../project';

@Component({
  selector: 'app-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsListComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  activatedRoute: ActivatedRoute;
  projectsService: ProjectsService;
  filterOpenSource = false;

  constructor(
    activatedRoute: ActivatedRoute,
    projectsService: ProjectsService
  ) {
    this.activatedRoute = activatedRoute;
    this.projectsService = projectsService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => {
      this.projects = this.projectsService.getProjects();
      this.filteredProjects = this.projectsService.getProjects();
    });
  }

  filterChange() {
    this.filteredProjects = this.projects.filter(
      (x) => !this.filterOpenSource || x.source.length > 0
    );
  }
}
