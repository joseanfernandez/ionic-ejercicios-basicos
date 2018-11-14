import { Component, OnInit, DoCheck } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ejercicio05',
  templateUrl: './ejercicio05.page.html',
  styleUrls: ['./ejercicio05.page.scss'],
})
export class Ejercicio05Page implements OnInit, DoCheck {

  min: number;
  max: number;
  n: number;
  help: number;
  message: string;
  disabled = true;
  showMin = false;

  constructor(private alertController: AlertController) { }

  ngOnInit() {

  }

  ngDoCheck() {
    this.disabled = ((+this.min <= +this.max) ? false : true);
  }

  generate() {
    if (+this.min === +this.max) {
      this.presentAlert();
    } else {
      this.n = Math.floor(Math.random() * (this.max - this.min + 1)) + Math.floor(this.min);
      this.showMin = false;
    }
  }

  showMinMax() {
    this.n = ((this.showMin) ? this.max : this.min);
    this.showMin = ((this.showMin) ? false : true);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿De verdad?',
      message: '¡Para esto no necesitas usar la aplicación! <br><br><strong>' + this.min + '</strong>',
      buttons: ['OK']
    });
    this.n = null;
    await alert.present();
  }

}
