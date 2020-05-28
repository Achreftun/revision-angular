import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  nom: string;
  noms = [];
  constructor() { }

  ngOnInit(): void {
  }
  participer() {
    this.noms.push(this.nom);
    this.nom = '';
  }
}
