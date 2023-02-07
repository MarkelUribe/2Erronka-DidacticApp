import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laberintoa',
  templateUrl: './laberintoa.page.html',
  styleUrls: ['./laberintoa.page.scss'],
})
export class LaberintoaPage {
  constructor(public alertController: AlertController, private router: Router) {
    $(document).ready(function () {
      function choque_con_vertical(movx: any) {
        var x1 = $('#img1').position().left + movx;
        var x2 = x1 + $('#img1').width();
        var y1 = $('#img1').position().top;
        var y2 = y1 + $('#img1').height();

        for (let i = 1; i <= 14; i++) {
          var xd1 = $('#vlab' + i).position().left;
          var xd2 = xd1 + $('#vlab' + i).width();
          var yd1 = $('#vlab' + i).position().top;
          var yd2 = yd1 + $('#vlab' + i).height();
          if (
            x1 <= xd1 &&
            xd1 <= x2 &&
            ((yd1 <= y1 && y1 <= yd2) || (yd1 <= y2 && y2 <= yd2))
          ) {
            return true;
          }
        }
        return false;
      }

      function choque_con_horizontal(movy: any) {
        var x1 = $('#img1').position().left;
        var x2 = x1 + $('#img1').width();
        var y1 = $('#img1').position().top + movy;
        var y2 = y1 + $('#img1').height();
        for (let i = 1; i <= 19; i++) {
          var xdd1 = $('#lab' + i).position().left;
          var xdd2 = xdd1 + $('#lab' + i).width();
          var ydd1 = $('#lab' + i).position().top;
          var ydd2 = ydd1 + $('#lab' + i).height();
          if (
            y1 <= ydd1 &&
            ydd1 <= y2 &&
            ((xdd1 <= x1 && x1 <= xdd2) || (xdd1 <= x2 && x2 <= xdd2))
          ) {
            return true;
          }
        }
        return false;
      }

      $('#boton1').click(function () {
        if (!choque_con_vertical(-20)) {
          $('#img1').animate(
            {
              left: '-=20',
            },
            200
          );
          var x1 = $('#img1').position().left;
          var y = $('#img1').position().top;
          if ((y == 130 || y == 110) && x1 == 255) {
            alert('Ez da irteera zuzena');
          }
        }
      });

      $('#boton2').click(() => {
        if (!choque_con_vertical(20)) {
          $('#img1').animate(
            {
              left: '+=20',
            },
            200
          );
          var x1 = $('#img1').position().left;
          var y = $('#img1').position().top;
          if ((y == 530 || y == 550) && x1 == 115) {
            alert('Ez da irteera zuzena');
          }
        }
      });

      $('#boton3').click(function () {
        if (!choque_con_horizontal(20)) {
          $('#img1').animate(
            {
              top: '+=20',
            },
            200
          );
          var x1 = $('#img1').position().left;
          var y = $('#img1').position().top;
          if ((x1 == 215 || x1 == 235) && y == 250) {
            alert('Ez da irteera zuzena');
          }
        }
      });

      $('#boton4').click(function () {
        if (!choque_con_horizontal(-20)) {
          $('#img1').animate(
            {
              top: '-=20',
            },
            200
          );
          var y = $('#img1').position().top;
          var x1 = $('#img1').position().left;
          if (x1 == 35 && y == 330) {
            alert('Ez da irteera zuzena');
          }
          if (x1 == 455 && y == 150) {
            alert('Irteera zuzena');
            $("#irteeraDiv").show();
          }
        }
      });
    });
  }


  irten(){
    localStorage.setItem('fase', '2');
    this.router.navigate(['/home']);
  }
}
