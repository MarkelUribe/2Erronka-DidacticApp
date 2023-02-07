import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asmakizuna',
  templateUrl: './asmakizuna.page.html',
  styleUrls: ['./asmakizuna.page.scss'],
})
export class AsmakizunaPage {

  audio1 = new Audio("../../assets/audio/UDALETXEA.mp4");
  inputa: string = "";
  udaletxea:string="Udaletxea"


  constructor(public alertController:AlertController, private router: Router) {

  }
  balidatu(){
      if(this.inputa.trim()==this.udaletxea){
      this.mostrarMensajeGanar();
      }
      else{
        this.inputa="";
      }
   
    }
   
    hasiHasiera(){
      this.audio1.play();
    }
    pauseStart(){
      if(!this.audio1.paused){
        this.audio1.pause();
      }else{
        this.audio1.play();
      }
    }
    async mostrarMensajeGanar(){
      const alert= await this.alertController.create(
        {header:"Zorionak!! Irabazi duzu",
       buttons:[{
        text:"Mapara joan",
        handler:()=>{
          localStorage.setItem('fase', '4');
          this.router.navigate(['/home']);
        } }]}
      );
       await alert.present();
    }

}
