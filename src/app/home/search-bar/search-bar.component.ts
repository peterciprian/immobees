import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { QueryService } from 'src/app/core/services/query.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router, public queryService: QueryService) { }

  ngOnInit() {
  }

  search() {
    this.queryService.getQueryResults(this.router.navigate(['../search']));
  }

  switchRoomType() {
    this.queryService.homeSearchQueryFields.room = this.queryService.homeSearchQueryFields.room === 0 ? 1 : 0;
  }

  changeGender(param: number) {
    this.queryService.homeSearchQueryFields.gender = param;
  }

}
