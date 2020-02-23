import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../core/models/accounts';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public account: Account;
  public recommendations: Account[];
  constructor(private http: HttpClient) {
    http.get<Account[]>('assets/accounts.JSON').subscribe(acc => {
      this.account = acc.shift();
      this.recommendations = acc;
    });
  }

  ngOnInit() {
  }

}
