import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AdPropertiesEditComponent } from './ad-properties-edit/ad-properties-edit.component';
import { ProfileCardEditComponent } from './profile-card-edit/profile-card-edit.component';


@NgModule({
  declarations: [
    ProfileComponent,
    AdPropertiesEditComponent,
    ProfileCardEditComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
