import { Component, inject, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { appTitle } from '../app.config';
import { MediaQueryObserverService } from '../shared/media-query-observer.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FirebaseService } from '../shared/Firebase.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'app-home-client',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    NgOptimizedImage,
    RouterOutlet,
    CommonModule,
    LetDirective,
    MatSidenavModule,
  ],
  templateUrl: './home-client.component.html',
  styleUrl: './home-client.component.scss'
})
export default class HomeClientComponent {
  appName = appTitle;
  authService = inject(FirebaseService);
  viewPoint$ = inject(MediaQueryObserverService).mediaQuery();
  router = inject(Router);
  showFiller = false;

  logout(){
    this.authService.logout();
  }
  isActiveRoute(route: string): boolean {
    return this.router.url === `/${route}`;
  }
}
