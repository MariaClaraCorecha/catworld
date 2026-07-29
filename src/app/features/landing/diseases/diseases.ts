import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { DiseasesService } from '../../../core/services/diseases';

@Component({
  selector: 'app-diseases',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatRippleModule,
  ],
  templateUrl: './diseases.html',
  styleUrl: './diseases.scss',
})
export class Diseases {
  private diseasesService = inject(DiseasesService);
  private router = inject(Router);

  diseases = this.diseasesService.getAll();

  goToDetail(id: string) {
    this.router.navigate(['/doencas', id]);
  }
}
