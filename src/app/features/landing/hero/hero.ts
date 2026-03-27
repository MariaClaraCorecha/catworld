import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,
    MatButtonModule,
    MatChipsModule
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  //Template
  headline = 'Mundo dos Gatos';
  subtitle =
    'Descubra sobre temas como raças, cuidados, alimentação e muito mais sobre seus felinos favoritos';

  //Tópicos que o site aborda
  topics = [
    { icon: '🐈', label: 'Raças' },
    { icon: '💊', label: 'Cuidados' },
    { icon: '🍖', label: 'Alimentação' },
    { icon: '🧶', label: 'Exercícios' },
    { icon: '✨', label: 'Curiosidades' },
    { icon: '📜', label: 'História' },
  ];
}
