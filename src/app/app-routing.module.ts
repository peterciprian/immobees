import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from 'src/app/core/not-found-component/not-found.component';
import { externalUrlProvider } from 'src/app/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './core/services/interceptor.service';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'view', loadChildren: () => import('./view/view.module').then(m => m.ViewModule) },
  { path: 'messages', loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule) },
  {
    path: 'externalRedirect',
    resolve: {
      url: externalUrlProvider,
    },
    // We need a component here because we cannot define the route otherwise
    component: NotFoundComponent,
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }]
})
export class AppRoutingModule { }
