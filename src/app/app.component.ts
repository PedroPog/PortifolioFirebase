import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './shared/Firebase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  authService = inject(FirebaseService);

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if (user) {
        console.log("Usuário autenticado:", user);
        this.authService.currentUserSig.set({
          email: user.email || '',
          name: user.displayName || 'Usuário sem nome',
          id: user.uid,
          imagem: user.photoURL || 'URL de imagem padrão'
        });
      } else {
        console.log("Nenhum usuário autenticado.");
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig());
    });
  }


  title = 'lojagene';
}
