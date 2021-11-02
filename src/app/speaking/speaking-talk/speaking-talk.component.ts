import {Component, OnInit} from '@angular/core';
import {ApiService, Conference} from "../../api.service";

@Component({
  selector: 'app-speaking-talk',
  templateUrl: './speaking-talk.component.html',
  styleUrls: ['./speaking-talk.component.scss']
})
export class SpeakingTalkComponent implements OnInit {
  conferences: Conference[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getConferences().subscribe(x => this.conferences = x);
  }

  getUrl(name: string) {
    if (name.startsWith('Atlanta'))
      return 'https://atlantacodecamp.com/2021';
    else
      return 'https://www.utahgeekevents.com/events/big-mountain-data-dev-2021/';
  }
}
