import { Component, Input } from '@angular/core';
import { ViewService } from 'src/app/core/services/view.service';
import { Router } from '@angular/router';
import { Account } from 'src/app/core/models/accounts';
import { FirebaseFirestoreService } from 'src/app/core/services/firebase-firestore.service';

@Component({
  selector: 'app-high-light',
  templateUrl: './high-light.component.html',
  styleUrls: ['./high-light.component.scss']
})
export class HighLightComponent {

  @Input() account: Account;

  constructor(private viewService: ViewService, private router: Router, public fs: FirebaseFirestoreService) { }

  view(account) {
    this.viewService.flatMate = account;
    this.router.navigateByUrl(`/view?uid=${account.userID}`);
  }
}
