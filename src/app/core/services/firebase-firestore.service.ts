import { Injectable } from '@angular/core';
import { Account } from '../models/accounts';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from './firebase-auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFirestoreService {

  private userData: User;
  public accountsCollection: AngularFirestoreCollection<Account>;
  public $accounts: Observable<Account[]>;

  constructor(
    private afs: AngularFirestore,
    private authService: FirebaseAuthService) {
    this.accountsCollection = this.afs.collection<Account>('accounts');
    this.$accounts = this.accountsCollection.valueChanges();
  }

  addAccount(account: Account) {
    const id = this.authService.userData.uid;
    account.userID = id;
    account.name = this.authService.userData.displayName;
    account.avatar.url = (account.avatar.url !== '' && account.avatar.url !== undefined && account.avatar.url !== null) ?
      account.avatar.url : this.authService.userData.photoURL;
    account.createdAt = new Date(Date.now());
    this.accountsCollection.doc(id).set(JSON.parse(JSON.stringify(account)))
      .catch(error => this.handleError(error))
      .then(data => this.handleData(data));
  }

  $getAccount(uid) {
    return this.accountsCollection.doc(uid).get();
  }

  $getMyAccount(): Observable<Account> {
    return this.accountsCollection.doc(this.authService.userData.uid).valueChanges() as Observable<Account>;
  }

  updateAccount(uid, account) {
    account.updatedAt = new Date(Date.now());
    this.accountsCollection.doc(uid).set(account, { merge: true })
      .catch(error => this.handleError(error))
      .then(data => this.handleData(data));
    // vagy: this.accountsCollection.doc(uid).set(account, { merge: true });
  }

  updateMyAccount(account) {
    account.updatedAt = new Date(Date.now());
    this.accountsCollection.doc(this.authService.userData.uid).set(account, { merge: true })
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
