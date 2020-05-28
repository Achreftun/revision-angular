import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  nom: string;
  prenom: string;
  noms = [];
  prenoms = [];
  constructor() { }

  ngOnInit(): void {
  }
  ajouter() {
    this.noms.push(this.nom);
    this.prenoms.push(this.prenom);
    this.nom = '';
    this.prenom = '';
  }
}
