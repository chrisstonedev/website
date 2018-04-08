import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { LogService } from '../log.service';

@Injectable()
export class ProjectsService {
  private projects = [
    {
      name: 'oneFreight',
      platform: '',
      availability: '',
      source: '',
      link: '',
      description: ''
    },
    {
      name: 'GymRatTrax',
      platform: '',
      availability: '',
      source: '',
      link: 'https://github.com/GymRatTrax/GymRatTrax-FitnessScheduler',
      description: ''
    }
  ];
  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getProjects() {
    return this.projects.slice();
  }

  onSideChosen(link) {
    window.open(link, '_blank');
  }
}
