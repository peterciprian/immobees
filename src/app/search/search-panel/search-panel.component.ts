import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/core/services/query.service';
import { FormControl } from '@angular/forms';
import { CodomainsService } from 'src/app/core/services/codomains.service';
import { Language, Nationality } from 'src/app/core/models/public';
import { school } from 'src/app/core/models/accounts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
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

  constructor(public queryService: QueryService, private codomain: CodomainsService) { }

  ngOnInit() {
    this.languages = this.codomain.getLanguages().sort((a, b) => a.nativeName.localeCompare(b.nativeName));
    this.languages.unshift(this.languages.splice(this.languages.findIndex(e => e.code === 'de'), 1)[0]);
    this.languages.unshift(this.languages.splice(this.languages.findIndex(e => e.code === 'en'), 1)[0]);
    this.languages.unshift(this.languages.splice(this.languages.findIndex(e => e.code === 'hu'), 1)[0]);
    this.languages.splice(this.languages.findIndex(e => e.nativeName === ''), 1);

    this.nationalities = this.codomain.getNationalities().sort((a, b) => a.text.localeCompare(b.text));
    this.nationalities.unshift(this.nationalities.splice(this.nationalities.findIndex(e => e.alpha_3_code === 'HUN'), 1)[0]);

    this.schools = Object.keys(school).filter(key => !isNaN(Number(school[key])));
    this.pets = this.codomain.getPets().pipe(map(p => p.sort()));
    this.professions = this.codomain.getProfessions().pipe(map(p => p.sort()));
  }
  switchRoomType() {
    this.queryService.homeSearchQueryFields.room =
      this.queryService.homeSearchQueryFields.room === 0 ? 1 : 0;
  }

  switchImmoType() {
    this.queryService.homeSearchQueryFields.immo =
      this.queryService.homeSearchQueryFields.immo === 0 ? 1 : 0;
  }

  changeGender(param: number) {
    this.queryService.homeSearchQueryFields.gender = param;
  }

}
