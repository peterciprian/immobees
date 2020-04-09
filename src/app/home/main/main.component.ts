import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from 'src/app/core/services/profile.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public isLoaded = false;
  public mobile: boolean;
  public highLight: Account;
  /*private profile = `{
    "name": "Balint Csak",
    "birthday":"1992-03-31T10:13:09.307Z",
    "hasErasmus":true,
    "gender": "male",
    "spokenLanguages":[
       "english",
       "france"
    ],
    "school":"BGE",
    "pets":[
       {
          "species":"Cat",
          "amount":1
       }
    ],
    "smoking":true,
    "personality":"introvert"
 }`;
  private subject = `{
  "serviceType":"offer",
  "roomType":"private",
  "address":{
     "city":"Budapest",
     "postalCode":"1089",
     "district":"district",
     "county":"county",
     "country":"country",
     "street":"street",
     "number":"number",
     "googleAddress":"googleAddress"
  },
  "description":"description",
  "price":{
     "fee":40000,
     "bills":12000,
     "currency":"HUF",
     "caution":3,
     "billsIncluded":false
  },
  "floorArea":52,
  "roomArea":16,
  "innerHeight":3.7,
  "client":{
     "gender":"female",
     "nationality":"nationality",
     "qualification":"qualification",
     "hasErasmus":true,
     "spokenLanguages":[
        "hungarian"
     ],
     "moveIntoAt":"2019-03-31T09:53:02.250Z",
     "school":"BGE",
     "profession":"teacher",
     "children":1,
     "pets":[
        {
           "species":"cat",
           "amount":1
        }
     ],
     "age":{
        "min":20,
        "max":40
     },
     "smoking":false,
     "leaveOnWeekends":true,
     "personality":"personality"
  },
  "furnished":"fully",
  "building":"brick",
  "condition":"medium",
  "residents":3,
  "roomMates":1,
  "floors":"1",
  "details":{
     "lift":true,
     "washingMachine":true,
     "smokingArea":true,
     "balcony":true,
     "gym":true,
     "accessible":true,
     "petsAllowed":true,
     "television":true,
     "internet":true,
     "garage":true,
     "jakuzzi":true,
     "airConditioner":true,
     "privateBathroom":true,
     "parking":"street",
     "shortPeriod":true
  }
}`;*/
  constructor(
    private http: HttpClient,
    private profilService: ProfileService,
    public auth: AuthService, ) {
    this.http.get<Account[]>('assets/Account.JSON').subscribe(acc => {
      this.highLight = acc.shift();
      this.isLoaded = true;
    });
    this.profilService.testSearchProfile(JSON.stringify({
      skip: 1,
      limit: 2,
      orderBy: {
        hasErasmus: 'asc'
      },
      criteria: { gender: 'male' }
    })).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

  ngOnInit() {
    this.mobile = window.screen.width < 660 ? true : false;
  }

}
