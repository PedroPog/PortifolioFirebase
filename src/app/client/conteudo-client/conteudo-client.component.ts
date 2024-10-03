import { Component, inject } from '@angular/core';
import { FireRealService } from '../../shared/fire-real.service';
import { FireStorageService } from '../../shared/fire-storage.service';
import { Infos } from '../../model/infos.model';
import { IonSkeletonText, IonList, IonListHeader, IonItem, IonIcon, IonThumbnail, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-conteudo-client',
  standalone: true,
  imports: [IonLabel,
    IonIcon,
    IonItem,
    IonListHeader,
    IonList,
    IonSkeletonText,
    IonThumbnail
  ],
  templateUrl: './conteudo-client.component.html',
  styleUrl: './conteudo-client.component.scss'
})
export class ConteudoClientComponent {
  service = inject(FireRealService);
  infos!:Infos;
  sd = inject(FireStorageService);
  imagemBanner ='';
  name = "";
  apresetacao = ""
  cargoAtual = ""
  imagemPerson = '';

  public loaded = false;


  constructor(){
    this.service.getData().then(data => {
      console.log(data);
      this.infos = data;
      this.imagemBanner = this.infos.imagemBanner;
      this.name = this.infos.name;
      this.apresetacao = this.infos.apresetacao;
      this.cargoAtual = this.infos.cargoAtual;
      this.imagemPerson = this.infos.imagemPerson;
      this.loaded = !this.loaded;
    });
    /*this.sd.listarItens().then(res =>{
      res.prefixes.forEach((folderRef)=>{
        console.log("folder: "+folderRef);
      });
      res.items.forEach((itemRef)=>{
        console.log("item: "+itemRef);
      });
    }).catch((error)=>{
      console.log("erro: "+error);
    });*/
  }
}
