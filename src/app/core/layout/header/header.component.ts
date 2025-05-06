import { Component, EventEmitter, Output, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private router: Router) {}

  collapsed = signal(false);

  @Output() toggleSidenav = new EventEmitter<boolean>();

  toggle(): void {
    this.collapsed.set(!this.collapsed());
    this.toggleSidenav.emit(this.collapsed());
  }

  logout(): void {
    console.log('Cerrando sesión...');
    // Aquí puedes limpiar storage si es necesario
    this.router.navigate(['/login']);
  }

}
