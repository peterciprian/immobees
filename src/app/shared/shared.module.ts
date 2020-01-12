import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalUrlDirective } from './external-url/external-url.directive';
import { HexagonComponent } from './hexagon/hexagon.component';
import { ImmoCardComponent } from './immo-card/immo-card.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';



/**
 * Components
 */
const sharedComponents: any[] = [
  HexagonComponent,
  ImmoCardComponent
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
    sharedDirectives
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  exports: [
    CommonModule,
    CarouselModule,
    sharedComponents,
    sharedDirectives
  ],
  providers: [
    sharedServices
  ]
})
export class SharedModule { }
