import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { scrollToSection } from '../../../core/utils/scroll-to-section';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  headline = 'Mundo dos Gatos';
  subtitle =
    'Descubra sobre temas como raças, cuidados, alimentação e muito mais sobre seus felinos favoritos';

  topics = [
    { icon: 'pets', label: 'Raças', id: 'racas' },
    { icon: 'history_edu', label: 'História', id: 'historia' },
    { icon: 'medical_services', label: 'Cuidados', id: 'cuidados' },
    { icon: 'restaurant', label: 'Alimentação', id: 'alimentacao' },
    { icon: 'directions_run', label: 'Exercícios', id: 'exercicios' },
    { icon: 'local_hospital', label: 'Doenças', id: 'doencas' },
    { icon: 'auto_awesome', label: 'Curiosidades', id: 'curiosidades' },
  ];

  explore() {
    scrollToSection('racas');
  }

  goToTopic(sectionId: string) {
    scrollToSection(sectionId);
  }
}
