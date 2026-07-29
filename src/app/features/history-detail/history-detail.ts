import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { HistoryService, HistoryCard } from '../../core/services/history';
import { scrollToSection } from '../../core/utils/scroll-to-section';

@Component({
  selector: 'app-history-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatChipsModule, MatDividerModule],
  templateUrl: './history-detail.html',
  styleUrl: './history-detail.scss',
})
export class HistoryDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private historyService = inject(HistoryService);

  card = signal<HistoryCard | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const found = this.historyService.getById(id);
      found ? this.card.set(found) : this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => scrollToSection('historia'), 300);
    });
  }
}