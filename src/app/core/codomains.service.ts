import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import * as languages from './models/languages';
import * as nationalities from './models/nationalities';
import { Nationality, Language } from './models/public';

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
    const lans = [];
    Object.keys(languages.default).forEach(key => { lans.push({
        code: key,
        name: languages.default[key].name,
        nativeName: languages.default[key].nativeName,
      });
    });
    return lans;
  }

  getNationalities(): Nationality[] {
    return nationalities.default.nationality;
  }
}
