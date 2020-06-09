import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../core/models/accounts';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../modal/modal.service';
import { ViewService } from '../core/services/view.service';
import { FirebaseFirestoreService } from '../core/services/firebase-firestore.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public recommendations: Account[];
  private uid;
  constructor(
    private http: HttpClient,
    private firestore: FirebaseFirestoreService,
    public viewService: ViewService,
    private location: Location,
    private route: ActivatedRoute,
    public modalService: ModalService
  ) {
    this.firestore.$accounts.subscribe(acc => {
      this.recommendations = acc;
    });
  }
  ngOnInit(): void {
    this.uid = this.route.snapshot.queryParamMap.get('uid');
    this.route.queryParamMap.subscribe(queryParams => {
      this.uid = queryParams.get('uid');
    });
    if (!this.viewService.flatMate) {
      this.firestore.$accounts.pipe(first()).subscribe(acc => {
        this.viewService.flatMate = acc.find(a => a.userID === this.uid);
      });
    } else {
      console.log(this.viewService.flatMate);
    }
  }
  return() {
    this.location.back();
  }
}
