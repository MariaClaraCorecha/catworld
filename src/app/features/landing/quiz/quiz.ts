import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuizBadge, QuizDefinition, QuizId, QuizService } from '../../../core/services/quiz';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
})
export class Quiz implements OnInit {
  private quizService = inject(QuizService);
  private router = inject(Router);
  authService = inject(AuthService);

  @ViewChild('quizGoogleBtn') quizGoogleBtn!: ElementRef;
  showGoogleBtn = false;

  quizzes: QuizDefinition[] = this.quizService.getQuizzes();
  earnedBadges: Partial<Record<QuizId, QuizBadge>> = {};

  showLoginButton() {
    this.showGoogleBtn = true;

    setTimeout(() => {
      if (this.quizGoogleBtn?.nativeElement) {
        this.authService.initialize(this.quizGoogleBtn.nativeElement);
      }
    });
  }

  ngOnInit() {
    this.refreshBadges();
  }

  private refreshBadges() {
    this.earnedBadges = {};
    for (const quiz of this.quizzes) {
      const saved = this.quizService.getSavedAnswers(quiz.id);
      if (!saved) continue;
      const badge = this.quizService.getBadge(quiz.id, saved);
      if (badge) this.earnedBadges[quiz.id] = badge;
    }
  }

  isCompleted(quizId: QuizId): boolean {
    return this.quizService.getSavedAnswers(quizId) !== null;
  }

  openQuiz(quiz: QuizDefinition) {
    this.router.navigate(['/quiz', quiz.id]);
  }
}
