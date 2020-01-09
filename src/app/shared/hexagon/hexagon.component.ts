import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent implements OnInit {
  @Input() img = '/assets/img/blank-profile-picture-973460_960_720.webp';
  constructor() { }

  ngOnInit() {
  }

}
