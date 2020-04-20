import { Injectable } from '@angular/core';
import { Account, Accounts } from '../models/accounts';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AccountService } from './account.service';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from './firebase-auth.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFirestoreService {

  private userData: User;
  public accountsCollection: AngularFirestoreCollection<Account>;
  public $accounts: Observable<Account[]>;

  constructor(
    private afs: AngularFirestore,
    private accountService: AccountService,
    private authService: FirebaseAuthService) {
    this.accountsCollection = afs.collection<Account>('accounts');
    this.$accounts = this.accountsCollection.valueChanges();
  }

  addAccount(account: Account) {
    const id = this.authService.userData.uid;
    account.userID = id;
    account.createdAt = new Date(Date.now());
    this.accountsCollection.doc(id).set(account)
      .catch(error => this.handleError(error))
      .then(data => this.handleData(data));
  }

  $getAccount(uid) {
    return this.accountsCollection.doc(uid).get();
  }

  $getMyAccount() {
    return this.accountsCollection.doc(this.authService.userData.uid).get();
  }

  updateAccount(uid, account) {
    account.updatedAt = new Date(Date.now());
    this.accountsCollection.doc(uid).update(account)
      .catch(error => this.handleError(error))
      .then(data => this.handleData(data));
    // vagy: this.accountsCollection.doc(uid).set(account, { merge: true });
  }

  updateMyAccount(account) {
    account.updatedAt = new Date(Date.now());
    this.accountsCollection.doc(this.authService.userData.uid).update(account)
      .catch(error => this.handleError(error))
      .then(data => this.handleData(data));
    // vagy: this.accountsCollection.doc(this.authService.userData.uid).set(account, { merge: true });
  }

  deleteAccount(uid) {
    this.accountsCollection.doc(uid).delete()
      .catch(error => this.handleError(error))
      .then(data => this.handleData(data));
  }

  setMyAccountValidation(value: boolean) {
    this.accountsCollection.doc(this.authService.userData.uid).update({
      // tslint:disable:object-literal-key-quotes
      'active': value,
      'updatedAt': new Date(Date.now())
    })
      .catch(error => this.handleError(error))
      .then(data => this.handleData(data));
  }

  handleData(data) {
    console.log(data);
  }
  handleError(error) {
    console.error(error);
  }
}
