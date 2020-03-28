import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { QueryService } from 'src/app/core/services/query.service';

export enum roomType {
  keres,
  kinal
}
export enum gender {
  female,
  male,
  dnm
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(private router: Router, public queryService: QueryService) { }

  ngOnInit() {
  }

  search(query) {
    this.router.navigate(['../search'])
      .then(n => console.log(this.queryService.homeSearchQueryFields));
  }

  switchRoomType() {
    this.queryService.homeSearchQueryFields.room = this.queryService.homeSearchQueryFields.room === 0 ? 1 : 0;
  }

  changeGender(param: number) {
    this.queryService.homeSearchQueryFields.gender = param;
  }

}
