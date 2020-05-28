import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ObservableComponent } from './observable/observable.component';
import { AdresseComponent } from './adresse/adresse.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { TableauComponent } from './tableau/tableau.component';
import { CoursRoutingModule } from './cours-routing.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormComponent } from './form/form.component';
import { VehiculeModule } from '../vehicule/vehicule.module';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './fils/fils.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PanierComponent } from './panier/panier.component';
import { ArticleComponent } from './article/article.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EnfantComponent } from './enfant/enfant.component';
import { FatherComponent } from './father/father.component';
import { PersonneComponent } from './personne/personne.component';
import { EditPersonneComponent } from './edit-personne/edit-personne.component';

@NgModule({
  declarations: [
    ObservableComponent,
    AdresseComponent,
    StagiaireComponent,
    TableauComponent,
    FormulaireComponent,
    FormComponent,
    PereComponent,
    FilsComponent,
    ItemComponent,
    ListComponent,
    ParentComponent,
    ChildComponent,
    PanierComponent,
    ArticleComponent,
    FirstComponent,
    SecondComponent,
    EnfantComponent,
    FatherComponent,
    PersonneComponent,
    EditPersonneComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    VehiculeModule,
    HttpClientModule
  ]
})
export class CoursModule { }
