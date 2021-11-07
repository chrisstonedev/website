import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpeakingService} from "../speaking.service";
import {Talk} from "../talk";

@Component({
  selector: 'app-speaking-talk',
  templateUrl: './speaking-talk.component.html',
  styleUrls: ['./speaking-talk.component.scss']
})
export class SpeakingTalkComponent implements OnInit {
  talk: Talk;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private speakingService: SpeakingService) {
  }

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    const talks = this.speakingService.getTalks();
    this.talk = talks.find((p) => p.slug === slug);
    if (this.talk === undefined) {
      this.onBack();
    }
  }

  onBack(): void {
    this.router.navigate(['speaking']);
  }
}
