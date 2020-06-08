import { Component } from '@angular/core';
import { Account } from 'src/app/core/models/accounts';
import { QueryService } from 'src/app/core/services/query.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

export interface SortOptions {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})

export class ResultListComponent {

  public resultList: Account[];
  public currentPage = 1;
  public sortBy: SortOptions;
  public sortOptions: SortOptions[] = [
    // { value: 'subject.price.fee_desc', viewValue: 'Legdrágább elöl' },
    { value: 'subject.price.fee_asc', viewValue: 'Legolcsóbb' },
    { value: 'updatedAt_asc', viewValue: 'Legfrissebb' },
    // { value: 'updatedAt_asc', viewValue: 'Legrégebbi elöl' }
    { value: 'moveIntoAt_asc', viewValue: 'Leghamarabb költözhető' },
    // { value: 'moveIntoAt_asc', viewValue: 'Legkésőbb költözhető' },
    { value: 'name_asc', viewValue: 'Név szerint növekvő' },
    { value: 'name_desc', viewValue: 'Név szerint csökkenő' },
  ];

  returnedArray: Account[];
  constructor(public queryService: QueryService) {
    this.queryService.$accounts.subscribe(results => {
      this.resultList = results;
      this.pageChanged({ itemsPerPage: 10, page: 1 });
    });
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.resultList.slice(startItem, endItem);
  }

}
