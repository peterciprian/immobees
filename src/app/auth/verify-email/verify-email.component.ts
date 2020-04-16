import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/core/services/firebase-auth.service';
import { AuthModalService } from '../auth-modal/auth-modal.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public authService: FirebaseAuthService, public authModalService: AuthModalService) { }

  ngOnInit() {
  }

}
