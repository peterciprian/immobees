import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import * as languages from '../models/languages';
import * as nationalities from '../models/nationalities';
import { Nationality, Language } from '../models/public';

@Injectable({
  providedIn: 'root'
})
export class CodomainsService {

  constructor(private http: HttpClient) { }

  getProfessions(): Observable<string[]> {
    const headers = new HttpHeaders();
    return this.http.get<string[]>(`${environment.baseApiUrl}/professions`, { headers });
  }

  getPets(): Observable<string[]> {
    const headers = new HttpHeaders();
    return this.http.get<string[]>(`${environment.baseApiUrl}/pets`, { headers });
  }

  getLanguages(): Language[] {
    let lans = [];
    Object.keys(languages.default).forEach(key => {
      lans.push({
        code: key,
        name: languages.default[key].name,
        nativeName: languages.default[key].nativeName,
      });
    });
    lans = lans.sort((a, b) => a.nativeName.localeCompare(b.nativeName));
    lans.unshift(lans.splice(lans.findIndex(e => e.code === 'de'), 1)[0]);
    lans.unshift(lans.splice(lans.findIndex(e => e.code === 'en'), 1)[0]);
    lans.unshift(lans.splice(lans.findIndex(e => e.code === 'hu'), 1)[0]);
    lans.splice(lans.findIndex(e => e.nativeName === ''), 1);
    return lans;
  }

  getNationalities(): Nationality[] {
    const nats = nationalities.default.nationality.sort((a, b) => a.text.localeCompare(b.text));
    nats.unshift(nats.splice(nats.findIndex(e => e.alpha_3_code === 'HUN'), 1)[0]);
    nats.map(nat => {
      nat.en_long_name = nat.en_long_name.split(',').pop();
    });
    console.log(nats);
    return nats;
  }
}
