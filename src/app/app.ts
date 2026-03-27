import { Component } from '@angular/core';
import { HeroComponent } from './features/landing/hero/hero';
import { NavbarComponent } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, NavbarComponent],
  template: ` <app-hero /> <app-navbar/>`,
})
export class AppComponent {
  
}
