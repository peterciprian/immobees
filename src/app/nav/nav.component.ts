import { Component } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { ViewService } from '../core/services/view.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../core/services/firebase-auth.service';
import { AuthModalService } from '../auth/auth-modal/auth-modal.service';
import { FirebaseFirestoreService } from '../core/services/firebase-firestore.service';
import { AccountService } from '../core/services/account.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public $hasAccount = new BehaviorSubject<boolean>(false);

  constructor(
    public authService: FirebaseAuthService,
    public firestore: FirebaseFirestoreService,
    private modalService: ModalService,
    public authModalService: AuthModalService,
    private accountService: AccountService,
    private viewService: ViewService,
    private router: Router
  ) {
    this.authService.afAuth.authState.subscribe(user => {
      if (user) {
        this.firestore.$getAccount(user.uid).subscribe(account => {
          this.$hasAccount.next(account.exists);
        });
      }
    });
    this.$hasAccount.subscribe(val => {
      if (!val) { this.modalService.openDialog('data'); }
    });
  }
  public viewMyProfile() {
    if (this.authService.userData === undefined) { return; } else {
      this.firestore.$getMyAccount().pipe(first()).subscribe(me => {
        this.viewService.flatMate = me;
        this.router.navigateByUrl(`/view?uid=${me.userID}`);
      },
        error => { console.error(error); });
    }
  }
  public editMyProfile() {
    if (this.authService.userData === undefined) { return; } else {
      this.firestore.$getMyAccount().pipe(first()).subscribe(me => {
        this.accountService.account = me;
        this.router.navigate(['/profile']);
      },
        error => { console.error(error); });
    }
  }
}
