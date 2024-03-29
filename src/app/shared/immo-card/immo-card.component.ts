import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/core/models/accounts';
import { ViewService } from 'src/app/core/services/view.service';
import { Router } from '@angular/router';
import { FirebaseFirestoreService } from 'src/app/core/services/firebase-firestore.service';

@Component({
  selector: 'app-immo-card',
  templateUrl: './immo-card.component.html',
  styleUrls: ['./immo-card.component.scss']
})
export class ImmoCardComponent {

  @Input() account: Account;

  constructor(private viewService: ViewService, private router: Router, public fs: FirebaseFirestoreService) { }

  view(account) {
    this.viewService.flatMate = account;
    this.router.navigateByUrl(`/view?uid=${account.userID}`);
  }

}
