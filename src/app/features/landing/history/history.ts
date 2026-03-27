import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HistoryCard{
  period: string;
  year: string;
  title: string;
  text: string;
  image: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class HistoryComponent {
  cards: HistoryCard[] = [
    {
      period: 'Egito Antigo',
      year: '4.000 a.C.',
      title: 'Os gatos como divindades',
      text: 'No Egito Antigo, os gatos eram considerados sagrados e associados à deusa Bastet, protetora do lar e da fertilidade. Matar um gato, mesmo acidentalmente, era punido com a morte. Eram mumificados e enterrados com seus donos.',
      image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600&q=80',
    },
    {
      period: 'Grécia e Roma',
      year: '500 a.C.',
      title: 'Guardiões dos celeiros',
      text: 'Gregos e romanos valorizavam os gatos pelo papel prático de caçadores de ratos e roedores nos celeiros e navios. Eram comercializados por toda a Europa e chegaram a ser símbolo de liberdade na Roma Antiga.',
      image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=600&q=80',
    },
    {
      period: 'Idade Média',
      year: '500 d.C.',
      title: 'Perseguição e superstição',
      text: 'Na Europa medieval, os gatos — especialmente os pretos — foram associados à bruxaria e ao diabo pela Igreja Católica. Foram perseguidos em massa, o que ironicamente contribuiu para a explosão das populações de ratos e a propagação da Peste Negra.',
      image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=600&q=80',
    },
    {
      period: 'Japão Feudal',
      year: '700 d.C.',
      title: 'O Maneki-neko e a boa sorte',
      text: 'No Japão, os gatos eram criados nos templos budistas para proteger os manuscritos sagrados dos ratos. Surgiu o famoso Maneki-neko, o "gato da sorte" com a pata levantada, símbolo de prosperidade que existe até hoje.',
      image: 'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?w=600&q=80',
    },
    {
      period: 'Era das Navegações',
      year: '1.400 d.C.',
      title: 'Navegadores e exploradores',
      text: 'Durante as grandes navegações europeias, gatos eram companheiros indispensáveis nos navios, controlando pragas que destruíam alimentos e cabos. Foram assim espalhados por todos os continentes, acompanhando colonizadores e comerciantes.',
      image: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=600&q=80',
    },
    {
      period: 'Século XIX',
      year: '1.800 d.C.',
      title: 'Os gatos entram para a arte',
      text: 'Com o romantismo e o simbolismo, os gatos tornaram-se musas de pintores e escritores. Autores como Edgar Allan Poe, Baudelaire e Victor Hugo eram apaixonados por felinos. As primeiras exposições de gatos foram realizadas em Londres em 1871.',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80',
    },
    {
      period: 'Século XX',
      year: '1.900 d.C.',
      title: 'Do cinema ao espaço',
      text: 'Os gatos conquistaram o cinema, os quadrinhos e até o espaço. Em 1963, a gata Félicette foi o primeiro felino enviado ao espaço pela França. Personagens como Tom, o Gato Félix e Hello Kitty tornaram os gatos ícones da cultura pop mundial.',
      image: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=600&q=80',
    },
    {
      period: 'Era Digital',
      year: '2000 — hoje',
      title: 'Os reis da internet',
      text: 'Os gatos dominaram a internet. Do Grumpy Cat ao Nyan Cat, passando por milhões de vídeos virais, estima-se que gatos sejam os animais mais fotografados e filmados da história. Hoje são estimados em mais de 600 milhões de felinos domésticos no mundo.',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    },
  ];

  selectedCard: HistoryCard | null = null;

  openCard(card: HistoryCard) {
    this.selectedCard = card;
  }

  closeCard() {
    this.selectedCard = null;
  }
}
