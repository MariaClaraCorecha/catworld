import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { DiseasesService, Disease } from '../../core/services/diseases';
import { scrollToSection } from '../../core/utils/scroll-to-section';

@Component({
  selector: 'app-diseases-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './diseases-detail.html',
  styleUrl: './diseases-detail.scss',
})
export class DiseasesDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private diseasesService = inject(DiseasesService);

  disease = signal<Disease | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const found = this.diseasesService.getById(id);
      found ? this.disease.set(found) : this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => scrollToSection('doencas'), 300);
    });
  }
}
