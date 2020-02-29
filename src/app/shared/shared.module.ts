import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalUrlDirective } from './external-url/external-url.directive';
import { HexagonComponent } from './hexagon/hexagon.component';
import { ImmoCardComponent } from './immo-card/immo-card.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { HexagonLargeComponent } from './hexagon_large/hexagon.large.component';
import { LocaleDatePipe } from './locale-date.pipe';
import { AvatarComponent } from './avatar/avatar.component';



/**
 * Components
 */
const sharedComponents: any[] = [
  HexagonComponent,
  HexagonLargeComponent,
  ImmoCardComponent,
  AvatarComponent
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
    CarouselModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    sharedComponents,
    sharedDirectives,
    LocaleDatePipe
  ],
  providers: [
    sharedServices
  ]
})
export class SharedModule { }
