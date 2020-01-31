import { Injectable } from '@angular/core';

export enum roomType {
  keres,
  kinal
}
export enum gender {
  female,
  male,
  dnm
}
export enum immoType {
  szoba,
  szobatars
}

export class QueryParams {
  immotype: string;
  room: string;
  location: string;
  gender: string;
  budget: { min: number; max: number; currency: string };
  nationality: string;
  age: { min: number; max: number };
  languages: string[];
  school: string;
  profession: string;
  children: boolean;
  pets: string[];
  smoking: boolean;
  travelsHome: boolean;
  personality: string[];
}

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  public homeSearchQueryFields = {
    room: roomType.keres,
    location: [],
    gender: gender.female,
    budget: { min: 0, max: 0 },
    immo: immoType.szoba,
    flatSize: { min: 0, max: 0 },
    roomSize: { min: 0, max: 0 }
  };

  constructor() {}
}
