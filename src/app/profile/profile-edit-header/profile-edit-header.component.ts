import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-profile-edit-header',
  templateUrl: './profile-edit-header.component.html',
  styleUrls: ['./profile-edit-header.component.scss']
})
export class ProfileEditHeaderComponent {

  constructor(public accountService: AccountService) { }

  switchActiveStatus() {
    this.accountService.account.active = !this.accountService.account.active;
  }
}
