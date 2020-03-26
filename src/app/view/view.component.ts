import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../core/models/accounts';
import { ViewService } from '../core/view.service';
import { Location } from '@angular/common';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  public recommendations: Account[];
  constructor(private http: HttpClient, public viewService: ViewService, private location: Location, public modalService: ModalService) {
    http.get<Account[]>('assets/accounts.JSON').subscribe(acc => {
      this.recommendations = acc;
    });
  }
  return() {
    this.location.back();
  }
}
