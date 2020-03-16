import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(public auth: AuthService, private modalService: ModalService) {
    this.auth.isAuthenticated$.subscribe(val => { if (val) { this.modalService.openDialog('data'); } });
  }

}
