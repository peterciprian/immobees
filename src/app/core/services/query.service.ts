import { Injectable } from '@angular/core';
import { serviceType, gender, roomType, furnished, building, condition, Account, Accounts } from '../models/accounts';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QueryService {
  public ob = { orderBy: 'updatedAt', order: 'asc' };
  public homeSearchQueryFields = {
    room: serviceType.DEMAND,
    location: '',
    gender: gender.OTHER,
    budget: { min: 0, max: 0 },
    immo: roomType.PRIVATE
  };
  public queryFields = {
    // Firestore querying
    serviceType: serviceType.DEMAND,
    roomType: roomType.PRIVATE,
    gender: gender.OTHER,
    location: '',
    budget: { min: 0, max: 0 },
    furnished: undefined,
    // client side querying
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
    bail: undefined,
    building: undefined,
    condition: undefined,
    flatSize: { min: 0, max: 0 },
    roomSize: { min: 0, max: 0 },
    residents: 0,
    roomMates: 0,
    floor: undefined,
  };

  public $accounts = new BehaviorSubject<Account[]>([]);
  public $orderBy = new BehaviorSubject<{ orderBy: string, order: firebase.firestore.OrderByDirection }>({ orderBy: '', order: 'asc' });
  private query;
  public accounts: Account[];

  constructor(
    private afs: AngularFirestore) {
    this.getQueryResults();
    this.$accounts.subscribe(acc => {
      this.accounts = acc;
      this.filterResults(acc);
    });
  }

  getQueryResults(callback?) {
    this.search().pipe(
      map(results => this.sortResults(results, this.$orderBy.value))
    ).subscribe(res => {
      this.$accounts.next(res);
      // tslint:disable-next-line:no-unused-expression
      callback;
    });
  }

  search(): Observable<Account[]> {
    return this.afs.collection<Account>('accounts', ref => {
      let query = ref.where('actie', '==', true);
      query = ref.where('confirmed', '==', true);
      query = ref.where('subject.serviceType', '==', serviceType[this.queryFields.serviceType]);
      query = query.where('subject.roomType', '==', roomType[this.queryFields.roomType]);
      if (this.queryFields.gender !== gender.OTHER) {
        query = query.where('gender', '==', gender[this.queryFields.gender]);
      }
      if (this.queryFields.budget.min !== 0 && this.queryFields.budget.max > this.queryFields.age.min) {
        query = query.where('subject.price.fee', '>=', this.queryFields.budget.min)
          .where('subject.price.fee', '<=', this.queryFields.budget.max);
      }
      if (this.queryFields.location) {
        query = query.where('subject.address.city', '==', this.queryFields.location);
      }
      if (this.queryFields.serviceType === serviceType.OFFER) {
        if (this.queryFields.furnished) {
          query = query.where('subject.furnished', '==', furnished[this.queryFields.furnished]);
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

  filterResults(resutls: Account[]): Account[] {
    if (resutls.length > 0) {
      // tslint:disable-next-line:prefer-const
      if (this.queryFields.nationality) {
        resutls.filter(account => account.nationality === this.queryFields.nationality);
      }
      if (this.queryFields.erasmus) {
        resutls.filter(account => account.hasErasmus === this.queryFields.erasmus);
      }
      if (this.queryFields.languages.length > 0) {
        resutls.filter(account => this.queryFields.languages.every(lang => account.spokenLanguages.includes(lang)));
      }
      if (this.queryFields.school) {
        resutls.filter(account => account.school === this.queryFields.school);
      }
      if (this.queryFields.profession) {
        resutls.filter(account => account.profession.match(`/${this.queryFields.profession}/`));
      }
      if (this.queryFields.children) {
        resutls.filter(account => account.children === this.queryFields.children);
      }
      if (this.queryFields.pets) {
        resutls.filter(account => account.pets === this.queryFields.pets);
      }
      if (this.queryFields.smoking) {
        resutls.filter(account => account.smoking === this.queryFields.smoking);
      }
      if (this.queryFields.leaveOnWeekends) {
        resutls.filter(account => account.leaveOnWeekends === this.queryFields.leaveOnWeekends);
      }
      if (this.queryFields.personality) {
        resutls.filter(account => account.personality === this.queryFields.personality);
      }
      if (this.queryFields.building) {
        resutls.filter(account => account.subject.building === building[this.queryFields.building]);
      }
      if (this.queryFields.condition) {
        resutls.filter(account => account.subject.condition === condition[this.queryFields.condition]);
      }
      if (this.queryFields.floor) {
        resutls.filter(account => account.subject.floors === this.queryFields.floor);
      }
      if (this.queryFields.age.min !== 0 && this.queryFields.age.max > this.queryFields.age.min) {
        resutls.filter(account =>
          account.birthday >= this.toBirthday(this.queryFields.age.min) &&
          account.birthday <= this.toBirthday(this.queryFields.age.max));
      }
      if (this.queryFields.flatSize.min !== 0 && this.queryFields.flatSize.max > this.queryFields.flatSize.min) {
        resutls.filter(account =>
          account.subject.floorArea >= this.queryFields.flatSize.min &&
          account.subject.floorArea <= this.queryFields.flatSize.max);
      }
      if (this.queryFields.roomSize.min !== 0 && this.queryFields.roomSize.max > this.queryFields.roomSize.min) {
        resutls.filter(account =>
          account.subject.roomArea >= this.queryFields.roomSize.min &&
          account.subject.roomArea <= this.queryFields.roomSize.max);
      }
      if (this.queryFields.residents !== 0) {
        resutls.filter(account => account.subject.residents <= this.queryFields.residents);

      }
      if (this.queryFields.roomMates !== 0) {
        resutls.filter(account => account.subject.roomMates <= this.queryFields.roomMates);
      }
    } else { console.log('no results'); }
    return resutls;
  }

  sortResults(results: Account[], orderBy) {
    const prop = orderBy.orderBy;
    if (orderBy.order === 'desc') {
      return results.sort((a, b) => {
        return b[prop] > a[prop] ? 1 : -1;
      });
    } else {
      return results.sort((a, b) => {
        return a[prop] > b[prop] ? 1 : -1;
      });
    }
  }

  sortChanged(event) {
    this.$orderBy.next({ orderBy: event.value.split('_')[0], order: event.value.split('_')[1] });
    this.$accounts.next(this.sortResults(this.$accounts.value, this.$orderBy.value));
  }
}
