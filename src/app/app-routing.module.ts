import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from 'src/app/core/not-found/not-found.component';
import { externalUrlProvider } from 'src/app/core';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: '**', component: NotFoundComponent },
  {
    path: 'externalRedirect',
    resolve: {
      url: externalUrlProvider,
    },
    // We need a component here because we cannot define the route otherwise
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
