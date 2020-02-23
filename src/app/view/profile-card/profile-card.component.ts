import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/core/models/accounts';
import { ViewService } from 'src/app/core/view.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  constructor(public viewService: ViewService) {
  }

  ngOnInit() {
  }

}
