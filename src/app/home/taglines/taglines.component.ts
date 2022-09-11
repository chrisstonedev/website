import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { animate, AnimationBuilder, group, query, style } from '@angular/animations';

@Component({
  selector: 'app-taglines',
  templateUrl: './taglines.component.html',
  styleUrls: ['./taglines.component.scss'],
})
export class TaglinesComponent implements OnInit {
  @Input() duration = 3000;
  currentTaglineIndex = -1;
  @ViewChild('refTaglines') refTaglines!: ElementRef;
  taglines = [
    { id: 'tagline-puzzle', text: 'Software crafter' },
    { id: 'tagline-crafter', text: 'Analytical puzzle solver' },
    { id: 'tagline-learner', text: 'Eager learner' },
    { id: 'tagline-team', text: 'Versatile team player' },
  ];

  constructor(private animationBuilder: AnimationBuilder) {
  }

  ngOnInit(): void {
    this.toggleState();
  }

  private buildAndPlayAnimation(taglineIndex: number) {
    const animationFactory = this.animationBuilder.build([
      group([
        query('#' + this.taglines[taglineIndex].id, [
          style({
            left: 0,
            opacity: 1,
            position: 'absolute',
            right: 0,
            top: 0,
          }),
          animate('.5s', style({ opacity: 0 })),
        ]),
        query('#' + this.taglines[this.nextTagline(taglineIndex)].id, [
          style({
            background: taglineIndex % 2 !== 0 ? 'var(--taglines-background-primary)' : 'var(--taglines-background-secondary)',
            opacity: 0,
            position: 'static',
            visibility: 'visible',
          }),
          animate('.5s', style({ opacity: 1 })),
        ]),
      ]),
    ]);

    animationFactory.create(this.refTaglines.nativeElement).play();
  }

  private toggleState() {
    const keepGoing = () => {
      this.currentTaglineIndex = this.nextTagline(this.currentTaglineIndex);
      this.buildAndPlayAnimation(this.currentTaglineIndex);
    };
    setInterval(keepGoing, this.duration);
  }

  private nextTagline(tagline: number) {
    return (tagline + 1) % this.taglines.length;
  }
}
