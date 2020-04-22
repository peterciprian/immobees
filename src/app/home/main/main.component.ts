import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';
import { FirebaseFirestoreService } from 'src/app/core/services/firebase-firestore.service';
import { Account } from 'src/app/core/models/accounts';
import { AuthModalService } from 'src/app/auth/auth-modal/auth-modal.service';

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
      private firestore: FirebaseFirestoreService,
      public authModalService: AuthModalService,
      public auth: AuthService, ) {
      this.firestore.$accounts.subscribe(acc => {
         this.highLight = acc.shift();
         this.isLoaded = true;
      });
   }

   ngOnInit() {
      this.mobile = window.screen.width < 660 ? true : false;
   }

}
