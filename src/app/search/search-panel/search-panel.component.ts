import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/core/query.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {

  constructor(public queryService: QueryService) { }

  ngOnInit() {
  }

  switchRoomType() {
    this.queryService.homeSearchQueryFields.room = this.queryService.homeSearchQueryFields.room === 0 ? 1 : 0;
  }

  switchImmoType() {
    this.queryService.homeSearchQueryFields.immo = this.queryService.homeSearchQueryFields.immo === 0 ? 1 : 0;
  }

  changeSex(param: number) {
    this.queryService.homeSearchQueryFields.sex = param;
  }

}
