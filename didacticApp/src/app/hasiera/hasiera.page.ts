import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hasiera',
  templateUrl: './hasiera.page.html',
  styleUrls: ['./hasiera.page.scss'],
})
export class HasieraPage implements OnInit {
  audio1 = new Audio("../../assets/audio/MARIREN AURKEZPENA.m4a");
  audio2 = new Audio("../../assets/audio/M_A SELFIE.m4a");
  kontrolak: any;
  constructor() { }

  ngOnInit() {
    this.kontrolak = document.getElementById('kontrolak');
    this.kontrolak.hidden= true;
    document.getElementById('p2').hidden = true;
    //this.audioakHasi();
  }

  hasiHasiera(){
    this.audio1.play();
    document.getElementById('hasiBotoiaDiv').hidden =true;
    this.kontrolak.hidden= false;
  }

  audioakHasi(){
    if(!this.audio1.paused){
      this.audio1.pause();
    }else{
      this.audio1.play();
    }

    this.audio1.onended = function{
      alert("sdfsdf");
      this.audio2.play();
      document.getElementById('p1').hidden = true;
      document.getElementById('p2').hidden = false;
    }
  }

  skip(){
    
  }
}