import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/core/services/firebase-auth.service';
import { AuthModalService } from '../auth-modal/auth-modal.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public authService: FirebaseAuthService, public authModalService: AuthModalService) { }

  ngOnInit() {
  }

}
