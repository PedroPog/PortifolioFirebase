import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FirebaseService } from '../../shared/Firebase.service';

@Component({
  selector: 'app-dashboard-client',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './dashboard-client.component.html',
  styleUrl: './dashboard-client.component.scss'
})
export class DashboardClientComponent {
  authService = inject(FirebaseService);
}
