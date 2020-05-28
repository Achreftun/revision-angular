import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  itemForm = this.fb.group({
    couleur: ['', Validators.required],
    texte: ['', Validators.required]
  });
  items = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  ajouter() {
    this.items.push(this.itemForm.value);
    this.itemForm.reset();
  }
}
