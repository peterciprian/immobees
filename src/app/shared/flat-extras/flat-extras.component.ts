import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/core/models/accounts';
import { AccountService } from 'src/app/core/services/account.service';


@Component({
  selector: 'app-flat-extras',
  templateUrl: './flat-extras.component.html',
  styleUrls: ['./flat-extras.component.scss']
})
export class FlatExtrasComponent implements OnInit {

  public extras: Details = {
    lift: false,
    washingMachine: false,
    smokingArea: false,
    balcony: false,
    gym: false,
    accessible: false,
    petsAllowed: false,
    television: false,
    internet: false,
    garage: false,
    jakuzzi: false,
    airConditioner: false,
    privateBathroom: false,
    parking: false,
    shortPeriod: false
  };

  public extraList = [];

  constructor(
    public accountService: AccountService) {
    Object.keys(this.accountService.account.subject.details).forEach(k => {
      this.extraList.push(k.toUpperCase());
    });
  }

  ngOnInit() {
  }
  switchAttribute(attribute) {
    this.accountService.account.subject.details[attribute] = !this.accountService.account.subject.details[attribute];
  }
}
