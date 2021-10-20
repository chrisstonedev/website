import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProjectsListComponent} from './portfolio/projects-list/projects-list.component';
import {WorkComponent} from './work/work.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectDetailComponent} from './portfolio/project-detail/project-detail.component';
import {PhysicsDemoComponent} from './portfolio/project-detail/physics-demo/physics-demo.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SpeakingComponent} from './speaking/speaking.component';
import {SpeakingTalkComponent} from "./speaking/speaking-talk/speaking-talk.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent, data: {animationState: 'Home'}},
      {
        path: 'work',
        component: WorkComponent,
        data: {animationState: 'Work'}
      },
      {
        path: 'portfolio',
        component: ProjectsListComponent,
        data: {animationState: 'Portfolio'}
      },
      {path: 'portfolio/:id', component: ProjectDetailComponent},
      {
        path: 'portfolio/physics-units/demo',
        component: PhysicsDemoComponent
      },
      {
        path: 'speaking',
        component: SpeakingComponent,
        data: {animationState: 'Speaking'}
      },
      {path: 'speaking/:id', component: SpeakingTalkComponent},
      {
        path: 'contact',
        component: ContactComponent,
        data: {animationState: 'Contact'}
      },
      {path: '**', redirectTo: '/'}
    ]),
    BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
