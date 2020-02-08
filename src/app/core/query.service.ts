import { Injectable } from '@angular/core';
import { serviceType, gender, roomType } from './models/accounts';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  public homeSearchQueryFields = {
    room: serviceType.DEMAND,
    location: [],
    gender: gender.FEMALE,
    budget: { min: 0, max: 0 },
    immo: roomType.PRIVATE,
    flatSize: { min: 0, max: 0 },
    roomSize: { min: 0, max: 0 }
  };

  constructor() { }
}
