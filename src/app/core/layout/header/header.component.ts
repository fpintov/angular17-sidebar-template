import { Component, EventEmitter, Output, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  collapsed = signal(false);

  @Output() toggleSidenav = new EventEmitter<boolean>();

  toggle(): void {
    this.collapsed.set(!this.collapsed());
    this.toggleSidenav.emit(this.collapsed());
  }

}
