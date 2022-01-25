import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PortfolioService} from '../portfolio.service';
import {Project} from '../project';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [PortfolioService],
})
export class ProjectsListComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedLanguage = '';
  selectedPlatform = '';
  selectedLibrary = '';
  languages: string[] = [];
  platforms: string[] = [];
  libraries: string[] = [];
  sortOptions = ['Recently updated', 'Most commits', 'Recently created', 'Alphabetical'];
  selectedSortOption = this.sortOptions[0];

  constructor(private projectsService: PortfolioService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Portfolio - Chris Stone');
    this.loadProjectData();
    this.filterChange();
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
    this.libraries = getSortedListOfUniqueElements(this.projects.map(x => x.libraries));
  }

  filterChange() {
    this.filteredProjects = [...this.projects].sort((a, b) => {
      switch (this.selectedSortOption) {
        case 'Recently created':
          return b.dateCreated.localeCompare(a.dateCreated);
        case 'Recently updated':
          const compareDateUpdated = b.dateUpdated.localeCompare(a.dateUpdated);
          if (compareDateUpdated !== 0)
            return compareDateUpdated;
          if (b.commits < a.commits)
            return -1;
          if (b.commits > a.commits)
            return 1;
          return 0;
        case 'Most commits':
          if (b.commits < a.commits)
            return -1;
          if (b.commits > a.commits)
            return 1;
          return 0;
        case 'Alphabetical':
          return a.name.localeCompare(b.name);
      }
    }).filter(
      x => {
        let showThisProject = true;
        if (this.selectedLanguage.length > 0)
          showThisProject &&= x.languages.includes(this.selectedLanguage);
        if (this.selectedPlatform.length > 0)
          showThisProject &&= x.platforms.includes(this.selectedPlatform);
        if (this.selectedLibrary.length > 0)
          showThisProject &&= x.libraries.includes(this.selectedLibrary);
        return showThisProject;
      }
    );
  }
}
