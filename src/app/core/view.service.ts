import { Injectable } from '@angular/core';
import { Account } from './models/accounts';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  public flatMate: Account;
  constructor() { }
}
