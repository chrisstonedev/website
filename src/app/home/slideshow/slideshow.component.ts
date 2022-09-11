import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { animate, AnimationBuilder, group, query, style } from '@angular/animations';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  @Input() duration = 3000;
  currentImageIndex = -1;
  @ViewChild('refSlideshow') refSlideshow!: ElementRef;
  images = [
    { id: 'pro-2022', imageSource: '/assets/profile/pro-2022.webp', imageAlt: 'Photo of Chris Stone taken in 2022' },
    { id: 'pro-2021', imageSource: '/assets/profile/pro-2021.webp', imageAlt: 'Photo of Chris Stone taken in 2021' },
    { id: 'ponytail', imageSource: '/assets/profile/ponytail.webp', imageAlt: 'Chris Stone with hair pulled back' },
    { id: 'pro-2020', imageSource: '/assets/profile/pro-2020.webp', imageAlt: 'Photo of Chris Stone taken in 2020' },
  ];

  constructor(private animationBuilder: AnimationBuilder) {
  }

  ngOnInit(): void {
    this.toggleState();
  }

  private buildAndPlayAnimation(imageIndex: number) {
    const animationFactory = this.animationBuilder.build([
      group([
        query('#' + this.images[imageIndex].id, [
          style({
            left: 0,
            opacity: 1,
            position: 'absolute',
            right: 0,
            top: 0,
          }),
          animate('.5s', style({ opacity: 0 })),
        ]),
        query('#' + this.images[this.nextImage(imageIndex)].id, [
          style({
            opacity: 0,
            position: 'static',
            visibility: 'visible',
          }),
          animate('.5s', style({ opacity: 1 })),
        ]),
      ]),
    ]);

    animationFactory.create(this.refSlideshow.nativeElement).play();
  }

  private toggleState() {
    const keepGoing = () => {
      this.currentImageIndex = this.nextImage(this.currentImageIndex);
      this.buildAndPlayAnimation(this.currentImageIndex);
    };
    setInterval(keepGoing, this.duration);
  }

  private nextImage(image: number) {
    return (image + 1) % this.images.length;
  }
}
