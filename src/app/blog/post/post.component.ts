import { Component, ViewEncapsulation, Input } from '@angular/core';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent {
  @Input() blogPost: any;
  blogService: BlogService;

  constructor(blogService: BlogService) {
    this.blogService = blogService;
  }
}
