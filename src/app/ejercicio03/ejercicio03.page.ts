import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio03.page.html',
  styleUrls: ['./ejercicio03.page.scss'],
})
export class Ejercicio03Page implements OnInit {

  n: number;

  constructor(
    private alertController: AlertController
    ) {
      this.n = 0;
  }

  ngOnInit() {
  }

  add() {
    this.n += 1;
  }

  subtract() {
    this.n -= 1;
  }

  reset() {
    this.n = 0;
  }
  /*
  async reset() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.n.value = 0;
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  */
}
