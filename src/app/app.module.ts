import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AuthModalComponent } from './auth/auth-modal/auth-modal.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ModalComponent,
    AuthModalComponent,
    RegisterComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  entryComponents: [
    ModalComponent,
    AuthModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
