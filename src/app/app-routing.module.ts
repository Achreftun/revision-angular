import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './composants/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { InscriptionComponent } from './composants/inscription/inscription.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'inscription', component: InscriptionComponent },
  {
    path: '', canActivate: [AuthGuard], children: [
      {
        path: 'vehicule',
        loadChildren: () => import('./modules/vehicule/vehicule.module').then(m => m.VehiculeModule)
      },
      {
        path: 'cours',
        loadChildren: () => import('./modules/cours/cours.module').then(m => m.CoursModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
