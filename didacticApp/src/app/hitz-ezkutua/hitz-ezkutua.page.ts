import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

let imageArray = [];

@Component({
  selector: 'app-hitz-ezkutua',
  templateUrl: './hitz-ezkutua.page.html',
  styleUrls: ['./hitz-ezkutua.page.scss'],
})
export class HitzEzkutuaPage {
  message: string;

  kontagailua = 0;
  constructor() {}

  submitMessage() {
    console.log(this.message);
    if (
      this.message == 'Anbotoko Mariren Kondaira' ||
      this.message == 'anbotoko mariren kondaira'
    ) {
      // Lehio bat sartu, erabiltzailea zorionduz!!!
      console.log('Oso ondo!');
    } if (this.message == '') {
      // Lehio bat sartu, ez duela ezer idatzi azalduz!!!
      console.log('Ez duzu ezer idatzi!!!');
    } else {
      // Erabiltzaileak 3 aukera duenez, geratzen zaion aukerak agertzea lehio baten laguntzaz.
      this.message = '';
      this.kontagailua++;
      console.log(this.kontagailua);

      if (this.kontagailua == 3) {
        // Lehio bat irekitzea, aukerak bukatu direla azalduz eta mapara bueltatu.
        console.log('Aukerak bukatu dira!!!');
      }
    }
  }
}
