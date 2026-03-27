import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbar, MatIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }

  links = [
    { label: 'Raças', id: 'racas' },
    { label: 'Cuidados', id: 'cuidados' },
    { label: 'Alimentação', id: 'alimentacao' },
    { label: 'Exercícios', id: 'exercicios' },
    { label: 'Curiosidades', id: 'curiosidades' },
    { label: 'História', id: 'historia' },
  ];
}
