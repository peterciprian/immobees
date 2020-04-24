import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalDataSet } from '../core/models/modalDataSet';
import { ModalDataShareService } from './modal-data-share.service';
import { Subscription } from 'rxjs';
import { AccountService } from '../core/services/account.service';
import { FirebaseFirestoreService } from '../core/services/firebase-firestore.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnDestroy {

  public modalDataSet: ModalDataSet;
  public currentPage = 1;
  public title: string;
  private subscriptions = new Array<Subscription>();

  constructor(
    public modalDataShare: ModalDataShareService,
    public accountService: AccountService,
    public fireDB: FirebaseFirestoreService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.subscriptions.push(
      modalDataShare.modalDataSet.subscribe(modalData => {
        this.modalDataSet = modalData;
        this.accountService.account.subject.serviceType = modalData.modalType;
      }),
      modalDataShare.title.subscribe(title => this.title = title)
    );
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
    } else if (this.currentPage === 1) {
      this.modalDataShare.modalDataSet.next({ stepperItems: 0, modalType: 'REGISTER' });
    }
  }
  save() {
    this.fireDB.addAccount(this.accountService.account);
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
