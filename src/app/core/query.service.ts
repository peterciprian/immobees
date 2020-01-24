import { Injectable } from '@angular/core';

export enum roomType {
  keres,
  kinal
}
export enum sex {
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
  sex: string;
  budget: { min: number, max: number, currency: string };
  nationality: string;
  age: { min: number, max: number };
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
    sex: sex.female,
    budget: { min: 0, max: 0 },
    immo: immoType.szoba
  };

  constructor() { }
}
