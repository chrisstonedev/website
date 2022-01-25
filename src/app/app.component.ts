import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {PortfolioService} from './portfolio/portfolio.service';
import {routeTransitionAnimations} from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PortfolioService],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  projectsService: PortfolioService;

  constructor(projectsService: PortfolioService) {
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
