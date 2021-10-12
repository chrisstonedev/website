import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-speaking-talk',
  templateUrl: './speaking-talk.component.html',
  styleUrls: ['./speaking-talk.component.scss']
})
export class SpeakingTalkComponent implements OnInit {
  firstTalk = 'technical-debt';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== this.firstTalk) {
      this.onBack();
    }
  }

  onBack(): void {
    this.router.navigate(['speaking']);
  }
}
