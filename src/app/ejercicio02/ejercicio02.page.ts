import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.page.html',
  styleUrls: ['./ejercicio02.page.scss'],
})
export class Ejercicio02Page implements OnInit {

  name: String;
  action: String;

  constructor() {
    this.action = 'Muestra nombre';
   }

  ngOnInit() {
  }

  showClean() {
    if (this.action === 'Muestra nombre') {
      this.name = 'Josean Fernández';
      this.action = 'Limpia pantalla';
    } else {
      this.name = '';
      this.action = 'Muestra nombre';
    }
  }

}
