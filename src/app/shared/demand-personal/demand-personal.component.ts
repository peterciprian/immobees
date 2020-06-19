import { Component, OnInit } from '@angular/core';
import { ModalDataShareService } from 'src/app/modal/modal-data-share.service';
import { FormControl } from '@angular/forms';
import { Language, Nationality } from 'src/app/core/models/public';
import { Observable } from 'rxjs';
import { CodomainsService } from 'src/app/core/services/codomains.service';
import { school } from 'src/app/core/models/accounts';
import { map } from 'rxjs/operators';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-demand-personal',
  templateUrl: './demand-personal.component.html',
  styleUrls: ['./demand-personal.component.scss']
})
export class DemandPersonalComponent implements OnInit {

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
  public professions: Observable<string[]>;
  public pets: Observable<string[]>;
  constructor(
    public modalDataShare: ModalDataShareService,
    private codomain: CodomainsService,
    public accountService: AccountService
  ) { }

  ngOnInit() {
    this.modalDataShare.title.next('Szobát keresek');
    this.languages = this.codomain.getLanguages();
    this.nationalities = this.codomain.getNationalities();
    this.schools = Object.keys(school).filter(key => !isNaN(Number(school[key])));
    this.pets = this.codomain.getPets().pipe(map(p => p.sort()));
    this.professions = this.codomain.getProfessions().pipe(map(p => p.sort()));
  }

  switchRoomtype(roomtype) {
    this.accountService.account.subject.roomType = roomtype;
  }

  switchAttribute(attribute: string) {
    this.accountService.account[attribute] = !this.accountService.account[attribute];
  }
}
