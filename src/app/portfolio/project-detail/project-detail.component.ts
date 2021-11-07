import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PortfolioService} from '../portfolio.service';
import {Project} from '../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [PortfolioService],
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private projectsService: PortfolioService
  ) {
  }

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    const projects = this.projectsService.getProjects();
    this.project = projects.find((p) => p.id === slug);
    if (this.project === undefined) {
      this.onBack();
    }
  }

  onBack(): void {
    this.router.navigate(['portfolio']);
  }
}
