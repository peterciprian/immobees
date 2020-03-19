import { Injectable } from '@angular/core';
import { ModalDataSet } from '../core/models/modalDataSet';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../core/models/profile';

@Injectable({
  providedIn: 'root'
})
export class ModalDataShareService {

public modalDataSet = new BehaviorSubject<ModalDataSet>({stepperItems: 3, modalType: 'DEMAND'});
public profile = {} as Profile;

constructor() { }
}
