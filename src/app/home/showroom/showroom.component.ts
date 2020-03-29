import { Component, OnInit, OnDestroy } from '@angular/core';
import { Account } from 'src/app/core/models/accounts';
import { HttpClient } from '@angular/common/http';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss'],
  animations: [/*
    trigger('myInsertRemoveTrigger', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ]) */
  ]
})
export class ShowroomComponent implements OnInit {

  public itemsPerSlide = 4;
  public everyAccount: Account[];
  public accounts: Account[] = [];
  private totalAccounts = 0;

  constructor(private http: HttpClient) {
    http.get<Account[]>('assets/Account.JSON').subscribe(acc => {
      this.totalAccounts = acc.length;
      this.everyAccount = acc;
      this.sliceAccounts(0, this.itemsPerSlide);
    });
  }

  ngOnInit() {
    if (window.matchMedia('(max-width: 519px)').matches) {
      this.itemsPerSlide = 1;
    } else if (window.matchMedia('(max-width: 1023px)').matches) {
      this.itemsPerSlide = 2;
    } else if (window.matchMedia('(max-width: 1519px)').matches) {
      this.itemsPerSlide = 4;
    } else {
      this.itemsPerSlide = 6;
    }
  }

  sliceAccounts(from, to) {
    if (this.everyAccount) {
      this.accounts = this.accounts.length === 0 ? this.everyAccount.slice(0, this.itemsPerSlide) : this.everyAccount.slice(from, to);
    }
  }

  next() {
    const from = this.everyAccount.findIndex(e => e === this.accounts[this.accounts.length - 1]) + 1;
    const to = from + this.itemsPerSlide > this.totalAccounts ? this.totalAccounts : from + this.itemsPerSlide;
    this.sliceAccounts(from, to);
    let i = 0;
    while (this.accounts.length < this.itemsPerSlide) {
      this.accounts.push(this.everyAccount[i]);
      i++;
    }
  }

  previous() {
    const to = this.everyAccount.findIndex(e => e === this.accounts[0]);
    const from = to - this.itemsPerSlide;
    if (from >= 0) {
      this.sliceAccounts(from, to);
    } else {
      this.sliceAccounts(0, to);
      let i = Math.abs(from);
      while (this.accounts.length < this.itemsPerSlide) {
        this.accounts.unshift(this.everyAccount[this.everyAccount.length - i]);
        i--;
      }
    }
  }

}
