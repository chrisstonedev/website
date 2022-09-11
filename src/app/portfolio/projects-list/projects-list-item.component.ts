import { Component, Input, ViewEncapsulation } from '@angular/core';

import { PortfolioService } from '../portfolio.service';
import { Project } from '../project';

@Component({
  selector: 'app-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [PortfolioService],
})
export class ProjectsListItemComponent {
  @Input() project!: Project;
  projectsService: PortfolioService;

  constructor(projectsService: PortfolioService) {
    this.projectsService = projectsService;
  }
}
