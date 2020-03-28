import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Recommendations, Account } from '../models/accounts';
import { Subject } from '../models/accounts';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getRecommendations(): Observable<Recommendations> {
    const headers = new HttpHeaders();
    return this.http.get<Recommendations>(`${environment.baseApiUrl}me/recommendations`, { headers });
  }

  getProfile(): Observable<Account> {
    const headers = new HttpHeaders();
    return this.http.get<Account>(`${environment.baseApiUrl}me/Account`, { headers });
  }

  putProfile(body: Account): Observable<Account> {
    const headers = new HttpHeaders();
    return this.http.put<Account>(`${environment.baseApiUrl}me/Account`, body, { headers });
  }

  searchProfile(queryObject): Observable<Account> {
    const headers = new HttpHeaders();
    const params = new HttpParams();
    params.set('query', queryObject);
    return this.http.get<Account>(`${environment.baseApiUrl}me/search`, { headers });
  }

  testSearchProfile(queryObject): Observable<Account> {
    const headers = new HttpHeaders();
    const params = new HttpParams().append('query', queryObject);
    return this.http.get<Account>(`${environment.baseApiUrl}me/search`, { headers, params });
  }

  getMyProfile(): Observable<Account> {
    const headers = new HttpHeaders();
    return this.http.get<Account>(`${environment.baseApiUrl}me`, { headers });
  }

  putMyProfile(body: string): Observable<Account> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.put<Account>(`${environment.baseApiUrl}me`, body, { headers });
  }

  putSubject(body: string): Observable<Account> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.put<Account>(`${environment.baseApiUrl}me/subject`, body, { headers });
  }
}
