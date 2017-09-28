import { AuthGuard } from './auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'pages/dashboard', canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
