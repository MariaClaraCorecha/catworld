import { Component, HostListener, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { QuizBadge, QuizDefinition, QuizId, QuizQuestion, QuizService } from '../../core/services/quiz';
import { AuthService } from '../../core/services/auth';
import { QuizCanDeactivate } from '../../core/guards/quiz-can-deactivate.guard';

type QuizStage = 'intro' | 'playing' | 'result';

@Component({
  selector: 'app-quiz-play',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatIconModule, MatRadioModule, MatTooltipModule],
  templateUrl: './quiz-play.html',
  styleUrl: './quiz-play.scss',
})
export class QuizPlayComponent implements OnInit, QuizCanDeactivate {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private quizService = inject(QuizService);
  authService = inject(AuthService);

  quiz: QuizDefinition | null = null;
  questions: QuizQuestion[] = [];
  answers: Record<string, number | null> = {};
  stage: QuizStage = 'intro';
  declined = false;

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
      return;
    }

    const quizId = this.route.snapshot.paramMap.get('quizId') as QuizId | null;
    const quiz = this.quizService.getQuizzes().find((q) => q.id === quizId);
    if (!quiz) {
      this.router.navigate(['/']);
      return;
    }

    this.quiz = quiz;
    this.questions = this.quizService.getQuestions(quiz.id);

    const saved = this.quizService.getSavedAnswers(quiz.id);
    if (saved) {
      this.answers = Object.fromEntries(this.questions.map((q) => [q.id, saved[q.id] ?? null]));
      this.stage = 'result';
    } else {
      this.answers = Object.fromEntries(this.questions.map((q) => [q.id, null]));
      this.stage = 'intro';
    }
  }

  canDeactivate(): boolean {
    if (this.stage !== 'playing') return true;
    return confirm('Tem certeza que deseja sair? Suas respostas serão perdidas.');
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent) {
    if (this.stage === 'playing') {
      event.preventDefault();
      event.returnValue = '';
    }
  }

  close() {
    this.router.navigate(['/']);
  }

  askToStart() {
    this.declined = false;
  }

  confirmStart() {
    this.stage = 'playing';
  }

  declineStart() {
    this.declined = true;
  }

  allAnswered(): boolean {
    return this.questions.every((q) => this.answers[q.id] !== null);
  }

  isCorrect(question: QuizQuestion): boolean {
    return this.answers[question.id] === question.correctIndex;
  }

  score(): number {
    return this.questions.filter((q) => this.isCorrect(q)).length;
  }

  submitQuiz() {
    if (!this.quiz || !this.allAnswered()) return;
    this.quizService.saveAnswers(this.quiz.id, this.answers);
    this.stage = 'result';
  }

  quizBadge(): QuizBadge | null {
    if (!this.quiz) return null;
    return this.quizService.getBadge(this.quiz.id, this.answers);
  }

  resultIcon(): string {
    const ratio = this.score() / this.questions.length;
    if (ratio === 1) return 'emoji_events';
    if (ratio >= 0.6) return 'sentiment_satisfied';
    return 'sentiment_dissatisfied';
  }

  resultMessage(): string {
    const ratio = this.score() / this.questions.length;
    if (ratio === 1) return 'Perfeito! Você é um verdadeiro especialista em gatos!';
    if (ratio >= 0.6) return 'Muito bem! Você entende bastante sobre gatos.';
    return 'Vale a pena explorar mais sobre o mundo felino!';
  }
}
