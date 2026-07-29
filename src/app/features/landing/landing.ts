import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { HistoryComponent } from './history/history';
import { BreedsComponent } from './breeds/breeds';
import { CareComponent } from './care/care';
import { FeedingComponent } from './feeding/feeding';
import { Exercises } from './exercises/exercises';
import { Diseases } from './diseases/diseases';
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
    Diseases,
    Curiosities,
  ],
  template: `
    <app-hero />
    <app-breeds />
    <app-history />
    <app-care />
    <app-feeding />
    <app-exercises />
    <app-diseases />
    <app-curiosities />
  `,
})
export class LandingComponent {}
