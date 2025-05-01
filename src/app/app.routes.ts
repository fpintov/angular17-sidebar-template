import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablesComponent } from './components/tables/tables.component';
import { LayoutComponent } from './core/layout/layout/layout.component';
import { LoginV1Component } from './auth/login-v1/login-v1.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginV1Component,
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tablas', component: TablesComponent },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

  