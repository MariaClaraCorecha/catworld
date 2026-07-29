import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing').then((m) => m.LandingComponent),
  },
  {
    path: 'historia/:id',
    loadComponent: () =>
      import('./features/history-detail/history-detail').then((m) => m.HistoryDetailComponent),
  },
  {
    path: 'racas/:id',
    loadComponent: () =>
      import('./features/breeds-detail/breeds-detail').then((m) => m.BreedsDetailComponent),
  },
  {
    path: 'cuidados/:id',
    loadComponent: () =>
      import('./features/care-detail/care-detail').then(
        (m) => m.CareDetailComponent,
      ),
  },
  {
    path: 'alimentacao/:id',
    loadComponent: () =>
      import('./features/feeding-detail/feeding-detail').then(
        (m) => m.FeedingDetailComponent,
      ),
  },
  {
    path: 'exercicios/:id',
    loadComponent: () =>
      import('./features/exercises-detail/exercises-detail').then(
        (m) => m.ExercisesDetailComponent,
      ),
  },
  {
    path: 'curiosidades/:id',
    loadComponent: () =>
      import('./features/curiosities-detail/curiosities-detail').then(
        (m) => m.CuriositiesDetailComponent,
      ),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./features/profile/profile').then((m) => m.ProfileComponent),
  },
  {
    path: 'feedback',
    loadComponent: () =>
      import('./features/feedback/feedback').then((m) => m.FeedbackComponent),
  },
];
