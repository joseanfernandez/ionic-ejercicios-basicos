import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.page.html',
  styleUrls: ['./detalle-pelicula.page.scss'],
})
export class DetallePeliculaPage implements OnInit {

  public film;
  public index;

  constructor(
    private modalController: ModalController,
    private peliculasService: PeliculasService,
    private navParams: NavParams,
    private alertController: AlertController

  ) {
    this.index = this.navParams.get('index');
  }

  ngOnInit() {
    this.film = this.peliculasService.getFilm(this.index);
  }

  close() {
    this.modalController.dismiss();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '¿Borrar película?',
      message: 'Si borras esta película no podrás recuperarla.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Borrar',
          handler: () => {
            this.delete();
          }
        }
      ]
    });

    await alert.present();
  }

  delete() {
    this.peliculasService.deleteFilm(this.index);
    this.close();
  }


}
