import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { BreedsService } from '../../../core/services/breeds';

@Component({
  selector: 'app-breeds',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatRippleModule,
  ],
  templateUrl: './breeds.html',
  styleUrl: './breeds.scss',
})
export class BreedsComponent {
  private breedsService = inject(BreedsService);
  private router = inject(Router);

  breeds = this.breedsService.getAll();

  goToDetail(id: string) {
    this.router.navigate(['/racas', id]);
  }
}
