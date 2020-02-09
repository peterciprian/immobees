import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hexagon-large',
  templateUrl: './hexagon.large.component.html',
  styleUrls: ['./hexagon.large.component.scss']
})
export class HexagonLargeComponent implements OnInit {
  @Input() img = '/assets/img/blank-profile-picture-973460_960_720.webp';
  constructor() { }

  ngOnInit() {
  }

}
