import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { HistoryService } from '../../../core/services/history';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatRippleModule,
  ],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class HistoryComponent {
  private historyService = inject(HistoryService);
  private router = inject(Router);

  cards = this.historyService.getAll();

  goToDetail(id: string) {
    this.router.navigate(['/historia', id]);
  }
}
