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
  }

  hasiHasiera(){
    this.audio1.play();
    document.getElementById('errepikatuButton').hidden =true;
    document.getElementById('hasiBotoiaDiv').hidden =true;
    document.getElementById('p1').hidden = false;
    document.getElementById('p2').hidden = true;
    this.kontrolak.hidden= false;
    document.getElementById('errepikatuButton').hidden =true;
    document.getElementById('pauseStartButton').hidden =false;
    document.getElementById('skipButton').hidden =false;

    this.audio1.onended = a =>{
      this.audio1etik2ra();
    }
    this.audio2.onended = a =>{
      document.getElementById('errepikatuButton').hidden =false;
      document.getElementById('pauseStartButton').hidden =true;
      document.getElementById('skipButton').hidden =true;
    }
  }

  audio1etik2ra(){
      this.audio1.pause();
      this.audio2.play();
      document.getElementById('p1').hidden = true;
      document.getElementById('p2').hidden = false;
  }

  pauseStart(){
    if(!this.audio1.paused){
      this.audio1.pause();
    }else{
      this.audio1.play();
    }
    
  }

  skip(){
    if(!this.audio1.paused){
      this.audio1etik2ra()
    }else if(!this.audio2.paused){
      this.audio2.pause();
      document.getElementById('errepikatuButton').hidden =false;
      document.getElementById('pauseStartButton').hidden =true;
      document.getElementById('skipButton').hidden =true;
    }
  }
}