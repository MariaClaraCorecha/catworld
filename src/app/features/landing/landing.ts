import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { HistoryComponent } from './history/history';
import { BreedsComponent } from './breeds/breeds';
import { CareComponent } from './care/care';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, BreedsComponent, HistoryComponent, CareComponent],
  template: `
    <app-hero />
    <app-breeds />
    <app-history />
    <app-care />
  `,
})
export class LandingComponent {}
