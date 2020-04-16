import { NgModule, InjectionToken, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { NotFoundModule } from './not-found-component';
import { QueryService } from './services/query.service';
import { ViewService } from './services/view.service';
import { ModalService } from '../modal/modal.service';
import { ModalDataShareService } from '../modal/modal-data-share.service';
import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';
import { FirebaseAuthService } from './services/firebase-auth.service';
import { FirebaseStoreService } from './services/firebase-store.service';
import { AuthModalService } from '../auth/auth-modal/auth-modal.service';

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
  },
  AuthService,
  QueryService,
  ViewService,
  ModalService,
  ModalDataShareService,
  AccountService,
  AuthModalService,
  FirebaseAuthService,
  FirebaseStoreService
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
