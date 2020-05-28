import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {
  prenom = '';
  nom = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => {
        this.nom = value.get('nom');
        this.prenom = value.get('prenom');
    });
    // this.nom = this.route.snapshot.params.nom;
    // this.prenom = this.route.snapshot.params.prenom;
  }

}
