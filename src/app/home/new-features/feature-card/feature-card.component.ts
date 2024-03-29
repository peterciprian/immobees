import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {

  @Input() header: string;
  @Input() body: string;
  @Input() imageSource: string;
  @Input() route?: string;

  constructor() { }

  ngOnInit() {
  }

}
