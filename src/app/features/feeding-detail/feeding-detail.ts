import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { FeedingService, Feeding } from '../../core/services/feeding';

@Component({
  selector: 'app-feeding-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './feeding-detail.html',
  styleUrl: './feeding-detail.scss',
})
export class FeedingDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private feedingService = inject(FeedingService);

  feeding = signal<Feeding | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const found = this.feedingService.getById(id);
      found ? this.feeding.set(found) : this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}