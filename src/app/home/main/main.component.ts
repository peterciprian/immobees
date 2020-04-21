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
