import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../core/models/accounts';
import { ViewService } from '../core/services/view.service';
import { Location } from '@angular/common';
import { ModalService } from '../modal/modal.service';
import { FirebaseFirestoreService } from '../core/services/firebase-firestore.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  public recommendations: Account[];
  constructor(
    private http: HttpClient,
    private firestore: FirebaseFirestoreService,
    public viewService: ViewService,
    private location: Location,
    public modalService: ModalService
  ) {
    this.firestore.$accounts.subscribe(acc => {
      this.recommendations = acc;
    });
  }
  return() {
    this.location.back();
  }
}
