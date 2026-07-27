import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { CuriositiesService } from '../../../core/services/curiosities';

@Component({
  selector: 'app-curiosities',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatRippleModule,
  ],
  templateUrl: './curiosities.html',
  styleUrl: './curiosities.scss',
})
export class Curiosities {
  private curiositiesService = inject(CuriositiesService);
  private router = inject(Router);

  curiosities = this.curiositiesService.getAll();

  goToDetail(id: string) {
    this.router.navigate(['/curiosidades', id]);
  }
}
