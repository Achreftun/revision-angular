import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculeRoutingModule } from './vehicule-routing.module';
import { CamionComponent } from './camion/camion.component';
import { VoitureComponent } from './voiture/voiture.component';


@NgModule({
  declarations: [CamionComponent, VoitureComponent],
  imports: [
    CommonModule,
    VehiculeRoutingModule,
  ],
  exports: [
    CamionComponent
  ]
})
export class VehiculeModule {
}
