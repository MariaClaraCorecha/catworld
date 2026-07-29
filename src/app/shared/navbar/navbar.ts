import { Component, HostListener, OnInit, ElementRef, ViewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth';
import { scrollToSection } from '../../core/utils/scroll-to-section';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent implements OnInit {
  @ViewChild('googleBtn') googleBtn!: ElementRef;

  scrolled = false;
  menuOpen = false;
  isHomePage = true;
  showGoogleBtn = false;
  avatarError = false;

  constructor(
    private router: Router,
    public authService: AuthService,
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.isHomePage = e.urlAfterRedirects === '/';
        this.menuOpen = false;
      });

    effect(() => {
      this.authService.user();
      this.avatarError = false;
    });
  }

  ngOnInit() {

    this.authService.restoreSession();
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
      scrollToSection(sectionId);
      this.menuOpen = false;
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => scrollToSection(sectionId), 300);
      });
    }
  }

  goHome() {
    this.router.navigate(['/']);
    this.menuOpen = false;
  }

  goToProfile() {
    this.router.navigate(['/perfil']);
    this.menuOpen = false;
  }

  goToFeedback() {
    this.router.navigate(['/feedback']);
    this.menuOpen = false;
  }

  showLoginButton() {
    this.showGoogleBtn = true;

    setTimeout(() => {
      if (this.googleBtn?.nativeElement) {
        this.authService.initialize(this.googleBtn.nativeElement);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.menuOpen = false;
  }

  links = [
    { label: 'Raças', id: 'racas', icon: 'pets' },
    { label: 'História', id: 'historia', icon: 'history_edu' },
    { label: 'Cuidados', id: 'cuidados', icon: 'medical_services' },
    { label: 'Alimentação', id: 'alimentacao', icon: 'restaurant' },
    { label: 'Exercícios', id: 'exercicios', icon: 'directions_run' },
    { label: 'Curiosidades', id: 'curiosidades', icon: 'auto_awesome' },
  ];
}