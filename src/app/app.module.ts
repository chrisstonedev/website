import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogService } from './log.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsService } from './projects/projects.service';
import { ListComponent } from './projects/list/list.component';
import { ItemComponent } from './projects/item/item.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './blog/page/page.component';
import { PostComponent } from './blog/post/post.component';
import { BlogService } from './blog/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LogService,
    ProjectsService,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
