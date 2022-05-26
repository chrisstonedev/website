import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PortfolioService} from '../portfolio.service';
import {Project} from '../project';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  providers: [PortfolioService],
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private projectsService: PortfolioService,
    private titleService: Title,
  ) {
  }

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    const projects = this.projectsService.getProjects();
    this.project = projects.find((p) => p.slug === slug);
    if (this.project === undefined) {
      this.onBack();
    }
    this.titleService.setTitle(this.project.name + ' - Chris Stone');
  }

  onBack(): void {
    this.router.navigate(['portfolio']);
  }
}
