import { Component } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon, Marker } from 'leaflet';
import { Inject, Input, OnInit } from '@angular/core';
import 'leaflet-rotatedmarker';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import * as jsonData from '../../assets/koordenadak.json';
import { fromEventPattern } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private map: any;
  zoom: number = 17.5;
  koordenadak: any = jsonData;
  playerPosition: number[] = [0, 0, 0];
  playerMarker: any;
  tracking: boolean = true;

  constructor(private geo: Geolocation) {}

  ngOnInit(): void {
    this.whereAmI();
    this.initMap();
    this.durangokoKokapenenMarkakJarri();
    //this.aurkezpenaScript();
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

        console.log('Tracking: ', this.tracking);
        this.map.on('dragstart', e => {
              this.tracking = false;
              console.log('pantaila mugitu da. Tracking:', this.tracking);
        });

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
        } else if(this.getPlayersDistanceFromDurangoInKM() > 8) {
          //alert("Durangotik kanpo zaude");
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

  getPlayersDistanceFromDurangoInKM(): number {
    return (
      Math.sqrt(
        Math.pow(this.playerPosition[0] - this.koordenadak.Durango.lat, 2) +
          Math.pow(this.playerPosition[1] - this.koordenadak.Durango.lon, 2)
      ) * 111.1
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
    var data = this.koordenadak;
    Object.keys(data).forEach((key) => {
      if (data[key].izena == 'Durango') {
        return false;
      } else if (data[key].izena == null) {
        return false;
      }

      let icon = L.icon({
        iconUrl: '../../assets/img/' + data[key].img,
        iconSize: [40, 40],
        //html: '<span style="border-radius:25px;" />',
      });
      let marker = L.marker([data[key].lat, data[key].lon], {
        icon: icon,
      }).addTo(this.map);

      let popup = L.popup().setContent(data[key].izena);

      marker.bindPopup(popup);
      return false;
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

  public aurkezpenaScript(){
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.style.display="block";


    //document.getElementById('mariAurkezepenAudio').play();
  }

}
