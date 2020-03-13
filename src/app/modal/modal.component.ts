import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageChangedEvent } from 'ngx-bootstrap';
import { ModalDataSet } from '../core/models/modalDataSet';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

@Input() modalDataSet: ModalDataSet = {stepperItems: 5, modalType: 'OFFER'};
  public currentPage = 1;
  public contentArray = new Array(90).fill('');
  public returnedArray: string[];
  public stepperItems = 5;
  public modalType = 'OFFER';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }
}
