import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../shared/Firebase.service';
import { UserLogin } from '../../model/usuario.model';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  authService = inject(FirebaseService);
  http = inject(HttpClient);
  router = inject(Router);

  formLogin = this.fb.nonNullable.group({
    email:['',Validators.required],
    senha:['',Validators.required]
  })
  errorMessage:string|null = null;

  constructor(
    private fb:FormBuilder
  ){

  }

  logarFirebase(){
    console.log(this.formLogin.value);
    const valueForm = this.formLogin.getRawValue();
    this.authService.login(
      valueForm.email,valueForm.senha)
      .subscribe({
      next:()=>{
        this.router.navigateByUrl('/');
      },
      error:(err)=>{
        this.errorMessage = err.code;
      }
    })
  }
}
