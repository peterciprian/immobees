import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { QueryService } from 'src/app/core/query.service';

export enum roomType {
  keres,
  kinal
}
export enum sex {
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

  changeSex(param: number) {
    this.queryService.homeSearchQueryFields.sex = param;
    }

}
