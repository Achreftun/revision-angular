import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'vehicule',
    loadChildren: () => import('./modules/vehicule/vehicule.module').then(m => m.VehiculeModule)
  },
  {
    path: 'cours',
    loadChildren: () => import('./modules/cours/cours.module').then(m => m.CoursModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
