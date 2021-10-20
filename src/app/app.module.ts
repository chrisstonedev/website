import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {PortfolioService} from './portfolio/portfolio.service';
import {ProjectsListComponent} from './portfolio/projects-list/projects-list.component';
import {ProjectsListItemComponent} from './portfolio/projects-list/projects-list-item/projects-list-item.component';
import {WorkComponent} from './work/work.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectDetailComponent} from './portfolio/project-detail/project-detail.component';
import {PhysicsDemoComponent} from './portfolio/project-detail/physics-demo/physics-demo.component';
import {SpeakingComponent} from './speaking/speaking.component';
import {SpeakingTalkComponent} from './speaking/speaking-talk/speaking-talk.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectsListItemComponent,
    HeaderComponent,
    HomeComponent,
    WorkComponent,
    ContactComponent,
    ProjectDetailComponent,
    PhysicsDemoComponent,
    SpeakingComponent,
    SpeakingTalkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
