import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  lienStagiaire = '';
  param1 = 'john';
  param2 = 'wick';

  constructor() {
    this.lienStagiaire = '/stagiaire/' + this.param1 + '/' + this.param2;
  }
  ngOnInit() {

  }
}
