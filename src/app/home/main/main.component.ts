import { Component, OnInit } from '@angular/core';
import { FirebaseFirestoreService } from 'src/app/core/services/firebase-firestore.service';
import { Account } from 'src/app/core/models/accounts';
import { AuthModalService } from 'src/app/auth/auth-modal/auth-modal.service';
import { ModalService } from 'src/app/modal/modal.service';
import { FirebaseAuthService } from 'src/app/core/services/firebase-auth.service';

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
      public authService: FirebaseAuthService,
      private firestore: FirebaseFirestoreService,
      private authModalService: AuthModalService,
      private modalService: ModalService) {
      this.firestore.$accounts.subscribe(acc => {
         this.highLight = acc.shift();
         this.isLoaded = true;
      });
   }

   ngOnInit() {
      this.mobile = window.screen.width < 660 ? true : false;
   }

   register() {
      if (!this.authService.isLoggedIn) {
         this.authModalService.openDialog('signUp');
      } else {
         this.modalService.openDialog('data');
      }
   }
}
