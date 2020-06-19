import { Component, OnDestroy, Inject } from '@angular/core';
import { AuthModalService } from './auth-modal.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { setWeek } from 'ngx-bootstrap/chronos/units/week';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent {

  public authModalContenType = new BehaviorSubject<string>('signIn');
  constructor(
    public dialogRef: MatDialogRef<AuthModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
    this.authModalContenType.next(data);
  }

  close() {
    this.dialogRef.close();
  }
  setTitle(): string {
    switch (this.data) {
      case 'signUp': return 'SIGNUP';
      case 'signIn': return 'LOGIN';
      case 'verifyEmail': return 'VERIFYEMAIL';
      case 'forgotPassword': return 'FORGOTPASSWORD';
      default: return 'SIGNUP';
    }
  }
}
