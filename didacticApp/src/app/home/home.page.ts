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

  constructor(private geo: Geolocation) {}

  ngOnInit(): void {
    this.whereAmI();
    this.initMap();
    //this.durangokoKokapenenMarkakJarri();
  }

  jokalariarenPosizioraJoan() {
    if (this.getPlayersDistanceFromDurangoInKM() < 8) {
      this.map.flyTo(
        [this.playerPosition[0], this.playerPosition[1]],
        this.zoom
      );
    }
  }

  whereAmI() {
    let watch = this.geo.watchPosition();
    watch.subscribe((data) => {
      if ('coords' in data) {
        this.playerPosition[0] = data.coords.latitude;
        this.playerPosition[1] = data.coords.longitude;
        this.playerPosition[2] = data.coords.heading;
        this.playerIconUpdate();
        console.log(
          'Durangotik ' +
            this.getPlayersDistanceFromDurangoInKM() +
            'Km-ra zaude'
        );
        if (this.getPlayersDistanceFromDurangoInKM() < 8) {
          this.map.flyTo(
            [this.playerPosition[0], this.playerPosition[1]],
            this.zoom
          );
        } else {
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
    return Math.sqrt(
        Math.pow(this.playerPosition[0] - this.koordenadak.Durango.lat, 2) +
          Math.pow(this.playerPosition[1] - this.koordenadak.Durango.lon, 2)
      ) * 111.1;
  }

  playerIconUpdate() {
    let icon = L.icon({
      iconUrl: '../../assets/icon/navigationicon.png',
      iconSize: [40, 40],
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

    let popup = L.popup().setContent('<h1>Do not click me</h1>');

    this.playerMarker.bindPopup(popup);
  }

  //durangokoKokapenenMarkakJarri(){
  //  for(let value in this.koordenadak){
  //    if(value.izena == "Durango"){
  //      return false;
  //    }
  //    console.log(value);
  //    let icon = L.icon({
  //      iconUrl: '../../assets/icon/navigationicon.png',
  //      iconSize: [40, 40],
  //    });
  //    let marker = L.marker(
  //      [value.lat, value.lon],
  //      {
  //        icon: icon,
  //      }
  //    ).addTo(this.map);
  //
  //    let popup = L.popup().setContent(value.izena);
  //
  //    marker.bindPopup(popup);
  //    return false;
  //  });
  //}

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
}
