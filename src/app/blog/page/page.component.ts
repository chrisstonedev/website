import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PageComponent implements OnInit {
  blogPosts = [];
  activatedRoute: ActivatedRoute;
  blogService: BlogService;

  constructor(activatedRoute: ActivatedRoute, blogService: BlogService) {
    this.activatedRoute = activatedRoute;
    this.blogService = blogService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      () => {
        this.blogPosts = this.blogService.getBlogPosts();
      }
    );
  }
}
