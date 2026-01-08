import { Routes } from '@angular/router';

import { Start } from './lib-frontend/start/start';

export const routes: Routes = [
  { path: '', component: Start },

  { path: 'start', component: Start },

  { path: '**', redirectTo: '' },
];
