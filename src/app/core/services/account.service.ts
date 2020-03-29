import { Injectable } from '@angular/core';
import { Account, Subject } from '../models/accounts';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../models/account.class';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private account$ = new BehaviorSubject<Account>(new Profile());
  constructor() { }

  get account(): Account {
    return this.account$.value;
  }
  set account(value: Account) {
    this.account$.next(value);
  }
  public save() {
    console.log(this.account$.value);
  }
}
