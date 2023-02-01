import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-puzzlea',
  templateUrl: './puzzlea.page.html',
  styleUrls: ['./puzzlea.page.scss'],
})
export class PuzzleaPage implements OnInit {

  readonly argazkiak=[0,1,2,3,4,5,6,7,8];
  num_click:number;
  casilla:number;
  casilla2:number;
 

  constructor() {
   
  }
  ngOnInit(){
    this.num_click=0;
    console.log(this.argazkiak) 
    this.desordenar();
    this.pintarPuzzlea();
    

  }
  desordenar(){
    this.argazkiak.sort(() => 0.5 - Math.random());
    console.log(this.argazkiak)
  }
 

  seleccionar(id:number){
    this.num_click+=1;
    if(this.num_click==1){
      this.casilla=id;
  
      document.getElementById(id.toString()).style.border="1px solid red";
     
    }
   
    if(this.num_click==2){

      this.casilla2=id;

      var aux=this.argazkiak[this.casilla];

      this.argazkiak[this.casilla]=this.argazkiak[this.casilla2];
      this.argazkiak[this.casilla2]=aux;

      this.num_click=0;
 
      this.desmarcar();
      this.pintarPuzzlea();
     
      var correcto=this.comprobarPuzzleFinalizado();
      if(correcto==true){
        setTimeout(() => {
          alert('Zorionak irabazi duzu');
        }, 1000);
      }
    }
  }
  desmarcar(){
    for(let i=0;i<this.argazkiak.length;i++){
      document.getElementById(this.argazkiak[i].toString()).style.border=null;
    }
  }
  pintarPuzzlea(){
    for(let i=0;i<this.argazkiak.length;i++){
 
      document.getElementById(i.toString()).setAttribute("src","../../assets/img/"+ this.argazkiak[i]+".png");
    }
    console.log(this.argazkiak);
  }
  comprobarPuzzleFinalizado(){
    var correcto=true;
    for(let i=0;i<this.argazkiak.length;i++){
      if(this.argazkiak[i]!=i){
        correcto=false;
      }
    }
    return correcto;

  }
}
