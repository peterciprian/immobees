import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/core/models/accounts';

@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListComponent implements OnInit {
  @Input() recommendations: Account[];
  constructor() {
  }

  ngOnInit() {
  }

}
