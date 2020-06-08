import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/core/services/query.service';
import { FormControl } from '@angular/forms';
import { CodomainsService } from 'src/app/core/services/codomains.service';
import { Language, Nationality } from 'src/app/core/models/public';
import { school, furnished, building, condition } from 'src/app/core/models/accounts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {

  public languages: Language[];
  public nationalities: Nationality[];
  public schools: string[];
  public furnished: string[];
  public flatTypes: string[];
  public flatConditions: string[];
  public professions: Observable<string[]>;
  public pets: Observable<string[]>;

  constructor(public queryService: QueryService, private codomain: CodomainsService) { }

  ngOnInit() {
    this.languages = this.codomain.getLanguages();
    this.nationalities = this.codomain.getNationalities();
    this.schools = Object.keys(school).filter(key => !isNaN(Number(school[key])));
    this.furnished = Object.keys(furnished).filter(key => !isNaN(Number(furnished[key])));
    this.flatTypes = Object.keys(building).filter(key => !isNaN(Number(building[key])));
    this.flatConditions = Object.keys(condition).filter(key => !isNaN(Number(condition[key])));
    this.pets = this.codomain.getPets().pipe(map(p => p.sort()));
    this.professions = this.codomain.getProfessions().pipe(map(p => p.sort()));
  }
  switchServiceType() {
    if (this.queryService.queryFields.serviceType === 0) {
      this.queryService.queryFields.serviceType = 1;
    } else {
      this.queryService.queryFields.serviceType = 0;
      this.queryService.queryFields.furnished = undefined;
      this.queryService.queryFields.building = undefined;
      this.queryService.queryFields.condition = undefined;
      this.queryService.queryFields.flatSize.min = 0;
      this.queryService.queryFields.flatSize.max = 0;
      this.queryService.queryFields.roomSize.min = 0;
      this.queryService.queryFields.roomSize.max = 0;
      this.queryService.queryFields.residents = 0;
      this.queryService.queryFields.roomMates = 0;
      this.queryService.queryFields.floor = undefined;
    }
  }

  switchRoomType() {
    this.queryService.queryFields.roomType =
      this.queryService.queryFields.roomType === 0 ? 1 : 0;
  }

  changeGender(param: number) {
    this.queryService.queryFields.gender = param;
  }

  filter() {
    this.queryService.search().subscribe(result => this.queryService.$accounts.next(result));
  }
}
