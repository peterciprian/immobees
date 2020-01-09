import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MatSelectModule } from '@angular/material/select';

import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { FrequentsComponent } from './frequents/frequents.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { NewFeaturesComponent } from './new-features/new-features.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    SearchBarComponent,
    ShowroomComponent,
    FrequentsComponent,
    ShortcutsComponent,
    NewFeaturesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    MatSelectModule
  ]
})
export class HomeModule { }
