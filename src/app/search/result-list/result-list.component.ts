import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from 'src/app/core/models/accounts';
import { Observable } from 'rxjs';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit, OnDestroy {

  contentArray = new Array(90).fill('');
  returnedArray: string[];

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
