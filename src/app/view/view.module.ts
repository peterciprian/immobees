import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';

import { MapModule } from './map/map.module';

import { ViewComponent } from './view.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AdPropertiesComponent } from './ad-properties/ad-properties.component';
import { FlatPropertiesComponent } from './flat-properties/flat-properties.component';
import { RecommendationListComponent } from './recommendation-list/recommendation-list.component';
import { RecommendCardComponent } from './recommend-card/recommend-card.component';
import { ProfileCardEditComponent } from '../profile/profile-card-edit/profile-card-edit.component';
import { AdPropertiesEditComponent } from '../profile/ad-properties-edit/ad-properties-edit.component';
import { MapComponent } from './map/map.component';
import { AngularOpenlayersModule } from 'ngx-openlayers';

@NgModule({
  declarations: [
    ViewComponent,
    ProfileCardComponent,
    AdPropertiesComponent,
    FlatPropertiesComponent,
    RecommendationListComponent,
    RecommendCardComponent,
    ProfileCardEditComponent,
    AdPropertiesEditComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    AngularOpenlayersModule,
    MapModule
  ]
})
export class ViewModule { }
