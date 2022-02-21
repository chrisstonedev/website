import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScullyLibModule} from '@scullyio/ng-lib';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {WorkComponent} from './work/work.component';
import {ProjectsListComponent} from './portfolio/projects-list/projects-list.component';
import {ProjectsListItemComponent} from './portfolio/projects-list/projects-list-item.component';
import {ProjectDetailComponent} from './portfolio/project-detail/project-detail.component';
import {SpeakingComponent} from './speaking/speaking-list/speaking.component';
import {SpeakingTalkComponent} from './speaking/speaking-talk/speaking-talk.component';
import {ContactComponent} from './contact/contact.component';
import {AppRoutingModule} from './app-routing.module';
import {PortfolioService} from './portfolio/portfolio.service';
import {ConferenceListComponent} from './speaking/speaking-talk/conference-list/conference-list.component';
import {TaglinesComponent} from './home/taglines/taglines.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorkComponent,
    ProjectsListComponent,
    ProjectsListItemComponent,
    ProjectDetailComponent,
    SpeakingComponent,
    SpeakingTalkComponent,
    ContactComponent,
    ConferenceListComponent,
    TaglinesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ScullyLibModule,
  ],
  providers: [PortfolioService, Title],
  bootstrap: [AppComponent],
})
export class AppModule {
}
