import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Contact - Chris Stone');
  }
}
