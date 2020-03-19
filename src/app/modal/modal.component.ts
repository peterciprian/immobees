import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalDataSet } from '../core/models/modalDataSet';
import { ModalDataShareService } from './modal-data-share.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnDestroy {

  public modalDataSet: ModalDataSet;
  public currentPage = 1;
  public title = 'TITLE';
  private subscriptions = new Array<Subscription>();

  constructor(
    public modalDataShare: ModalDataShareService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.subscriptions.push(modalDataShare.modalDataSet.subscribe(modalData => this.modalDataSet = modalData));
     }

  next() {
    if ((this.modalDataSet.modalType === 'OFFER' && this.currentPage < 5) ||
        (this.modalDataSet.modalType === 'DEMAND' && this.currentPage < 3)) {
      this.currentPage++;
    }
  }
  back() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  save() {
    console.log(this.modalDataShare.profile);
  }

  close() {
    this.dialogRef.close();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
