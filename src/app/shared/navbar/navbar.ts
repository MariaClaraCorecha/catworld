import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;
  isHomePage = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.isHomePage = e.urlAfterRedirects === '/';
        this.menuOpen = false;
      });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateTo(sectionId: string) {
    if (this.isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      this.menuOpen = false;
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      });
    }
  }

  goHome() {
    this.router.navigate(['/']);
    this.menuOpen = false;
  }

  links = [
    { label: 'Raças', id: 'racas', icon: 'pets' },
    { label: 'Cuidados', id: 'cuidados', icon: 'medical_services' },
    { label: 'Alimentação', id: 'alimentacao', icon: 'restaurant' },
    { label: 'Exercícios', id: 'exercicios', icon: 'directions_run' },
    { label: 'Curiosidades', id: 'curiosidades', icon: 'auto_awesome' },
    { label: 'História', id: 'historia', icon: 'history_edu' },
  ];
}