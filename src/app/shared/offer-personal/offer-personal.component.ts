import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Language, Nationality } from 'src/app/core/models/public';
import { Observable } from 'rxjs';
import { ModalDataShareService } from 'src/app/modal/modal-data-share.service';
import { CodomainsService } from 'src/app/core/services/codomains.service';
import { school } from 'src/app/core/models/accounts';
import { map } from 'rxjs/operators';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-offer-personal',
  templateUrl: './offer-personal.component.html',
  styleUrls: ['./offer-personal.component.scss']
})
export class OfferPersonalComponent implements OnInit {

  public languages: Language[];
  public nationalities: Nationality[];
  public schools: string[];
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
    this.pets = this.codomain.getPets().pipe(map(p => p.sort()));
    this.professions = this.codomain.getProfessions().pipe(map(p => p.sort()));
  }

  switchAttribute(attribute: string) {
    this.accountService.account[attribute] = !this.accountService.account[attribute];
  }
}
