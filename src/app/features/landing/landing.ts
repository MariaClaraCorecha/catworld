import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { HistoryComponent } from './history/history';
import { BreedsComponent } from './breeds/breeds';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, BreedsComponent, HistoryComponent],
  template: `
    <app-hero />
    <app-breeds />
    <app-history />
  `,
})
export class LandingComponent {}
