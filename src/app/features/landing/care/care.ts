import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { CareService } from '../../../core/services/care';

@Component({
  selector: 'app-care',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatRippleModule,
  ],
  templateUrl: './care.html',
  styleUrl: './care.scss',
})
export class CareComponent {
  private careService = inject(CareService);
  private router = inject(Router);

  cares = this.careService.getAll();

  goToDetail(id: string) {
    this.router.navigate(['/cuidados', id]);
  }
}
