import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-urkatua',
  templateUrl: './urkatua.page.html',
  styleUrls: ['./urkatua.page.scss'],
})
export class UrkatuaPage {
  readonly hizkiak = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "Ñ", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"];
  palabraAAdivinarPorAhora:string;
  palabraAAdivinar:string;
  hitza:string;
  fallos:Array<String>;
  aciertos:Array<String>;
  numFallos:number;
  numAciertos:number;
  constructor( public navCtrl: NavController, public  alertController: AlertController, private router: Router) {
    this.inicializar();
  }
  inicializar():void{
    this.numFallos=0;
    this.numAciertos=0;
    this.palabraAAdivinarPorAhora="";
    this.fallos=[];
    this.palabraAAdivinar="SANTA ANAKO ARKUA";
    this.generarPalabraAdivinadaPorAhora();


  }
  generarPalabraAdivinadaPorAhora():void{
    for(let i=0;i<this.palabraAAdivinar.length;i++){
      if(this.palabraAAdivinar[i]==" "){
        this.palabraAAdivinar.replace(" ", "" );
        this.palabraAAdivinarPorAhora+=" ";
      }else{
        this.palabraAAdivinarPorAhora+="-";
      }
    }
  }
  botonClicked(hizkia:string):void{

    if(!this.letraAcertada(hizkia)){
      if(this.numFallos<=5){
        this.aumentarFallos(hizkia);
      }
      else{
        this.mostrarMensajePerder();
      }
    }
    else{ 
      if(this.numAciertos== this.palabraAAdivinar.length-2){
        this.mostrarMensajeGanar();
      }
    }

  }
  letraAcertada(hizkia:string):boolean{
    let long=this.palabraAAdivinar.length;
    let letraAcertada=false;
    for(let i=0;i<long;i++){
      if(hizkia== this.palabraAAdivinar[i]){
        
        this.palabraAAdivinarPorAhora=
        this.palabraAAdivinarPorAhora.substr(0,i)+
        hizkia+
        this.palabraAAdivinarPorAhora.substr(i+1);
        ;
        letraAcertada=true;
        this.numAciertos++;
        console.log(this.numAciertos);
      
      }
    }
   
    return letraAcertada;
   

  }
  aumentarFallos(hizkia:string):void{
    this.fallos.push(hizkia);
    this.numFallos++;     
  }
  async mostrarMensajePerder(){
    const alert= await this.alertController.create(
      {header:"Galdu egin duzu",
     buttons:[{
      text:"Berriro Jokatu",
      handler:()=>{
        this.inicializar();
      } }]}
    );
     await alert.present();

  }
  async mostrarMensajeGanar(){
    const alert= await this.alertController.create(
      {header:"Zorionak!! Irabazi duzu",
     buttons:[{
      text:"Mapara Itzuli!",
      handler:()=>{
        localStorage.setItem('fase', '5');
        this.router.navigate(['/home']);
      } }]}
    );
     await alert.present();
  }

}
