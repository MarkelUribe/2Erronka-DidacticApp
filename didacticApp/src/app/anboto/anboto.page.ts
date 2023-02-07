import { Component, OnInit } from '@angular/core';

var items = document.getElementsByClassName('animation-item');
var items1 = document.getElementsByClassName('animation-item1');

@Component({
  selector: 'app-anboto',
  templateUrl: './anboto.page.html',
  styleUrls: ['./anboto.page.scss'],
})
export class AnbotoPage {

  constructor() {}

  stopAnimationLeire() {
    for (var i = 0; i < items.length; i++) {
      (items[i] as HTMLElement).style.animationPlayState = 'paused';
      
    }

    // When the two animations are still.
    for (var i = 0; i < items1.length; i++) {
      if ((items1[i] as HTMLElement).style.animationPlayState == 'paused') {
        console.log('Bi animazioak geratu dituzu!!!');
        (document.querySelector('.animation-container') as HTMLElement).style.backgroundImage ='url("../../assets/img/anboto/kobazulo_emaitza.jpg")';
        
        // Leire argazkia ezabatu
        let leire_img = document.querySelector('.animation-item');
        leire_img.parentNode.removeChild(leire_img);

        // Mikelats eta Atarrabir argazkia ezabatu
        let img2 = document.querySelector('.animation-item1');
        img2.parentNode.removeChild(img2);
       
      }
    }
  }

  stopAnimation_MikelatsAtarrabir() {
    for (var i = 0; i < items1.length; i++) {
      (items1[i] as HTMLElement).style.animationPlayState = 'paused';
    }

    // When the two animations are still.
    for (var i = 0; i < items.length; i++) {
      if ((items[i] as HTMLElement).style.animationPlayState == 'paused') {
        console.log('Bi animazioak geratu dituzu!!!');
        (document.querySelector('.animation-container') as HTMLElement).style.backgroundImage ='url("../../assets/img/anboto/kobazulo_emaitza.jpg")';
        
        // Leire argazkia ezabatu
        let leire_img = document.querySelector('.animation-item');
        leire_img.parentNode.removeChild(leire_img);

        // Mikelats eta Atarrabir argazkia ezabatu
        let img2 = document.querySelector('.animation-item1');
        img2.parentNode.removeChild(img2); 
      }
    }
  }

}
