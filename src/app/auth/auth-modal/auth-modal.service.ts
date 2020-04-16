import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { AuthModalComponent } from './auth-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AuthModalService {

  constructor(public dialog: MatDialog) {
  }

  openDialog(data) {
    this.closeDialog();
    const dialogRef = this.dialog.open(
      AuthModalComponent, {
      data,
      panelClass: 'custom-modal-panel',
      backdropClass: 'custom-modal-backdrop'
    });
    dialogRef.afterClosed().subscribe();
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}
