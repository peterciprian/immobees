import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-edit-header',
  templateUrl: './profile-edit-header.component.html',
  styleUrls: ['./profile-edit-header.component.scss']
})
export class ProfileEditHeaderComponent implements OnInit {

  public selected = false;
  constructor() { }

  ngOnInit() {
  }

  switchActiveStatus() {
    this.selected = !this.selected;
  }
}
