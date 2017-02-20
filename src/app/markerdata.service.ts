import { Injectable } from '@angular/core';
import { marker } from './marker';
@Injectable()
export class MarkerdataService {
  markers: marker[] = [
    {
      name: 'Ahmedabad',
      lat: 23.022505,
      lng: 72.571362
    },
    {
      name: 'Baroda',
      lat: 22.307159,
      lng: 73.181219
    },
    {
      name: 'Surat',
      lat: 21.170240,
      lng: 72.831061
    },
    {
      name: 'Rajkot',
      lat: 22.303894,
      lng: 70.802160
    },
  ];
  constructor() { }
  getAllMarkers() {
    if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
      localStorage.setItem('markers', JSON.stringify(this.markers));
      return this.markers;
    }
    else {
      var markers = JSON.parse(localStorage.getItem('markers'));
      return markers;
    }

  }
  addMarker(newmarker: marker) {

    var markers = JSON.parse(localStorage.getItem('markers'));
    markers.push(newmarker);
    localStorage.setItem('markers', JSON.stringify(markers));
  }
  removeMarker(mark: marker) {

    var markers = JSON.parse(localStorage.getItem('markers'));
    markers.splice(markers.indexOf(mark),1);
    localStorage.setItem('markers', JSON.stringify(markers));
  }
}
