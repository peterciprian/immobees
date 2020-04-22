import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../core/models/accounts';
import { ModalService } from '../modal/modal.service';
import { Location } from '@angular/common';
import { FirebaseFirestoreService } from '../core/services/firebase-firestore.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  public myProfile: Account;
  public recommendations: Account[];
  constructor(
    private http: HttpClient,
    private firestore: FirebaseFirestoreService,
    private location: Location,
    public modalService: ModalService
  ) {
    this.firestore.$accounts.subscribe(acc => {
      this.recommendations = acc;
    });
    this.firestore.$getMyAccount().subscribe(me => {
      this.myProfile = me;
    });
  }

  return() {
    this.location.back();
  }

}
