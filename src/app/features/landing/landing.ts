import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { HistoryComponent } from './history/history';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, HistoryComponent],
  template: `
    <app-hero />
    <app-history />
  `,
})
export class LandingComponent {}
