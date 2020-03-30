import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Language, Nationality } from 'src/app/core/models/public';
import { Observable } from 'rxjs';
import { ModalDataShareService } from 'src/app/modal/modal-data-share.service';
import { CodomainsService } from 'src/app/core/services/codomains.service';
import { school, building, condition, furnished } from 'src/app/core/models/accounts';
import { map } from 'rxjs/operators';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-offer-room',
  templateUrl: './offer-room.component.html',
  styleUrls: ['./offer-room.component.scss']
})
export class OfferRoomComponent implements OnInit {

  public selected = 'single';
  value: string; // helyszín
  toppings = new FormControl();
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato'
  ];
  public languages: Language[];
  public nationalities: Nationality[];
  public schools: string[];
  public buildingType: string[];
  public buildingCondition: string[];
  public furnished: string[];
  public professions: Observable<string[]>;
  public pets: Observable<string[]>;
  constructor(
    public modalDataShare: ModalDataShareService,
    public accountService: AccountService,
    private codomain: CodomainsService
  ) { }

  ngOnInit() {
    this.modalDataShare.title.next('Szobát kínálok');
    this.languages = this.codomain.getLanguages();
    this.nationalities = this.codomain.getNationalities();
    this.schools = Object.keys(school).filter(key => !isNaN(Number(school[key])));
    this.buildingType = Object.keys(building).filter(key => !isNaN(Number(building[key])));
    this.buildingCondition = Object.keys(condition).filter(key => !isNaN(Number(condition[key])));
    this.furnished = Object.keys(furnished).filter(key => !isNaN(Number(furnished[key])));

    this.pets = this.codomain.getPets().pipe(map(p => p.sort()));
    this.professions = this.codomain.getProfessions().pipe(map(p => p.sort()));
  }

  switchRoomtype(roomtype) {
    this.accountService.account.subject.roomType = roomtype;
  }
}
