import { Component } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon, Marker } from 'leaflet';
import { Inject, Input, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private map: any;
  durangoLat: number = 43.17164;
  durangoLng: number = -2.634701;
  zoom: number = 40;

  static playerPosition: number[] = [0, 0, 0];

  constructor(private geo: Geolocation) {}

  ngOnInit(): void {
    this.whereAmI();
    this.initMap();
    this.trackingThread();
  }


  trackingThread(){
      let lat = this.playerPosition[0];
      let lng = this.playerPosition[1];
      setInterval(function(){ 
        number[] pPos = this.getPosition();
        let lat = this.playerPosition[0];
        let lng = this.playerPosition[1];
      this.map.flyTo([lat, lng], 15);
     }, 1000);
    }
      
    

  whereAmI() {
    /*this.geo
      .getCurrentPosition({
        timeout: 10000,
        enableHighAccuracy: true,
      })
      .then((res) => {
        this.playerPosition[0] = res.coords.latitude;
        this.playerPosition[1] = res.coords.longitude;
        alert(
          'lat= ' + this.playerPosition[0] + ' lng= ' + this.playerPosition[1]
        );
      })
      .catch((e) => {
        console.log(e);
      });*/

    let watch = this.geo.watchPosition();
    watch.subscribe((data) => {
      if ('coords' in data) {
        this.playerPosition[0] = data.coords.latitude;
        this.playerPosition[1] = data.coords.longitude;
        this.playerPosition[2] = data.coords.heading;
        console.log(
          'lat= ' + this.playerPosition[0] + ' lng= ' + this.playerPosition[1]+ ' head= ' + this.playerPosition[2]
        );
      } else {
        console.log('Ez dago coord-ik');
      }
    });
  }

  getPlayersDistanceFromDurangoInKM(): number {
    var distance =
      Math.sqrt(
        Math.pow(this.playerPosition[0] - this.durangoLat, 2) -
          Math.pow(this.playerPosition[1] - this.durangoLng, 2)
      ) * 111.1;

    return distance;
  }

  private initMap(): void {
    this.map = new L.Map('map');

    const self = this;

    this.map.on('load', function () {
      setTimeout(() => {
        self.map.invalidateSize();
      }, 10);
    });

    let icon = L.icon({
      iconUrl: '../../assets/icon/navigation-icon.png',

      iconSize: [30, 40],
    });

    let marker = L.marker([this.durangoLat, this.durangoLng], {
      icon: icon,
    }).addTo(this.map);

    let popup = L.popup().setContent('<h1>Do not click me</h1>');

    marker.bindPopup(popup);

    this.map.setView([this.durangoLat, this.durangoLng], this.zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(
      this.map
    );
  }
}
