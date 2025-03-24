import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablesComponent } from './components/tables/tables.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Ruta por defecto ("/")
    { path: 'home', component: HomeComponent }, // Ruta por defecto ("/")
    { path: 'about', component: DashboardComponent }, // Ruta "/about"
    { path: 'tablas', component: TablesComponent }, // Ruta por defecto ("/")
    { path: '**', redirectTo: '' } // Ruta comodín para manejar 404
];
