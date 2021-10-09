import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

function getTransitionState(moveToTheRight: boolean) {
  return [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        ...(!moveToTheRight && { left: 0 }),
        ...(moveToTheRight && { right: 0 }),
        width: '100%'
      })
    ]),
    query(':enter', [style({
      ...(!moveToTheRight && { left: '-100%' }),
      ...(moveToTheRight && { right: '-100%' }),
      opacity: 0
    })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('1s ease-out', style({
          ...(!moveToTheRight && { left: '100%' }),
          ...(moveToTheRight && { right: '100%' }),
          opacity: 0
        }))
      ]),
      query(':enter', [
        animate('1s ease-out', style({
          ...(!moveToTheRight && { left: '0%' }),
          ...(moveToTheRight && { right: '0%' }),
          opacity: 1
        }))
      ])
    ]),
    query(':enter', animateChild())
  ];
}

export const routeTransitionAnimations = trigger('triggerName', [
  transition(
    'Home => About, Home => Projects, Home => Speaking, Home => Contact, About => Projects, About => Speaking, About => Contact, Projects => Speaking, Projects => Contact, Speaking => Contact',
    getTransitionState(true)
  ),
  transition(
    'Contact => Speaking, Contact => Projects, Contact => About, Contact => Home, Speaking => Projects, Speaking => About, Speaking => Home, Projects => About, Projects => Home, About => Home',
    getTransitionState(false)
  )
]);
