import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsService } from './projects/projects.service';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsListItemComponent } from './projects/projects-list/projects-list-item/projects-list-item.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { PhysicsDemoComponent } from './projects/project-detail/physics-demo/physics-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectsListItemComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectDetailComponent,
    PhysicsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
