import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AdPropertiesEditComponent } from './ad-properties-edit/ad-properties-edit.component';
import { ProfileCardEditComponent } from './profile-card-edit/profile-card-edit.component';
import { FlatPropertiesEditComponent } from './flat-properties-edit/flat-properties-edit.component';
import { SharedModule } from '../shared';
import { ProfileEditHeaderComponent } from './profile-edit-header/profile-edit-header.component';


@NgModule({
  declarations: [
    ProfileComponent,
    AdPropertiesEditComponent,
    FlatPropertiesEditComponent,
    ProfileCardEditComponent,
    ProfileEditHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
