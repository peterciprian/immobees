import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { ModalService } from '../modal/modal.service';
import { ViewService } from '../core/view.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(
    public auth: AuthService,
    private modalService: ModalService,
    private viewService: ViewService,
    private router: Router
    ) {
    this.auth.isAuthenticated$.subscribe(val => { if (val) { this.modalService.openDialog('data'); } });
  }
public viewMyProfile() {
  this.auth.userProfile$.pipe(first()).subscribe(me => {
    console.log(me);
    this.viewService.flatMate = me;
    this.router.navigate(['/view']);
  });
}
}
