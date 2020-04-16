import { Component, OnDestroy, Inject } from '@angular/core';
import { AuthModalService } from './auth-modal.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

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

}
