import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Language, Nationality } from 'src/app/core/models/public';
import { Observable } from 'rxjs';
import { ModalDataShareService } from 'src/app/modal/modal-data-share.service';
import { CodomainsService } from 'src/app/core/services/codomains.service';
import { school } from 'src/app/core/models/accounts';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-offer-personal',
  templateUrl: './offer-personal.component.html',
  styleUrls: ['./offer-personal.component.scss']
})
export class OfferPersonalComponent implements OnInit {

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
    private codomain: CodomainsService
  ) { }

  ngOnInit() {
    this.modalDataShare.title.next('Szobát kínálok');
    this.languages = this.codomain.getLanguages();
    this.nationalities = this.codomain.getNationalities();
    this.schools = Object.keys(school).filter(key => !isNaN(Number(school[key])));
    this.pets = this.codomain.getPets().pipe(map(p => p.sort()));
    this.professions = this.codomain.getProfessions().pipe(map(p => p.sort()));
  }

}
