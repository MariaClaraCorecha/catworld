import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

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
    { icon: 'pets', label: 'Raças' },
    { icon: 'medical_services', label: 'Cuidados' },
    { icon: 'restaurant', label: 'Alimentação' },
    { icon: 'directions_run', label: 'Exercícios' },
    { icon: 'auto_awesome', label: 'Curiosidades' },
    { icon: 'history_edu', label: 'História' },
  ];

  explore() {
    document.getElementById('racas')?.scrollIntoView({ behavior: 'smooth' });
  }
}
