import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { ResultListComponent } from './result-list/result-list.component';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [SearchComponent, SearchPanelComponent, ResultListComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
