import { Injectable } from '@angular/core';
import { serviceType, gender, roomType, school, furnished } from '../models/accounts';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  public homeSearchQueryFields = {
    room: serviceType.DEMAND,
    location: '',
    gender: gender.OTHER,
    budget: { min: 0, max: 0 },
    immo: roomType.PRIVATE,
    flatSize: { min: 0, max: 0 },
    roomSize: { min: 0, max: 0 }
  };
  public queryFields = {
    serviceType: serviceType.DEMAND,
    roomType: roomType.PRIVATE,
    gender: gender.OTHER,
    location: '',
    age: { min: 0, max: 0 },
    erasmus: undefined,
    languages: [],
    school: '',
    profession: '',
    nationality: '',
    children: undefined,
    pets: undefined,
    smoking: undefined,
    leaveOnWeekends: undefined,
    personality: '',
    budget: { min: 0, max: 0 },
    bail: undefined,
    furnished: undefined,
    building: undefined,
    condition: undefined,
    flatSize: { min: 0, max: 0 },
    roomSize: { min: 0, max: 0 },
    residents: undefined,
    roomMates: undefined,
    floor: undefined,
  };

  public $accounts = new BehaviorSubject<Account[]>([]);

  constructor(
    private afs: AngularFirestore) {
    this.getQueryResults();
    this.$accounts.subscribe(acc => console.log(acc));
  }

  getQueryResults(callback?) {
    this.homeSearch().subscribe(res => {
      this.$accounts.next(res);
      console.log(res);
      // tslint:disable-next-line:no-unused-expression
      callback;
    });
  }

  homeSearch(): Observable<Account[]> {
    return this.afs.collection<Account>('accounts', ref => {
      let query = ref.where('subject.serviceType', '==', serviceType[this.homeSearchQueryFields.room]);
      if (this.homeSearchQueryFields.gender !== gender.OTHER) {
        query = query.where('gender', '==', gender[this.homeSearchQueryFields.gender]);
      }
      if (this.homeSearchQueryFields.location !== '') {
        query = query.where('subject.address.city', '==', this.homeSearchQueryFields.location);
      }
      if (this.homeSearchQueryFields.budget.min !== 0 && this.homeSearchQueryFields.budget.max !== 0) {
        query = query.where('subject.price.fee', '>=', this.homeSearchQueryFields.budget.min)
          .where('subject.price.fee', '<=', this.homeSearchQueryFields.budget.max);
      }
      console.log(query);
      return query;
    }).valueChanges();
  }
  search(): Observable<Account[]> {
    return this.afs.collection<Account>('accounts', ref => {
      let query = ref.where('subject.serviceType', '==', serviceType[this.queryFields.serviceType]);
      query = query.where('subject.roomType', '==', roomType[this.queryFields.roomType]);
      query = query.where('gender', '==', gender[this.queryFields.gender]);
      if (this.queryFields.nationality) {
        query = query.where('nationality', '==', this.queryFields.nationality);
      }
      if (this.queryFields.budget.min !== 0 && this.queryFields.budget.max !== 0) {
        query = query.where('subject.price.fee', '>=', this.queryFields.budget.min)
          .where('subject.price.fee', '<=', this.queryFields.budget.max);
      }
      if (this.queryFields.age.min !== 0 && this.queryFields.age.max !== 0) {
        query = query.where('birthday', '>=', this.toBirthday(this.queryFields.age.min))
          .where('birthday', '<=', this.toBirthday(this.queryFields.age.max));
      }
      if (this.queryFields.location) {
        query = query.where('subject.address.city', '==', this.queryFields.location);
      }
      if (this.queryFields.nationality) {
        query = query.where('nationality', '==', this.queryFields.nationality);
      }
      if (this.queryFields.nationality) {
        query = query.where('nationality', '==', this.queryFields.nationality);
      }
      if (this.queryFields.nationality) {
        query = query.where('nationality', '==', this.queryFields.nationality);
      }
      if (this.queryFields.nationality) {
        query = query.where('nationality', '==', this.queryFields.nationality);
      }
      if (this.queryFields.nationality) {
        query = query.where('nationality', '==', this.queryFields.nationality);
      }
      if (this.queryFields.nationality) {
        query = query.where('nationality', '==', this.queryFields.nationality);
      }
      if (this.queryFields.nationality) {
        query = query.where('nationality', '==', this.queryFields.nationality);
      }
      if (this.queryFields.nationality) {
        query = query.where('nationality', '==', this.queryFields.nationality);
      }
      if (this.queryFields.nationality) {
        query = query.where('nationality', '==', this.queryFields.nationality);
      }
      return query;
    }).valueChanges();
  }
  toBirthday(age: number): Date {
    const today = Date.now();
    const now = new Date();
    const birthday = new Date().setFullYear(now.getFullYear() - age);
    return new Date(birthday);
  }
}
