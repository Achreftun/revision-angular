import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { AdresseComponent } from './adresse/adresse.component';
import { TableauComponent } from './tableau/tableau.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormComponent } from './form/form.component';
import { PereComponent } from './pere/pere.component';
import { ListComponent } from './list/list.component';
import { ParentComponent } from './parent/parent.component';
import { PanierComponent } from './panier/panier.component';
import { FatherComponent } from './father/father.component';
import { PersonneComponent } from './personne/personne.component';
import { EditPersonneComponent } from './edit-personne/edit-personne.component';

const routes: Routes = [
    { path: 'tableau/:id', component: TableauComponent },
    { path: 'observable', component: ObservableComponent },
    { path: 'stagiaire', component: StagiaireComponent },
    { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
    { path: 'adresse', component: AdresseComponent },
    { path: 'formulaire', component: FormulaireComponent },
    { path: 'form', component: FormComponent },
    { path: 'pere', component: PereComponent },
    { path: 'list', component: ListComponent },
    { path: 'parent', component: ParentComponent },
    { path: 'panier', component: PanierComponent },
    { path: 'editpersonne/:id', component: EditPersonneComponent },
    { path: 'personne', component: PersonneComponent },
    { path: 'father', component: FatherComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursRoutingModule {

}
