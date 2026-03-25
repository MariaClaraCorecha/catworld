import { Component } from '@angular/core';
import { HeroComponent } from './features/landing/hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent],
  template: ` <app-hero /> `,
})
export class AppComponent {
  
}
