import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FirebaseService } from '../../shared/Firebase.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export default class RegisterComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(FirebaseService);
  router = inject(Router);
  selectedFile!: File;

  formRegister = this.fb.nonNullable.group({
    name:['',Validators.required],
    email:['',Validators.required],
    senha:['',Validators.required],
    imagem:['',Validators.required]
  })
  errorMessage:string|null = null;
  onSubmit(){
    console.log(this.formRegister.value);
    const valueForm = this.formRegister.getRawValue();
    this.authService.register(
      valueForm.email,valueForm.name,
      valueForm.senha,this.selectedFile
    ).subscribe({
      next:()=>{
        this.router.navigateByUrl('/login');
      },
      error:(err)=>{
        this.errorMessage = err.code;
      }
    })
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]; // Pega o arquivo de imagem selecionado
  }
}
