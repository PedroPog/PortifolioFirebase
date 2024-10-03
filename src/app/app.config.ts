import { ApplicationConfig,isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideHttpClient } from '@angular/common/http';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideStorage } from '@angular/fire/storage';
import { getStorage } from 'firebase/storage';
import { environment } from '../environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideIonicAngular } from '@ionic/angular/standalone';

export const appTitle = "Pedro Henrique Vieira";
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideIonicAngular({
      rippleEffect: false,
      mode: 'md'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(()=>getAuth()),
    provideStorage(()=>getStorage()),
    provideDatabase(()=>getDatabase()),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
  }),
],
};
