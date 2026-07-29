import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { scrollToSection } from '../../core/utils/scroll-to-section';

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
    { label: 'História', id: 'historia' },
    { label: 'Cuidados', id: 'cuidados' },
    { label: 'Alimentação', id: 'alimentacao' },
    { label: 'Exercícios', id: 'exercicios' },
    { label: 'Curiosidades', id: 'curiosidades' },
  ];

  contactEmail = 'mariaclaracorecha5@gmail.com';
  githubUrl = 'https://github.com/MariaClaraCorecha';

  constructor(private router: Router) {}

  navigateTo(sectionId: string) {
    if (this.router.url === '/') {
      scrollToSection(sectionId);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => scrollToSection(sectionId), 300);
      });
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goToFeedback() {
    this.router.navigate(['/feedback']);
  }
}
