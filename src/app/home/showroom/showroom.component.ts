import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/core/models/accounts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {

  public accounts: Account[];
  constructor(private http: HttpClient) {
    http.get<Account[]>('assets/accounts.JSON').subscribe(acc => this.accounts = acc);
  }

  ngOnInit() {
  }

}
