import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalUrlDirective } from './external-url/external-url.directive';
import { HexagonComponent } from './hexagon/hexagon.component';
import { ImmoCardComponent } from './immo-card/immo-card.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap';
import { MatSelectModule } from '@angular/material/select';

import { HexagonLargeComponent } from './hexagon_large/hexagon.large.component';
import { LocaleDatePipe } from './locale-date.pipe';
import { AvatarComponent } from './avatar/avatar.component';
import { DemandPersonalComponent } from './demand-personal/demand-personal.component';
import { DemandRoommateComponent } from './demand-roommate/demand-roommate.component';
import { DemandAvatarComponent } from './demand-avatar/demand-avatar.component';
import { OfferRoomComponent } from './offer-room/offer-room.component';
import { OfferPersonalComponent } from './offer-personal/offer-personal.component';
import { OfferImagesComponent } from './offer-images/offer-images.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';



/**
 * Components
 */
const sharedComponents: any[] = [
  HexagonComponent,
  HexagonLargeComponent,
  ImmoCardComponent,
  AvatarComponent,
  DemandPersonalComponent,
  DemandRoommateComponent,
  DemandAvatarComponent,
  OfferRoomComponent,
  OfferPersonalComponent,
  OfferImagesComponent,
  FileUploadComponent
];

/**
 * Services
 */
const sharedServices: any[] = [
];

/**
 * Directives
 */
const sharedDirectives: any[] = [
  ExternalUrlDirective
];

@NgModule({
  declarations: [
    sharedComponents,
    sharedDirectives,
    LocaleDatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CarouselModule,
    PaginationModule,
    sharedComponents,
    sharedDirectives,
    LocaleDatePipe
  ],
  providers: [
    sharedServices
  ]
})
export class SharedModule { }
