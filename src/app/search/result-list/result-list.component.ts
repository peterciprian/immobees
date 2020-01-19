import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from 'src/app/core/models/accounts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit, OnDestroy {

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

}
