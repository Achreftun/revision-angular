import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './composants/menu/menu.component';
import { AuthComponent } from './composants/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule, // = CommonModule (directives, pipes....) + nécessaire pour exécuter l'appli dans le navigateur
    AppRoutingModule, // à la création Angulation nous propose de générer un fichier de routage
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }], // services utilisés par ce module
  bootstrap: [AppComponent] // le composant de démarrage de ce module
})
export class AppModule { }
