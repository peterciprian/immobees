import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account.service';


@Component({
  selector: 'app-flat-extras',
  templateUrl: './flat-extras.component.html',
  styleUrls: ['./flat-extras.component.scss']
})
export class FlatExtrasComponent implements OnInit {

  public extraList = [];

  constructor(
    public accountService: AccountService) {
    Object.keys(this.accountService.account.subject.details).forEach(k => {
      this.extraList.push(k);
    });
  }

  ngOnInit() {
  }
  switchAttribute(attribute) {
    this.accountService.account.subject.details[attribute] = !this.accountService.account.subject.details[attribute];
  }
}
