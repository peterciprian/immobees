import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/core/services/view.service';

@Component({
  selector: 'app-ad-properties',
  templateUrl: './ad-properties.component.html',
  styleUrls: ['./ad-properties.component.scss']
})
export class AdPropertiesComponent implements OnInit {

  activeSlideIndex = 0;
  slides = [
    { image: 'assets/img/house.png' },
    { image: 'assets/img/move.png' },
    { image: 'assets/img/room.png' },
    { image: 'assets/img/house.png' },
    { image: 'assets/img/move.png' },
    { image: 'assets/img/room.png' }
  ];
  scrollHistory = [0, 0];
  constructor(public viewService: ViewService) { }

  ngOnInit() {
  }
  change(event) {
    this.scrollHistory.push(event);
    this.scrollHistory.shift();
    const container = document.querySelector('.image-list');
    if (event === 0) {
      container.scrollLeft = 0;
    } else if (event === this.slides.length - 1) {
      container.scrollLeft = event * 150;
    } else {
      if (this.scrollHistory[0] > this.scrollHistory[1]) {
        container.scrollLeft -= 150;
      } else if (this.scrollHistory[0] < this.scrollHistory[1]) {
        container.scrollLeft += 150;
      }
    }
  }
}
