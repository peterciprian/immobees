import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/core/models/accounts';

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

  constructor() {
    console.log(this.extras);
    Object.keys(this.extras).forEach(k => {
      this.extraList.push(k.toUpperCase());
    });
    console.log(this.extraList);
  }

  ngOnInit() {
  }
  switchAttribute(attribute) {
    this.extras[attribute] = !this.extras[attribute];
  }
}
