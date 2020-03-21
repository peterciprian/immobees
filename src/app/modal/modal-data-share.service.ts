import { Injectable } from '@angular/core';
import { ModalDataSet } from '../core/models/modalDataSet';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../core/models/profile';

@Injectable({
  providedIn: 'root'
})
export class ModalDataShareService {

  public title = new BehaviorSubject<string>('teljes regisztráció');
public modalDataSet = new BehaviorSubject<ModalDataSet>({stepperItems: 0, modalType: 'REGISTER'});
public profile = {} as Profile;

constructor() { }
}
