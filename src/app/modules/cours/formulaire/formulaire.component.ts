import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  personnes: Array<Personne> = [];
  personne: Personne = {};
  constructor() { }

  ngOnInit(): void {
  }
  ajouter() {
    this.personnes.push({ ...this.personne });
    this.personne = {};
  }
}
