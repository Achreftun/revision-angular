import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  quantite = 0;
  @Input() article: Article;
  // tslint:disable-next-line:no-output-native
  @Output() message = new EventEmitter();
  etat = false;
  constructor() { }

  ngOnInit(): void {
  }
  ajouter() {
    this.message.emit({ article: this.article, quantite: this.quantite});
    this.etat = true;
  }
}
