import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectsService } from '../projects.service';
import { Project } from '../project';

@Component({
  selector: 'app-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ProjectsService],
})
export class ProjectsListComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  filterOpenSource = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectsService: ProjectsService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => {
      this.loadProjects();
    });
  }

  loadProjects() {
    this.projects = this.projectsService.getProjects();
    this.filteredProjects = this.projectsService.getProjects();
  }

  getAllProjects(): Project[] {
    return this.projectsService.getProjects();
  }

  filterChange() {
    this.filteredProjects = this.projects.filter(
      (x) => !this.filterOpenSource || x.source.length > 0
    );
  }
}
