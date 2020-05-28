import { Component } from '@angular/core';
import { Personne } from './interfaces/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revision-angular';
  tableau = [-5, 0, 10, 18];
  nom = 'wick';
  couleur = 'blue';
  personne: Personne = {
    nom: 'wick',
    prenom: 'john',
    id: 1
  };
  personnes: Array<Personne> = [
    { nom: 'wick', prenom: 'john', id: 1 },
    { nom: 'wayne', prenom: 'alan', id: 2 },
    { nom: 'travolta', prenom: 'mike', id: 3 },
    { nom: 'dalton', prenom: 'jack', id: 4 },
  ];
}
