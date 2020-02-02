import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Accounts } from './models/accounts';
import { Frequents, Statistics } from './models/public';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Accounts> {
    const headers = new HttpHeaders();
    return this.http.get<Accounts>(`${environment.baseApiUrl}/public/accounts`, { headers });
  }

  getFrequents(): Observable<Frequents> {
    const headers = new HttpHeaders();
    return this.http.get<Frequents>(`${environment.baseApiUrl}/public/search`, { headers });
  }

  getStatistics(): Observable<Statistics> {
    const headers = new HttpHeaders();
    return this.http.get<Statistics>(`${environment.baseApiUrl}/public/statistics`, { headers });
  }

}
