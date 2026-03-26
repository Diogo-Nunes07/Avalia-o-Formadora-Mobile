import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'sobre', // Verifique se este nome está IGUAL ao do routerLink
    loadComponent: () => import('./sobre/sobre.page').then((m) => m.SobrePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];