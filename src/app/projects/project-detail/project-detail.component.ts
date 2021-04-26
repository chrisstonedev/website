import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectsService],
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const projects = this.projectsService.getProjects();
    this.project = projects.find((p) => p.id === id);
    if (this.project === undefined) {
      this.onBack();
    }
  }

  onBack(): void {
    this.router.navigate(['projects']);
  }
}
