import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
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
  afficherTout() {
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
// créez une interface adresse avec id rue codePostal ville
// ajoutez dans l'interface personne un attribut de type adresse
// midifiez le formulaire pour permettre à l'utilisateur de saisir une adresse pour chaque personne