import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
