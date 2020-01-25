import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from 'src/app/core/models/accounts';
import { Observable } from 'rxjs';
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

export class ResultListComponent implements OnInit, OnDestroy {

  contentArray = new Array(90).fill('');
  returnedArray: string[];
  currentPage = 1;
  sortBy: SortOptions;
  sortOptions: SortOptions[] = [
    { value: 'price_asc', viewValue: 'Ár szerint csökkenő' },
    { value: 'price_desc', viewValue: 'Ár szerint növekvő' },
    { value: 'date_asc', viewValue: 'Leghamarabb költözhető' },
    { value: 'date_desc', viewValue: 'Legkésőbb költözhető' },
    { value: 'abc_asc', viewValue: 'Név szerint növekvő' },
    { value: 'abc_desc', viewValue: 'Név szerint csökkenő' },
    { value: 'created_desc', viewValue: 'Legfrissebb' },
    { value: 'created_desc', viewValue: 'Legrégebbi' }
  ];

  public accounts: Account[];
  public length = 0;
  private subscriptions = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.subscriptions.push(this.http.get<Account[]>('assets/accounts.JSON').subscribe(acc => {
      this.accounts = acc;
      this.length = acc.length;
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(e => {
      e.unsubscribe();
    });
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }

}
