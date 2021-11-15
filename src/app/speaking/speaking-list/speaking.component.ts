import {Component, OnInit} from '@angular/core';
import {SpeakingService} from "../speaking.service";
import {Talk} from "../talk";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.scss']
})
export class SpeakingComponent implements OnInit {
  talks: Talk[] = [];

  constructor(private speakingService: SpeakingService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Speaking - Chris Stone');
    this.loadTalks();
  }

  loadTalks() {
    this.talks = this.getAllTalks();
  }

  getAllTalks(): Talk[] {
    return this.speakingService.getTalks();
  }
}
