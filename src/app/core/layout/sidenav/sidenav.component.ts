import { Component, Input, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../models/menu-item.model';

@Component({
  selector: 'app-sidenav',
  imports: [
    CommonModule, 
    MatSidenavModule, 
    MatListModule, 
    MatIconModule, 
    MatTooltipModule,
    RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  userImg: string = "assets/Credencial_Fondo_Blanco.jpg";
  @Input() collapsed = false;

  menuItems = signal<MenuItem[]>([
    { icon: 'home', label: 'Home', route: '/' },
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'tables', label: 'Tablas', route: '/tablas' },
  ])

  get imgWidth(): number {
    return this.collapsed ? 50 : 150;
  }

}
