import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { LogService } from '../log.service';

@Injectable()
export class ProjectsService {
  private projects = [{
    name: 'GymRatTrax',
    platform: 'Java Android application',
    image: 'assets/gymrattrax.png',
    availability: 'Download app',
    availabilityLink: 'https://play.google.com/store/apps/details?id=com.gymrattrax.scheduler&hl=en',
    source: 'https://github.com/GymRatTrax/GymRatTrax-FitnessScheduler',
    description: 'Started as a senior academic project, I worked as '
      + 'team leader and lead developer on this project. GymRatTrax '
      + 'is a personal fitness scheduler application made to replace '
      + 'a fitness planner with features such as adaptive suggestions, '
      + 'reverse calorie search, and robust statistics. This is the '
      + 'first Android application I have developed that has been '
      + 'published to the Google Play Store.'
  }, {
    name: 'Hash It Out',
    platform: 'C# WPF app',
    image: 'assets/hashitout.png',
    availability: 'Download app',
    availabilityLink: 'assets/HashItOut.zip',
    source: 'https://github.com/christopher-stone/hash-it-out',
    description: 'Windows application that quickly returns MD5 and '
      + 'SHA-1 checksums for any provided file. Target values can be '
      + 'copied and pasted to the side with an indicator appearing to '
      + 'quickly tell the user if the value match or not.'
  }, {
    name: 'Bookshop',
    platform: 'PHP web app',
    image: 'assets/bookshop.png',
    availability: 'Live demo',
    availabilityLink: 'http://cjstone.net/bookshop/',
    source: '',
    description: 'The design of an online store with inventory and '
      + 'checkout functionality with secure registration and login '
      + 'procedures. Data integrity and user security are maintained '
      + 'while preventing common vulnerabilities (e.g. SQLI and XSS).'
  }, {
    name: 'Physics Units',
    platform: 'JavaScript web app',
    image: 'assets/physics.png',
    availability: 'Live demo',
    availabilityLink: 'http://cjstone.net/physics/',
    source: '',
    description: 'A simple web tool in which basic SI units, such as '
      + 'kilograms and meters, can be multiplied and divided to '
      + 'reveal advanced derived units, such as Newtons and Joules. '
      + 'When derived units are discovered, they can be used '
      + 'themselves as shortcuts. Keyboard shortcuts can also be used.'
  }];

  constructor() {
  }

  getProjects() {
    return this.projects.slice();
  }
}
