import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Recommendations, Profile } from './models/profile';
import { Subject } from './models/accounts';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getRecommendations(): Observable<Recommendations> {
    const headers = new HttpHeaders();
    return this.http.get<Recommendations>(`${environment.baseApiUrl}me/recommendations`, { headers });
  }

  getProfile(): Observable<Profile> {
    const headers = new HttpHeaders();
    return this.http.get<Profile>(`${environment.baseApiUrl}me/profile`, { headers });
  }

  putProfile(body: Profile): Observable<Profile> {
    const headers = new HttpHeaders();
    return this.http.put<Profile>(`${environment.baseApiUrl}me/profile`, body, { headers });
  }

  searchProfile(queryObject): Observable<Profile> {
    const headers = new HttpHeaders();
    const params = new HttpParams();
    params.set('query', queryObject);
    return this.http.get<Profile>(`${environment.baseApiUrl}me/search`, { headers });
  }

  testSearchProfile(queryObject): Observable<Profile> {
    const headers = new HttpHeaders();
    const params = new HttpParams().append('query', queryObject);
    return this.http.get<Profile>(`${environment.baseApiUrl}me/search`, { headers, params });
  }

  getMyProfile(): Observable<Profile> {
    const headers = new HttpHeaders();
    return this.http.get<Profile>(`${environment.baseApiUrl}me`, { headers });
  }

  putMyProfile(body: Profile): Observable<Profile> {
    const headers = new HttpHeaders();
    return this.http.put<Profile>(`${environment.baseApiUrl}me`, body, { headers });
  }

  putSubject(body: Subject): Observable<Profile> {
    const headers = new HttpHeaders();
    return this.http.put<Profile>(`${environment.baseApiUrl}me/subject`, body, { headers });
  }
}
