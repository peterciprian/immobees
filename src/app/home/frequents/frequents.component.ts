import { Component, OnInit } from '@angular/core';
import { CodomainsService } from 'src/app/core/codomains.service';

@Component({
  selector: 'app-frequents',
  templateUrl: './frequents.component.html',
  styleUrls: ['./frequents.component.scss']
})
export class FrequentsComponent implements OnInit {

  public languages: any;
  public nationalities: any;

  constructor(private codomain: CodomainsService) { }

  ngOnInit() {
  this.languages = JSON.stringify(this.codomain.getLanguages());
  this.nationalities = JSON.stringify(this.codomain.getNationalities());
  }

}
