import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { ExercisesService, Exercise } from '../../core/services/exercises';
import { scrollToSection } from '../../core/utils/scroll-to-section';

@Component({
  selector: 'app-exercises-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './exercises-detail.html',
  styleUrl: './exercises-detail.scss',
})
export class ExercisesDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private exercisesService = inject(ExercisesService);

  exercise = signal<Exercise | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const found = this.exercisesService.getById(id);
      found ? this.exercise.set(found) : this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => scrollToSection('exercicios'), 300);
    });
  }
}
