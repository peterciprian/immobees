import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public isLoaded = false;
  public mobile: boolean;
  public highLight: Account;
  constructor(private http: HttpClient) {
    this.http.get<Account[]>('assets/profiles.JSON').subscribe(acc => {
      this.highLight = acc.shift();
      this.isLoaded = true;
    });
  }

  ngOnInit() {
    this.mobile = window.screen.width < 660 ? true : false;
  }

}
