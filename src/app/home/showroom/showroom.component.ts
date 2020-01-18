import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/core/models/accounts';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {

  public accounts: Account[];
  constructor() {
    this.accounts = [
      {
        name: 'Réka',
        age: 11,
        spokenLanguages: ['hun', 'eng'],
        school: 'bge',
        subject: {
          serviceType: 'keres',
          address: { display: 'Budapest, XVIII. kerület' },
        },
        roomType: 'szobatárs',
        moveIntoAt: new Date(Date.now()),
        price: {
          currency: 'huf',
          min: 40000,
          max: 60000,
          billsIncluded: false
        }
      },
      {
        name: 'Réka',
        age: 22,
        spokenLanguages: ['hun', 'eng'],
        school: 'bge',
        subject: {
          serviceType: 'keres',
          address: { display: 'Budapest, XVIII. kerület' },
        },
        roomType: 'szobatárs',
        moveIntoAt: new Date(Date.now()),
        price: {
          currency: 'huf',
          min: 40000,
          max: 60000,
          billsIncluded: false
        }
      },
      {
        name: 'Réka',
        age: 33,
        spokenLanguages: ['hun', 'eng'],
        school: 'bge',
        subject: {
          serviceType: 'keres',
          address: { display: 'Budapest, XVIII. kerület' },
        },
        roomType: 'szobatárs',
        moveIntoAt: new Date(Date.now()),
        price: {
          currency: 'huf',
          min: 40000,
          max: 60000,
          billsIncluded: false
        }
      },
      {
        name: 'Réka',
        age: 44,
        spokenLanguages: ['hun', 'eng'],
        school: 'bge',
        subject: {
          serviceType: 'keres',
          address: { display: 'Budapest, XVIII. kerület' },
        },
        roomType: 'szobatárs',
        moveIntoAt: new Date(Date.now()),
        price: {
          currency: 'huf',
          min: 40000,
          max: 60000,
          billsIncluded: false
        }
      },
      {
        name: 'Réka',
        age: 55,
        spokenLanguages: ['hun', 'eng'],
        school: 'bge',
        subject: {
          serviceType: 'keres',
          address: { display: 'Budapest, XVIII. kerület' },
        },
        roomType: 'szobatárs',
        moveIntoAt: new Date(Date.now()),
        price: {
          currency: 'huf',
          min: 40000,
          max: 60000,
          billsIncluded: false
        }
      }
    ];
  }

  ngOnInit() {
  }

}
