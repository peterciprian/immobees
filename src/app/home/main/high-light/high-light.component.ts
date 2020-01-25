import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-high-light',
  templateUrl: './high-light.component.html',
  styleUrls: ['./high-light.component.scss']
})
export class HighLightComponent implements OnInit {

  @Input() account;

  constructor() { }

  ngOnInit() {
  }

}
