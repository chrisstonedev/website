import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BlogComponent} from './blog.component';
import {BlogPostComponent} from "./blog-post/blog-post.component";

const routes: Routes = [
  {
    path: ':slug',
    component: BlogPostComponent,
  },
  {
    path: '',
    component: BlogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {
}

