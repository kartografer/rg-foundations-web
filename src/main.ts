import { enableProdMode, importProvidersFrom } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app/app.component'
import { routes } from './app/app-routing.module'
import { environment } from './environments/environment'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { providePerformance, getPerformance } from '@angular/fire/performance'

if (environment.production) {
  enableProdMode()
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    providePerformance(() => getPerformance()),
  ],
}).catch((err) => console.error(err))
