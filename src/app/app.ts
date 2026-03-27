import { Component } from '@angular/core';
import { HeroComponent } from './features/landing/hero/hero';
import { NavbarComponent } from './shared/navbar/navbar';
import { HistoryComponent } from './features/landing/history/history';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, NavbarComponent, HistoryComponent],
  template: ` <app-hero /> <app-navbar/> <app-history/>`,
})
export class AppComponent {
  
}
