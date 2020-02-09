import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: 'favs', loadChildren: () => import('./favs/favs.module').then(m => m.FavsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
