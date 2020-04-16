import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { ModalService } from '../modal/modal.service';
import { ViewService } from '../core/services/view.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../core/services/firebase-auth.service';
import { AuthModalService } from '../auth/auth-modal/auth-modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(
    public authService: FirebaseAuthService,
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
    this.auth.userProfile$.pipe(first()).subscribe(me => {
      this.viewService.flatMate = me;
      this.router.navigate(['/view']);
    });
  }
}
