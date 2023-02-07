import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

let imageArray = [];

@Component({
  selector: 'app-hitz-ezkutua',
  templateUrl: './hitz-ezkutua.page.html',
  styleUrls: ['./hitz-ezkutua.page.scss'],
})
export class HitzEzkutuaPage {
  clickedImageId: string;
  hitzEzkutua: string;
  kontagailua = 0;
  constructor(private router: Router) {}

  handleClick(event: any) {
    const imageId = event.target.id;
    //Anbotoko Mariren kondaira
    imageArray.push(imageId);
    console.log(imageArray);

    const imageString = imageArray.join('');
    console.log(imageString); // 'anboto'
    this.clickedImageId = imageString;

    if (imageArray.length == 25 && imageString == 'anbotoko mariren kondaira') {
      this.hitzEzkutua = imageString;
      this.clickedImageId = 'Zorionak!!! Hitz ezkutua aurkitu duzu!!!';
      localStorage.setItem('fase', '6');
      this.router.navigate(['/home']);
      imageArray = [];
    } else if (
      imageArray.length == 25 &&
      imageString != 'anbotoko mariren kondaira'
    ) {
      this.clickedImageId = '';
      this.kontagailua++;
      if (this.kontagailua == 1) {
        this.clickedImageId = '2 aukera geratzen zaizu!!!';
      } else if (this.kontagailua == 2) {
        this.clickedImageId = 'Aukera 1 geratzen zaizu!!!';
      } else if (this.kontagailua == 3) {
        this.clickedImageId = 'Barkatu, baina aukera guztiak bukatu zaizu!!!';
      }
      imageArray = [];
    }
  }
}
