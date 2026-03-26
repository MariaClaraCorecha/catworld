import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;

  //Detecta scroll para mudar o estilo
  @HostListener('window:scroll')
  onScroll(){
    this.scrolled = window.scrollY > 50;

  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  //Scroll suave até seção por ID
  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }

  links = [
    {label: 'Raças', id: 'racas'},
    {label: 'Cuidados', id: 'cuidados'},
    {label: 'Alimentação', id: 'alimentação'},
    {label: 'Exercícios', id: 'exercicios'},
    {label: 'Curiosidades', id: 'curiosidades'},
    {label: 'História', id: 'historia'},
  ];
}
