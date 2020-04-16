import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/core/services/firebase-auth.service';
import { AuthModalService } from '../auth-modal/auth-modal.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public authService: FirebaseAuthService, public authModalService: AuthModalService) { }

  ngOnInit() {
  }

}
