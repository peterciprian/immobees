import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(
      ModalComponent, {
      data: { name: 'austin' },
      panelClass: 'custom-modal-panel',
      backdropClass: 'custom-modal-backdrop'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

