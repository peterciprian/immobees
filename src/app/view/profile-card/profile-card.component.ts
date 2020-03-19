import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/core/view.service';

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
