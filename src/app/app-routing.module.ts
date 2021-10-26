import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProjectsListComponent} from './portfolio/projects-list/projects-list.component';
import {WorkComponent} from './work/work.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectDetailComponent} from './portfolio/project-detail/project-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SpeakingComponent} from './speaking/speaking.component';
import {SpeakingTalkComponent} from "./speaking/speaking-talk/speaking-talk.component";

@NgModule({
  imports: [
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent,
      data: {animationState: 'Home'}
    }, {
      path: 'work',
      component: WorkComponent,
      data: {animationState: 'Work'}
    }, {
      path: 'portfolio',
      component: ProjectsListComponent,
      data: {animationState: 'Portfolio'}
    }, {
      path: 'portfolio/website',
      component: ProjectDetailComponent,
      data: {slug: 'website'}
    }, {
      path: 'portfolio/sprint-planning-timer',
      component: ProjectDetailComponent,
      data: {slug: 'sprint-planning-timer'}
    }, {
      path: 'portfolio/gymrattrax',
      component: ProjectDetailComponent,
      data: {slug: 'gymrattrax'}
    }, {
      path: 'portfolio/hash-it-out',
      component: ProjectDetailComponent,
      data: {slug: 'hash-it-out'}
    }, {
      path: 'portfolio/bookshop',
      component: ProjectDetailComponent,
      data: {slug: 'bookshop'}
    }, {
      path: 'portfolio/physics-units',
      component: ProjectDetailComponent,
      data: {slug: 'physics-units'}
    }, {
      path: 'speaking',
      component: SpeakingComponent,
      data: {animationState: 'Speaking'}
    }, {
      path: 'speaking/technical-debt',
      component: SpeakingTalkComponent
    }, {
      path: 'contact',
      component: ContactComponent,
      data: {animationState: 'Contact'}
    }, {
      path: '**',
      redirectTo: '/'
    }]),
    BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
