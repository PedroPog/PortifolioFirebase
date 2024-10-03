import { inject, Injectable } from '@angular/core';
import { getDownloadURL, listAll, ListResult, ref,Storage, uploadBytes } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireStorageService {
  firebaseStorage = inject(Storage);

  uploadImage(file: File, userId: string): Promise<string> {
    const promise = ref(this.firebaseStorage,`user/${userId}/profile.jpg`);
    return uploadBytes(promise,file).then(snapshot=>getDownloadURL(snapshot.ref));
  }

  salvarImagem(file:File):Promise<string>{
    const promise = ref(this.firebaseStorage,'imagens/'+file.name);
    return uploadBytes(promise,file).then(snapshot=>getDownloadURL(snapshot.ref));
  }

  listarItens():Promise<ListResult>{
    const promise = ref(this.firebaseStorage,'imagens/');
    return listAll(promise);
  }
}
