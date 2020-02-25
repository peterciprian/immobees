import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account, serviceType } from '../core/models/accounts';
import { ViewService } from '../core/view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public account: Account;
  public recommendations: Account[];
  constructor(private http: HttpClient, public viewService: ViewService) {
    http.get<Account[]>('assets/accounts.JSON').subscribe(acc => {
      this.account = acc.shift();
      this.recommendations = acc;
    });
  }

  ngOnInit() {
  }

}
