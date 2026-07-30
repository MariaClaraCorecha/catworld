import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { QUIZ_STORAGE_KEY, QuizBadge, QuizQuestion, QuizService } from '../../../core/services/quiz';

type QuizStage = 'intro' | 'playing' | 'result';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatIconModule, MatRadioModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
})
export class Quiz implements OnInit {
  private quizService = inject(QuizService);

  questions: QuizQuestion[] = this.quizService.getAll();
  answers: Record<string, number | null> = Object.fromEntries(
    this.questions.map((q) => [q.id, null]),
  );
  stage: QuizStage = 'intro';
  declined = false;

  ngOnInit() {
    const saved = localStorage.getItem(QUIZ_STORAGE_KEY);
    if (!saved) return;

    const storedAnswers: Record<string, number> = JSON.parse(saved);
    this.answers = { ...this.answers, ...storedAnswers };
    this.stage = 'result';
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
    if (!this.allAnswered()) return;
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(this.answers));
    this.stage = 'result';
  }

  badges(): QuizBadge[] {
    return this.quizService.getBadges(this.answers);
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
