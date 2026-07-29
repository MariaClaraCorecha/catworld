import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { CareService, Care } from '../../core/services/care';
import { scrollToSection } from '../../core/utils/scroll-to-section';

@Component({
  selector: 'app-care-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './care-detail.html',
  styleUrl: './care-detail.scss',
})
export class CareDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private careService = inject(CareService);

  care = signal<Care | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const found = this.careService.getById(id);
      found ? this.care.set(found) : this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => scrollToSection('cuidados'), 300);
    });
  }
}