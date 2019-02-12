import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { LogService } from '../log.service';

@Injectable()
export class BlogService {
  private blogPosts = [
    // {
    //   title: '',
    //   date: '',
    //   content: ''
    // }
  ];

  constructor() {
  }

  getBlogPosts() {
    return this.blogPosts.slice();
  }
}
