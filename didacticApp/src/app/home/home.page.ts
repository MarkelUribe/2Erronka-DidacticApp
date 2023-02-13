import { Component } from '@angular/core';

import { Router } from '@angular/router';

import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon, Marker } from 'leaflet';
import { Inject, Input, OnInit } from '@angular/core';
import 'leaflet-rotatedmarker';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import * as jsonData from '../../assets/koordenadak.json';
import * as jsonData2 from '../../assets/historia.json';
import { fromEventPattern, Observable } from 'rxjs';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private map: any;
  zoom: number = 17.5;
  koordenadak: any;
  historia: any = jsonData2;
  historiaFase: number = 0;
  hurrengoGuneImg: string;
  playerPosition: number[] = [0, 0, 0]; //lat, lon, Orientazioa
  playerMarker: any;
  guneMarker: any;
  tracking: boolean = true;
  alertPresented: boolean = false;
  modalPresented: boolean = false;
  mapinitialized: boolean = false;

  constructor(
    private geo: Geolocation,
    private alertController: AlertController,
    public modalCtrl: ModalController,
    private router: Router,
    private http: HttpClient
  ) {}

  getKoordenadak(): void{
    this.http.get('http://localhost:8000/api/koordenadak')
    .subscribe(data => {
      this.koordenadak = data; 
      if(this.mapinitialized != true){
        this.whereAmI();
        this.initMap();
        this.mapinitialized = true;
      }
    },
    error => console.log('Error::' + error)); }

  ngOnInit(): void {

   this.getKoordenadak();

    if(localStorage.getItem('fase') == null){
      localStorage.setItem('fase', this.historiaFase.toString());
      this.router.navigate(['/hasiera']);
    }else{
      this.historiaFase = +localStorage.getItem('fase');
    }

    
  }

  jokalariarenPosizioraJoan() {
    if (this.getPlayersDistanceFromDurangoInKM() < 8) {
      this.map.flyTo(
        [this.playerPosition[0], this.playerPosition[1]],
        this.zoom
      );
    }
    this.tracking = true;
  }

  whereAmI() {
    let watch = this.geo.watchPosition();
    watch.subscribe((data) => {
      if ('coords' in data) {
        this.playerPosition[0] = data.coords.latitude;
        this.playerPosition[1] = data.coords.longitude;
        this.playerPosition[2] = data.coords.heading;
        this.playerIconUpdate();
        this.durangokoKokapenenMarkakJarri();
        this.hurrengoPausoaUpdate();

        //console.log('Tracking: ', this.tracking);
        this.map.on('dragstart', (e) => {
          this.tracking = false;
          //console.log('pantaila mugitu da. Tracking:', this.tracking);
        });
        this.oraingoFasetikGertu();
        //console.log(
        //  'Durangotik ' +
        //    this.getPlayersDistanceFromDurangoInKM() +
        //    'Km-ra zaude'
        //);
        if (
          this.getPlayersDistanceFromDurangoInKM() < 8 &&
          this.tracking == true
        ) {
          this.jokalariarenPosizioraJoan();
        } else if (this.getPlayersDistanceFromDurangoInKM() > 8) {
          this.durangotikKanpoAlert();
          console.log('Durangotik kanpo zaude');
        }

        console.log(
          'lat= ' +
            this.playerPosition[0] +
            ' lng= ' +
            this.playerPosition[1] +
            ' head= ' +
            this.playerPosition[2]
        );
      } else {
        console.log('Ez dago coord-ik');
      }
    });
  }

  getDistanceOfTwoPoints(p1: any, p2: any) {
    return (
      Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)) * 111.1
    );
  }

  getPlayersDistanceFromDurangoInKM(): number {
    return this.getDistanceOfTwoPoints(
      [this.playerPosition[0], this.playerPosition[1]],
      [this.koordenadak.Durango.lat, this.koordenadak.Durango.lon]
    );
  }

  playerIconUpdate() {
    let icon = L.icon({
      iconUrl: '../../assets/img/1. IRUDIA.png',
      iconSize: [75, 75],
    });

    if (this.playerMarker != null) {
      this.map.removeLayer(this.playerMarker);
    }

    this.playerMarker = L.marker(
      [this.playerPosition[0], this.playerPosition[1]],
      {
        icon: icon,
      }
    ).addTo(this.map);

    if (this.playerPosition[2] != null) {
      this.playerMarker.setRotationAngle(this.playerPosition[2]);
    }
  }

  durangokoKokapenenMarkakJarri() {
    var data = this.koordenadak[this.historia[this.historiaFase].izena];

    if (this.guneMarker != null) {
      this.map.removeLayer(this.guneMarker);
    }

    let icon = L.icon({
      iconUrl: '../../assets/img/' + data.img,
      iconSize: [40, 40],
      //html: '<span style="border-radius:25px;" />',
    });
    this.guneMarker = L.marker([data.lat, data.lon], {
      icon: icon,
    }).addTo(this.map);

    let popup = L.popup().setContent(data.izena);

    this.guneMarker.bindPopup(popup);

    this.guneMarker.on('click', (e) => {
      this.oraingoFasetikGertu();
    });

    return false;
  }

  private initMap(): void {
    this.map = new L.Map('map');

    const self = this;

    this.map.on('load', function () {
      setTimeout(() => {
        self.map.invalidateSize();
      }, 10);
    });

    //Durango
    var southWest = new L.LatLng(43.153427, -2.691464),
      northEast = new L.LatLng(43.193779, -2.574673),
      mybounds = new L.LatLngBounds(southWest, northEast);

    this.map.setMaxBounds(mybounds);

    this.map.setView(
      [this.koordenadak.Durango.lat, this.koordenadak.Durango.lon],
      this.zoom
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 15,
    }).addTo(this.map);
  }

  async durangotikKanpoAlert() {
    if (!this.alertPresented) {
      const alert = await this.alertController.create({
        header: 'Arazoa',
        subHeader: 'Durangotik kanpo',
        message:
          'Jokoan jolastu ahal izateko Durango barruan egon behar zara eta mugikorreko geolokalizazioa aktibatuta izan behar duzu.',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.alertPresented = false;
            },
          },
        ],
      });
      this.alertPresented = true;
      await alert.present();
    }
  }

  oraingoFasetikGertu() {
    if (!this.modalPresented) {
      var gunea = this.koordenadak[this.historia[this.historiaFase].izena];

      if (
        this.getDistanceOfTwoPoints(this.playerPosition, [
          gunea.lat,
          gunea.lon,
        ]) < 0.01
      ) {
        this.jokoraJoatekoModalaErakutsi();
      }
    }
  }

  async jokoraJoatekoModalaErakutsi() {
    this.modalPresented = true;
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        title: this.historia[this.historiaFase].izena,
        azalpena: this.historia[this.historiaFase].azalpena,
        audioa: this.historia[this.historiaFase].audioa,
      },
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5,
    });

    modal.onDidDismiss().then((data) => {
      this.modalPresented = false;
    });

    return await modal.present();
  }

  hurrengoPausoaUpdate() {
    document.getElementById('hurrengoPausoaTxt').innerHTML =
      this.historia[this.historiaFase].izena;
      this.hurrengoGuneImg = "../../assets/img/"+this.koordenadak[this.historia[this.historiaFase].izena].img;
  }
}
