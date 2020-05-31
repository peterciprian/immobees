import { Injectable } from '@angular/core';
import { serviceType, gender, roomType, school, furnished, building, condition } from '../models/accounts';
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
      if (this.queryFields.budget.min !== 0 && this.queryFields.budget.max > this.queryFields.age.min) {
        query = query.where('subject.price.fee', '>=', this.queryFields.budget.min)
          .where('subject.price.fee', '<=', this.queryFields.budget.max);
      }
      if (this.queryFields.age.min !== 0 && this.queryFields.age.max > this.queryFields.age.min) {
        query = query.where('birthday', '>=', this.toBirthday(this.queryFields.age.min))
          .where('birthday', '<=', this.toBirthday(this.queryFields.age.max));
      }
      if (this.queryFields.location) {
        query = query.where('subject.address.city', '==', this.queryFields.location);
      }
      if (this.queryFields.erasmus) {
        query = query.where('hasErasmus', '==', this.queryFields.erasmus);
      }
      if (this.queryFields.languages) {
        query = query.where('spokenLanguages', '==', this.queryFields.languages);
      }
      if (this.queryFields.school) {
        query = query.where('school', '==', this.queryFields.school);
      }
      if (this.queryFields.profession) {
        query = query.where('profession', '==', this.queryFields.profession);
      }
      if (this.queryFields.children) {
        query = query.where('children', '==', this.queryFields.children);
      }
      if (this.queryFields.pets) {
        query = query.where('pets', '==', this.queryFields.pets);
      }
      if (this.queryFields.smoking) {
        query = query.where('smoking', '==', this.queryFields.smoking);
      }
      if (this.queryFields.leaveOnWeekends) {
        query = query.where('leaveOnWeekends', '==', this.queryFields.leaveOnWeekends);
      }
      if (this.queryFields.personality) {
        query = query.where('personality', '==', this.queryFields.personality);
      }
      if (this.queryFields.serviceType === serviceType.OFFER) {
        if (this.queryFields.furnished) {
          query = query.where('subject.furnished', '==', furnished[this.queryFields.furnished]);
        }
        if (this.queryFields.building) {
          query = query.where('subject.building', '==', building[this.queryFields.building]);
        }
        if (this.queryFields.condition) {
          query = query.where('subject.condition', '==', condition[this.queryFields.condition]);
        }
        if (this.queryFields.flatSize.min !== 0 && this.queryFields.flatSize.max > this.queryFields.flatSize.min) {
          query = query.where('subject.flatArea', '>=', this.queryFields.flatSize.min)
            .where('subject.flatArea', '<=', this.queryFields.flatSize.max);
        }
        if (this.queryFields.roomSize.min !== 0 && this.queryFields.roomSize.max > this.queryFields.roomSize.min) {
          query = query.where('subject.roomArea', '>=', this.queryFields.roomSize.min)
            .where('subject.roomArea', '<=', this.queryFields.roomSize.max);
        }
        if (this.queryFields.residents !== 0) {
          query = query.where('subject.residents', '<=', this.queryFields.residents);
        }
        if (this.queryFields.roomMates !== 0) {
          query = query.where('subject.roomMates', '<=', this.queryFields.roomMates);
        }
        if (this.queryFields.floor) {
          query = query.where('subject.floor', '==', this.queryFields.floor);
        }
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
