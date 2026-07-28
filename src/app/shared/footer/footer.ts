import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  year = new Date().getFullYear();

  links = [
    { label: 'Raças', id: 'racas' },
    { label: 'Cuidados', id: 'cuidados' },
    { label: 'Alimentação', id: 'alimentacao' },
    { label: 'Exercícios', id: 'exercicios' },
    { label: 'Curiosidades', id: 'curiosidades' },
    { label: 'História', id: 'historia' },
  ];

  constructor(private router: Router) {}

  navigateTo(sectionId: string) {
    if (this.router.url === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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
  }
}
