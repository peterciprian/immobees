import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/core/services/firebase-auth.service';
import { AuthModalService } from '../auth-modal/auth-modal.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public authService: FirebaseAuthService, public authModalService: AuthModalService) { }

  ngOnInit() {
  }

}
