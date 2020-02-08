import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, tap, map } from 'rxjs/operators';

export interface NewFeature {
  validFrom: number;
  validTo: number;
  header: string;
  body: string;
  imageSource: string;
  route: string;
}
@Injectable({
  providedIn: 'root'
})
export class NewFeaturesService {
  private today = new Date().getTime();

  constructor(private http: HttpClient) { }

  getNewFeatures(): Observable<NewFeature[]> {
    return this.http.get<NewFeature[]>('assets/new-features.JSON')
      .pipe(
        map(v => v.filter(e => this.today >= e.validFrom && this.today <= e.validTo))
      );
  }
}
