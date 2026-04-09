import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { FeedingService } from '../../../core/services/feeding';

@Component({
  selector: 'app-feeding',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatRippleModule,
  ],
  templateUrl: './feeding.html',
  styleUrl: './feeding.scss',
})
export class FeedingComponent {
  private feedingService = inject(FeedingService);
  private router = inject(Router);

  feedings = this.feedingService.getAll();

  goToDetail(id: string) {
    this.router.navigate(['/alimentacao', id]);
  }
}