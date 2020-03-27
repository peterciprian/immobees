import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../core/profile.service';
import { Account } from '../core/models/accounts';
import { ModalService } from '../modal/modal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  public myProfile: Account;
  public recommendations: Account[];
  constructor(
    private http: HttpClient,
    public profileService: ProfileService,
    private location: Location,
    public modalService: ModalService
  ) {
    http.get<Account[]>('assets/accounts.JSON').subscribe(acc => {
      console.log(acc);
      this.recommendations = acc;
      this.myProfile = acc[3];
    });
    /* profileService.getMyProfile().subscribe(me => {
      console.log(me);
      this.myProfile = me;
    }); */
   }

   return() {
     this.location.back();
   }

}
