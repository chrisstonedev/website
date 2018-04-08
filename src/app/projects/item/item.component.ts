import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent implements OnInit {
  @Input() project;
  projectsService: ProjectsService;

  constructor(projectsService: ProjectsService) {
    this.projectsService = projectsService;
  }

  ngOnInit() {
  }

  openPublished() {
    this.projectsService.openLink(this.project.availabilityLink);
  }

  openSource() {
    this.projectsService.openLink(this.project.link);
  }
}
