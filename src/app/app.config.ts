import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import routeConfig from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { environment } from '../environments/environment.development';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig), provideAnimations(),
    importProvidersFrom([
    FirestoreModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ])]
  // providers: [provideClientHydration()],
  // providers: [provideRouter(routeConfig)],

};
