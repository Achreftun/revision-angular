import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personnes: Array<Personne> = [];

  personneForm = this.fb.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', Validators.required],
    adresses: this.fb.array([
      this.fb.group({
        rue: ['', Validators.required],
        codePostal: ['', Validators.required],
        ville: ['', Validators.required],
      })
    ])
  });
  constructor(private fb: FormBuilder, private personneService: PersonneService) {
  }
  get adresses() {
    return this.personneForm.get('adresses') as FormArray;
  }
  ngOnInit(): void {
    this.afficherPersonnes();
  }
  ajouterPersonne() {
    this.personneService.addPersonne(this.personneForm.value).subscribe(
      () => {
        this.afficherPersonnes();
      }
    );
    this.personneForm.reset();
  }
 supprimerPersonne(id: number) {
    this.personneService.deletePersonne(id).subscribe(
      () => {
        this.afficherPersonnes();
      }
    );
  }
  ajouterAdresse() {
    this.adresses.push(this.fb.group({
      rue: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
    }));
  }
  afficherPersonnes() {
    this.personneService.getAllPersonnes().subscribe(
      data => {
        this.personnes = data;
      }
    );
  }
}
