import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/core/models/accounts';

@Component({
  selector: 'app-recommend-card',
  templateUrl: './recommend-card.component.html',
  styleUrls: ['./recommend-card.component.scss']
})
export class RecommendCardComponent implements OnInit {

  @Input() flatMate: Account;
  constructor() { }

  ngOnInit() {
  }

}
