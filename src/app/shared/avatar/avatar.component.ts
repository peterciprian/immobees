import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() img = 'assets/img/blank-profile-picture-973460_960_720.webp';
  @Input() size = '150px';
  constructor() { }

  ngOnInit() {
  }

}
