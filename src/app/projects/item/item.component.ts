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

  goToGitHub() {
    this.projectsService.onSideChosen(this.project.link);
  }
}
