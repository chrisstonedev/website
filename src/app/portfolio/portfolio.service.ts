import {Injectable} from '@angular/core';
import {Project} from './project';
import projectData from '../../assets/projects-data.json';

@Injectable()
export class PortfolioService {
  private projects: Project[] = projectData;

  constructor() {
  }

  getProjects() {
    return this.projects;
  }
}
