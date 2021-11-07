import {Component, OnInit} from '@angular/core';
import {SpeakingService} from "../speaking.service";
import {Talk} from "../talk";

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.scss']
})
export class SpeakingComponent implements OnInit {
  talks: Talk[] = [];

  constructor(private speakingService: SpeakingService) {
  }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.talks = this.getAllTalks();
  }

  getAllTalks(): Talk[] {
    return this.speakingService.getTalks();
  }
}
