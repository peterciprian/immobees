import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account.service';
import { Picture } from 'src/app/core/models/accounts';

@Component({
  selector: 'app-profile-card-edit',
  templateUrl: './profile-card-edit.component.html',
  styleUrls: ['./profile-card-edit.component.scss']
})
export class ProfileCardEditComponent implements OnInit {
  imageArray = [] as Picture[];
  constructor(public accountService: AccountService) { }

  ngOnInit() {
  }
  addImage(event) {
    this.add(event, this.imageArray);
    console.log(event);
  }
  add(x: any, a: Array<any>) {
    a.unshift(x);
    if (a.length > 6) {
      a.length = 6;
    }
  }
}
