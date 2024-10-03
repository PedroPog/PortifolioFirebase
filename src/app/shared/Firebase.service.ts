import { inject, Injectable, signal } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { from, Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';
import { FireStorageService } from './fire-storage.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firebaseAuth = inject(Auth);
  fireStorage = inject(FireStorageService);
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<Usuario | null | undefined>(undefined);

  register(
    email: string,username: string,
    password: string,image:File
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,password
    ).then(async (response)=>{
      const imageUrl = await this.fireStorage.uploadImage(image,response.user.uid);
      await updateProfile(response.user,{displayName:username,photoURL:imageUrl})
    })
    //).then(response=>updateProfile(response.user,{displayName:username,photoURL:image}))

    return from(promise);
  }
  login(email:string,password:string):Observable<void>{
    const promise = signInWithEmailAndPassword(this.firebaseAuth,email,password)
      .then(()=>{

      })
    return from(promise);
  }
  logout():Observable<void>{
    const promise = signOut(this.firebaseAuth);
    return from(promise);
  }

}
