import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';

import { MapModule } from './map/map.module';

import { ViewComponent } from './view.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AdPropertiesComponent } from './ad-properties/ad-properties.component';
import { FlatPropertiesComponent } from './flat-properties/flat-properties.component';
import { MapComponent } from './map/map.component';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    ViewComponent,
    ProfileCardComponent,
    AdPropertiesComponent,
    FlatPropertiesComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewRoutingModule,
    AngularOpenlayersModule,
    MapModule
  ]
})
export class ViewModule { }
