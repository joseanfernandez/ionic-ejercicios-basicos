import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallePeliculaPage } from './detalle-pelicula.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePeliculaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetallePeliculaPage]
})
export class DetallePeliculaPageModule {}
