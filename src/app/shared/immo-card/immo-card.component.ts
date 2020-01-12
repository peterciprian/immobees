import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/core/models/accounts';

@Component({
  selector: 'app-immo-card',
  templateUrl: './immo-card.component.html',
  styleUrls: ['./immo-card.component.scss']
})
export class ImmoCardComponent implements OnInit {

  @Input() account: Account;

  constructor() {
  }

  ngOnInit() {
  }

}
