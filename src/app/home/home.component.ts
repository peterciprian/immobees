import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../core/profile.service';
import { CodomainsService } from '../core/codomains.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mobile: boolean;
  constructor() { }

  ngOnInit() {
    this.mobile = window.screen.width < 380 ? true : false;
  }

}
