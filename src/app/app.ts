import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, Footer],
  template: `
    @if (!isQuizPlaySession) {
      <app-navbar />
    }
    <router-outlet />
    @if (!isQuizPlaySession) {
      <app-footer />
    }
  `,
})
export class AppComponent {
  isQuizPlaySession = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
        this.isQuizPlaySession = (e as NavigationEnd).urlAfterRedirects.startsWith('/quiz/');
      });
  }
}
