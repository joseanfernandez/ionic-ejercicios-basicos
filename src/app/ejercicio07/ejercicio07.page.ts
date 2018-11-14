import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio07',
  templateUrl: './ejercicio07.page.html',
  styleUrls: ['./ejercicio07.page.scss'],
})
export class Ejercicio07Page implements OnInit {

  pesetas = 0;
  euros = 0;

  constructor() {

   }

  ngOnInit() {
  }

  convertEurosPesetas() {
    this.pesetas = this.euros * 166.386;
  }

  convertPesetasEuros() {
    this.euros = this.pesetas / 166.386;
  }

}
