import { CanDeactivateFn } from '@angular/router';

export interface QuizCanDeactivate {
  canDeactivate: () => boolean;
}

export const quizCanDeactivateGuard: CanDeactivateFn<QuizCanDeactivate> = (component) =>
  component.canDeactivate();
