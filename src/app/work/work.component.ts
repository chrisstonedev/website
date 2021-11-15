import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Work - Chris Stone');
  }
}
