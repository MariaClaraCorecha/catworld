import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { HistoryComponent } from './history/history';
import { BreedsComponent } from './breeds/breeds';
import { CareComponent } from './care/care';
import { FeedingComponent } from './feeding/feeding';
import { Exercises } from './exercises/exercises';
import { Curiosities } from './curiosities/curiosities';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroComponent,
    BreedsComponent,
    HistoryComponent,
    CareComponent,
    FeedingComponent,
    Exercises,
    Curiosities,
  ],
  template: `
    <app-hero />
    <app-breeds />
    <app-history />
    <app-care />
    <app-feeding />
    <app-exercises />
    <app-curiosities />
  `,
})
export class LandingComponent {}
