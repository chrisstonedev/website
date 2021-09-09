import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { animate, AnimationBuilder, AnimationFactory, group, query, style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tagline = 0;
  @ViewChild('refTaglines') refTaglines: ElementRef;
  private taglineIds: string[] = ['#tagline-puzzle', '#tagline-crafter', '#tagline-learner', '#tagline-team'];

  constructor(private animationBuilder: AnimationBuilder) {
  }

  ngOnInit(): void {
    this.toggleState();
  }

  private buildAndPlayAnimation(tagline: number) {
    let animationFactory: AnimationFactory;

    animationFactory = this.animationBuilder.build([
      group([
        query(this.taglineIds[tagline], [
          style({
            position: 'absolute',
            opacity: 1,
            top: 0,
            right: 0,
            left: 0
          }),
          animate('.5s', style({
            opacity: 0,
            visibility: 'hidden'
          })),
          style({
            top: 'auto',
            bottom: 'auto',
            right: 'auto',
            height: '*'
          })
        ]),
        query(this.taglineIds[this.nextTagline(tagline)], [
          style({
            position: 'static',
            opacity: 0,
            visibility: 'visible'
          }),
          animate('.5s', style({
            opacity: 1,
            height: '*'
          }))
        ])
      ])
    ]);

    animationFactory.create(this.refTaglines.nativeElement).play();
  }

  private toggleState() {
    const keepGoing = () => {
      this.tagline = this.nextTagline(this.tagline);
      this.buildAndPlayAnimation(this.tagline);
    };
    setInterval(keepGoing, 2000);
  }

  private nextTagline(tagline: number) {
    return (tagline + 1) % this.taglineIds.length;
  }
}
