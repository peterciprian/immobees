import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/core/models/accounts';
import { ViewService } from 'src/app/core/services/view.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommend-card',
  templateUrl: './recommend-card.component.html',
  styleUrls: ['./recommend-card.component.scss']
})
export class RecommendCardComponent {

  @Input() flatMate: Account;
  constructor(private viewService: ViewService, private router: Router) {
  }

  view(account) {
    this.viewService.flatMate = account;
    this.router.navigateByUrl(`/view?uid=${account.userID}`);
  }

}
