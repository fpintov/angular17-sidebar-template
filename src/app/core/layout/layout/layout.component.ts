import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { FooterComponent } from "../footer/footer.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [MatSidenavModule, HeaderComponent, SidenavComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})

export class LayoutComponent {

  sidenavWidth = 250;
  isCollapsed = false;

  onToggleSidenav(collapsed: boolean): void {
    this.isCollapsed = collapsed;
    this.sidenavWidth = collapsed ? 65 : 250;
  }

}
