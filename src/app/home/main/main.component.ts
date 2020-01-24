import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 public mobile: boolean;
 public account = {
  name: 'Réka',
  age: 11,
  spokenLanguages: ['hun', 'eng'],
  school: 'bge',
  subject: {
    serviceType: 'keres',
    address: {
      display: 'Budapest, XVIII. kerület'
    }
  },
  roomType: 'szobatárs',
  moveIntoAt: '2020-01-19T12:14:42.275Z',
  price: {
    currency: 'huf',
    min: 40000,
    max: 60000,
    billsIncluded: false
  }
};

  constructor() { }

  ngOnInit() {
    this.mobile = window.screen.width < 600 ? true : false;
  }

}
