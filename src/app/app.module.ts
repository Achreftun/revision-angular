import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './composants/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule, // = CommonModule (directives, pipes....) + nécessaire pour exécuter l'appli dans le navigateur
    AppRoutingModule // à la création Angulation nous propose de générer un fichier de routage
  ],
  providers: [], // services utilisés par ce module
  bootstrap: [AppComponent] // le composant de démarrage de ce module
})
export class AppModule { }
