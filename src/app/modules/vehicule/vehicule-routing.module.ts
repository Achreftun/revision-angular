import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamionComponent } from './camion/camion.component';
import { VoitureComponent } from './voiture/voiture.component';

// /vehicule/camion
const routes: Routes = [
  { path: 'camion', component: CamionComponent },
  { path: 'voiture', component: VoitureComponent },
  { path: '', component: VoitureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculeRoutingModule {

}
