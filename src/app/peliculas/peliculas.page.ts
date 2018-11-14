import { Component, OnInit } from '@angular/core';
import { DetallePeliculaPage } from '../detalle-pelicula/detalle-pelicula.page';
import { ModalController } from '@ionic/angular';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  public films;
  
  constructor(
    private modalController: ModalController,
    private peliculasService: PeliculasService
    ) { }

  ngOnInit() {
    this.films = this.peliculasService.getFilms();
  }

  async showDetails(i) {
    console.log(i);
    const modal = await this.modalController.create({
      component: DetallePeliculaPage,
      componentProps: { index: i }
    });
    return await modal.present();
  }

}
