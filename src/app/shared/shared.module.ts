import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalUrlDirective } from './external-url/external-url.directive';
import { HexagonComponent } from './hexagon/hexagon.component';



/**
 * Components
 */
const sharedComponents: any[] = [
  HexagonComponent
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
    CommonModule
  ],
  exports: [
    CommonModule,
    sharedComponents,
    sharedDirectives
  ],
  providers: [
    sharedServices
  ]
})
export class SharedModule { }
