import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { proj, View } from 'openlayers';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { GeoLocationService, GeoReverseValue } from './geo-location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [HttpClient, GeoLocationService]
})
export class MapComponent implements OnInit, OnDestroy {

  @Input()
  // tslint:disable-next-line:max-line-length
  geoReverseService = 'https://nominatim.openstreetmap.org/reverse?key=iTzWSiYpGxDvhATNtSrqx5gDcnMOkntL&format=json&addressdetails=1&lat={lat}&lon={lon}';

  @Input()
  width: string;
  @Input()
  height: string;

  @Input()
  latitude = 52.520008;
  @Input()
  longitude = 13.404954;

  @Input()
  latitudePointer = 52.520008;
  @Input()
  longitudePointer = 13.404954;

  @Input()
  showControlsZoom = true;
  @Input()
  titleZoomIn = 'Zoom in';
  @Input()
  titleZoomOut = 'Zoom out';
  @Input()
  showControlsCurrentLocation: boolean;
  @Input()
  titleCurrentLocation = 'Current location';

  @Input()
  showDebugInfo: boolean;
  @Input()
  opacity = 1;
  @Input()
  zoom = 14;

  reverseGeoSub: Subscription = null;
  pointedAddress: string;
  pointedAddressOrg: string;
  position: any;
  dirtyPosition;

  @Output()
  addressChanged = new EventEmitter<string>();

  public lon: number;
  public lat: number;

  public pointerLon = 19;
  public pointerLat = 47.5;

  constructor(private httpClient: HttpClient, private geoLocationService: GeoLocationService) { this.getPosition(); }

  getPosition(): any {
    return navigator.geolocation.getCurrentPosition(resp => {
      this.lon = resp.coords.longitude;
      this.lat = resp.coords.latitude;
    },
      err => {
        console.error(err);
      });
  }

  ngOnInit() {
    if (this.showControlsCurrentLocation) {
      this.geoLocationService.getLocation().subscribe((position) => {
        this.position = position;
        if (!this.dirtyPosition) {
          this.dirtyPosition = true;
          this.longitude = this.longitudePointer = this.position.coords.longitude;
          this.latitude = this.latitudePointer = this.position.coords.latitude;
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.reverseGeoSub) {
      this.reverseGeoSub.unsubscribe();
    }
  }
  onSingleClick(event) {
    const lonlat = proj.transform(event.coordinate, 'EPSG:3857', 'EPSG:4326');
    this.longitudePointer = lonlat[0];
    this.latitudePointer = lonlat[1];
    this.reverseGeo();
  }
  increaseOpacity() {
    this.opacity += 0.1;
  }

  decreaseOpacity() {
    this.opacity -= 0.1;
  }
  increaseZoom() {
    this.zoom++;
  }
  decreaseZoom() {
    this.zoom--;
  }

  setCurrentLocation(event) {
    // TODO FIX: setting current location does move the pointer but not the map!!!
    if (this.position) {
      this.longitude = this.longitudePointer = this.position.coords.longitude;
      this.latitude = this.latitudePointer = this.position.coords.latitude;
      /**
       * Trigger new address change
       */
      this.reverseGeo();
    }
  }

  reverseGeo() {
    const service = (this.geoReverseService || '')
      .replace(new RegExp('{lon}', 'ig'), `${this.longitudePointer}`)
      .replace(new RegExp('{lat}', 'ig'), `${this.latitudePointer}`);
    this.reverseGeoSub = this.httpClient.get<GeoReverseValue>(service).subscribe(val => {
      this.pointedAddressOrg = val.display_name;
      const address = [];

      const building = [];
      if (val.address.building) {
        building.push(val.address.building);
      }
      if (val.address.mall) {
        building.push(val.address.mall);
      }
      if (val.address.theatre) {
        building.push(val.address.theatre);
      }

      // tslint:disable-next-line:variable-name
      const zip_city = [];
      if (val.address.postcode) {
        zip_city.push(val.address.postcode);
      }
      if (val.address.city) {
        zip_city.push(val.address.city);
      }
      // tslint:disable-next-line:variable-name
      const street_number = [];
      if (val.address.street) {
        street_number.push(val.address.street);
      }
      if (val.address.road) {
        street_number.push(val.address.road);
      }
      if (val.address.footway) {
        street_number.push(val.address.footway);
      }
      if (val.address.pedestrian) {
        street_number.push(val.address.pedestrian);
      }
      if (val.address.house_number) {
        street_number.push(val.address.house_number);
      }

      if (building.length) {
        address.push(building.join(' '));
      }
      if (zip_city.length) {
        address.push(zip_city.join(' '));
      }
      if (street_number.length) {
        address.push(street_number.join(' '));
      }

      this.pointedAddress = address.join(', ');

      this.addressChanged.emit(this.pointedAddress);
    });
  }
}
