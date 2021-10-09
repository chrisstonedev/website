import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { PhysicsDemoComponent } from './projects/project-detail/physics-demo/physics-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpeakingComponent } from './speaking/speaking.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: { animationState: 'Home' } },
      {
        path: 'about',
        component: AboutComponent,
        data: { animationState: 'About' }
      },
      {
        path: 'projects',
        component: ProjectsListComponent,
        data: { animationState: 'Projects' }
      },
      { path: 'projects/:id', component: ProjectDetailComponent },
      {
        path: 'projects/physics-units/demo',
        component: PhysicsDemoComponent
      },
      {
        path: 'speaking',
        component: SpeakingComponent,
        data: { animationState: 'Speaking' }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: { animationState: 'Contact' }
      },
      { path: '**', redirectTo: '/' }
    ]),
    BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
