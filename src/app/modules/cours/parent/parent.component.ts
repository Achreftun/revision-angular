import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  moyenne = 0;
  somme = 0;
  nbr = 0;
  noms = [];
  nom: string;
  constructor() { }
  ngOnInit() { }
  computeAvg(note: number) {
    this.somme += note;
    this.nbr++;
    this.moyenne = this.somme / this.nbr;
  }
  ajouter() {
    this.noms.push(this.nom);
    this.nom = '';
  }

}
