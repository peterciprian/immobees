import { Injectable } from '@angular/core';
import { Account, Subject } from '../models/accounts';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private account$ = new BehaviorSubject<Account>(null);
  constructor() { }

  get account(): Account {
    return this.account$.value;
  }
  set account(value: Account) {
    this.account$.next(value);
  }
}
