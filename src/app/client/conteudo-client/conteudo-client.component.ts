import { Component } from '@angular/core';

@Component({
  selector: 'app-conteudo-client',
  standalone: true,
  imports: [],
  templateUrl: './conteudo-client.component.html',
  styleUrl: './conteudo-client.component.scss'
})
export class ConteudoClientComponent {
  frasebanner!:string;
  imagemBanner='https://place-hold.it/1000x200';
}
