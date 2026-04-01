import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
// @ts-ignore
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // @ts-ignore
    provideAnimationsAsync(),
  ],
};
