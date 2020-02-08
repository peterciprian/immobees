import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewFeaturesService, NewFeature } from './new-features.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-features',
  templateUrl: './new-features.component.html',
  styleUrls: ['./new-features.component.scss']
})
export class NewFeaturesComponent implements OnInit {

  public newFeatures: Observable<NewFeature[]>;

  constructor(private news: NewFeaturesService) { }

  ngOnInit() {
    this.newFeatures = this.news.getNewFeatures();
  }
}
