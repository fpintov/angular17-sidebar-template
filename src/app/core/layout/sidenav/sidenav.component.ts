import { Component, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../models/menu-item.model';

@Component({
  selector: 'app-sidenav',
  imports: [CommonModule, MatSidenavModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  userImg: string = "assets/Credencial_Fondo_Blanco.jpg"

  menuItems = signal<MenuItem[]>([
    { icon: 'home', label: 'Home', route: '/' },
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'tables', label: 'Tablas', route: '/tablas' },
  ])

}
