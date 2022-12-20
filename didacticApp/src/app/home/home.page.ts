import { Component } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon, Marker } from 'leaflet';
import { Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private map: any;
  lat: number = 43.17164;
  lng: number = -2.634701;
  zoom: number = 40;

  constructor() {}

  ngOnInit(): void {
    this.initMap();
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

    let marker = L.marker([this.lat, this.lng], { icon: icon }).addTo(this.map);

    let popup = L.popup()
    .setContent('<h1>Do not click me</h1>');

    marker.bindPopup(popup);

    this.map.setView([this.lat, this.lng], this.zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(
      this.map
    );
  }
}
