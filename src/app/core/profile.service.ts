import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Recommendations, Profile } from './models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getRecommendations(): Observable<Recommendations> {
    const headers = new HttpHeaders();
    return this.http.get<Recommendations>(`${environment.baseApiUrl}/me/recommendations`, { headers });
  }

  getProfile(): Observable<Profile> {
    const headers = new HttpHeaders();
    return this.http.get<Profile>(`${environment.baseApiUrl}/me/profile`, { headers });
  }

  putProfile(body: Profile): Observable<Profile> {
    const headers = new HttpHeaders();
    return this.http.put<Profile>(`${environment.baseApiUrl}/me/profile`, body, { headers });
  }

}
