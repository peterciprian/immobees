import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/core/query.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato'
  ];
  constructor(public queryService: QueryService) {}

  ngOnInit() {}

  switchRoomType() {
    this.queryService.homeSearchQueryFields.room =
      this.queryService.homeSearchQueryFields.room === 0 ? 1 : 0;
  }

  switchImmoType() {
    this.queryService.homeSearchQueryFields.immo =
      this.queryService.homeSearchQueryFields.immo === 0 ? 1 : 0;
  }

  changeGender(param: number) {
    this.queryService.homeSearchQueryFields.gender = param;
  }

}
