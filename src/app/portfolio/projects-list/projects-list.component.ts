import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PortfolioService} from '../portfolio.service';
import {Project} from '../project';

@Component({
  selector: 'app-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [PortfolioService],
})
export class ProjectsListComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedLanguage = '';
  selectedPlatform = '';
  languages: string[] = [];
  platforms: string[] = [];

  constructor(private projectsService: PortfolioService) {
  }

  ngOnInit() {
    this.loadProjectData();
  }

  loadProjectData() {
    this.projects = this.projectsService.getProjects();
    this.filteredProjects = this.projects;

    function getSortedListOfUniqueElements(arrayOfArrays: string[][]) {
      return [].concat.apply([], arrayOfArrays).filter((elem, index, self) => index === self.indexOf(elem))
        .sort();
    }

    this.languages = getSortedListOfUniqueElements(this.projects.map(x => x.languages));
    this.platforms = getSortedListOfUniqueElements(this.projects.map(x => x.platforms));
  }

  filterChange() {
    this.filteredProjects = this.projects.filter(
      x => {
        if (this.selectedLanguage.length > 0 && this.selectedPlatform.length > 0)
          return x.languages.includes(this.selectedLanguage) && x.platforms.includes(this.selectedPlatform);
        if (this.selectedLanguage.length > 0)
          return x.languages.includes(this.selectedLanguage);
        if (this.selectedPlatform.length > 0)
          return x.platforms.includes(this.selectedPlatform);
        return x;
      }
    );
  }
}
