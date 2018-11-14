import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio04',
  templateUrl: './ejercicio04.page.html',
  styleUrls: ['./ejercicio04.page.scss'],
})
export class Ejercicio04Page implements OnInit {

  name: String;
  text: String;

  constructor() { }

  ngOnInit() {
  }

  showText() {
    this.text = '¡Hola ' + this.name + '!';
  }
}
