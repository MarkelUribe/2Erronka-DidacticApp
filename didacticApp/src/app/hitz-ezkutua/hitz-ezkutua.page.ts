import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';
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
  constructor(public  alertController: AlertController,private router: Router) {}

  submitMessage() {
    console.log(this.message);
    if (
      this.message.toUpperCase() == 'anbotoko mariren kondaira'.toUpperCase()
    ) {
      // Lehio bat sartu, erabiltzailea zorionduz!!!
      this.mostrarMensajeGanar();
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
        this.mostrarMensajePerder();
        console.log('Aukerak bukatu dira!!!');
      }
    }
  }
  async mostrarMensajeGanar(){
    const alert= await this.alertController.create(
      {header:"Zorionak!! Irabazi duzu",
     buttons:[{
      text:"Jarraitu",
      handler:()=>{
         localStorage.setItem('fase', '6');
          this.router.navigate(['/home']);
      } }]}
    );
     await alert.present();

  }
  async mostrarMensajePerder(){
    const alert= await this.alertController.create(
      {header:"Sentitzen dut 3 Aukera galdu dituzu",
     buttons:[{
      text:"Jarraitu",
      handler:()=>{
          this.router.navigate(['/home']);
      } }]}
    );
     await alert.present();

  }
}
