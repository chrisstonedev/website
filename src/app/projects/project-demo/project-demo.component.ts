import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-demo',
  templateUrl: './project-demo.component.html',
  styleUrls: ['./project-demo.component.css'],
})
export class ProjectDemoComponent implements OnInit {
  id: string;
  urlSafe: SafeResourceUrl;

  constructor(
    public sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const projects = this.projectsService.getProjects();
    const project = projects.find((p) => p.id === this.id);
    if (project === undefined || project.availability !== 'Live demo') {
      this.onBack();
    }
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
      '/assets/' + this.id + '/index.html'
    );
  }

  // id: string;

  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private router: Router,
  //   private projectsService: ProjectsService
  // ) {}

  // ngOnInit(): void {
  //   this.id = this.activatedRoute.snapshot.paramMap.get('id');
  //   const projects = this.projectsService.getProjects();
  //   const project = projects.find((p) => p.id === this.id);
  //   if (project === undefined || project.availability !== 'Live demo') {
  //     this.onBack();
  //   }
  // }

  onBack(): void {
    this.router.navigate(['projects']);
  }
}
