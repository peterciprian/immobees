import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { ModalService } from '../modal/modal.service';
import { ViewService } from '../core/services/view.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../core/services/firebase-auth.service';
import { AuthModalService } from '../auth/auth-modal/auth-modal.service';
import { FirebaseFirestoreService } from '../core/services/firebase-firestore.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(
    public authService: FirebaseAuthService,
    public firestore: FirebaseFirestoreService,
    public auth: AuthService,
    private modalService: ModalService,
    public authModalService: AuthModalService,
    private viewService: ViewService,
    private router: Router
  ) {
    this.auth.isAuthenticated$.subscribe(val => {
      if (val) {
        this.modalService.openDialog('data');
      }
    });
  }
  public viewMyProfile() {
    if (this.authService.userData === undefined) { return; } else {
      this.firestore.$getMyAccount().pipe(first()).subscribe(me => {
        this.viewService.flatMate = me;
        this.router.navigate(['/view']);
      });
    }
  }
}
