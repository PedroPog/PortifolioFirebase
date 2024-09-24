import { Component, inject, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { appTitle } from '../app.config';
import { MediaQueryObserverService } from '../shared/media-query-observer.service';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../shared/Firebase.service';

@Component({
  selector: 'app-home-client',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './home-client.component.html',
  styleUrl: './home-client.component.scss'
})
export default class HomeClientComponent {
  appName = appTitle;
  authService = inject(FirebaseService);
  viewPoint$ = inject(MediaQueryObserverService).mediaQuery();

  logout(){
    this.authService.logout();
  }


}
