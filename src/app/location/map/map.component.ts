import { AfterViewInit, Component, OnInit } from '@angular/core';
import { icon, Marker } from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map!: L.Map;

  constructor() {}
  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnInit(): void {}

  private initMap(): void {
    this.map = L.map('map', {
      center: [52.201353, 20.747616],
      zoom: 8,
    });

    const googleHybrid = L.tileLayer(
      'https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
      {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      }
    );

    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl = 'assets/marker-icon.png';
    const shadowUrl = 'assets/marker-shadow.png';
    const iconDefault = icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });
    Marker.prototype.options.icon = iconDefault;

    googleHybrid.addTo(this.map);
    var marker = L.marker([52.186049, 20.467185]).addTo(this.map);

    marker
      .bindPopup(
        '<b>Oczyszczalnia Miejsce</b><br><p><b>Address</b></p><p>Ludwików 26, 26A <br>96-515 Teresin <br> Powiat Sochaczewski</p>',
        {
          closeButton: false,
        }
      )
      .openPopup();
  }
}
