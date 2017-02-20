import { Component } from '@angular/core';
import { marker } from './marker';
import { MarkerdataService } from './markerdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 23.022505;
  lng: number = 72.571362;
  allMarkers: marker[];
  constructor(private _data: MarkerdataService) {
    this.allMarkers = this._data.getAllMarkers();
  }
  onClick(m: any) {
    console.log(m);
  }
  onMapClicked($event) {
    var newMarker:marker={
      name:'No Name',
      lat:$event.coords.lat,
      lng:$event.coords.lng
    }
    console.log(newMarker);
    this.allMarkers.push(newMarker);
    this._data.addMarker(newMarker);
  }
  onDelete(m:marker)
  {
    this.allMarkers.splice(this.allMarkers.indexOf(m),1);
    this._data.removeMarker(m);
  }
}
