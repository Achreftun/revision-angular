import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personnes: Array<Personne> = [];

  personneForm = this.fb.group({
    id: [],
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
  constructor(private fb: FormBuilder) { }
  get adresses() {
    return this.personneForm.get('adresses') as FormArray;
  }
  ngOnInit(): void {
  }
  ajouterPersonne() {
    this.personnes.push(this.personneForm.value);
    this.personneForm.reset();
  }
  ajouterAdresse() {
    this.adresses.push(this.fb.group({
      rue: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
    }));
  }

}
