import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/core/models/accounts';
import { ViewService } from 'src/app/core/services/view.service';
import { Router } from '@angular/router';
import { FirebaseFirestoreService } from 'src/app/core/services/firebase-firestore.service';

@Component({
  selector: 'app-recommend-card',
  templateUrl: './recommend-card.component.html',
  styleUrls: ['./recommend-card.component.scss']
})
export class RecommendCardComponent {

  @Input() flatMate: Account;
  constructor(private viewService: ViewService, private router: Router, public fs: FirebaseFirestoreService) {
  }

  view(account) {
    this.viewService.flatMate = account;
    this.router.navigateByUrl(`/view?uid=${account.userID}`);
  }

}
