import { NgModule, InjectionToken, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { NotFoundModule } from './not-found';

///////////////////////////////////
// Declare tree-shakeable tokens //
///////////////////////////////////
export const API_ENDPOINT = new InjectionToken<string>('apiEndpoint', {
  providedIn: 'root',
  factory: () => environment.baseApiUrl
});

export const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/');
}

const coreServices: any[] = [
  {
    provide: externalUrlProvider,
    useValue: (route: ActivatedRouteSnapshot) => {
      const externalUrl = route.paramMap.get('externalUrl');
      window.open(externalUrl, '_self');
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotFoundModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule],
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        coreServices
      ]
    };
  }
}
