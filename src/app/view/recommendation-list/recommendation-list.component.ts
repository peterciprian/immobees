import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accounts } from 'src/app/core/models/accounts';

@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListComponent implements OnInit {
  public recommendations: Account[];
  constructor(private http: HttpClient) {
    http.get<Account[]>('assets/accounts.JSON').subscribe(acc => this.recommendations = acc.slice(0, 3));
  }

  ngOnInit() {
  }

}
