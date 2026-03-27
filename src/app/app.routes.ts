import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing').then((m) => m.LandingComponent),
  },
  {
    path: 'historia/:id',
    loadComponent: () =>
      import('./features/history-detail/history-detail').then(
        (m) => m.HistoryDetailComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
