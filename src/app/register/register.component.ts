import { Component, OnInit } from '@angular/core';
import { ModalDataShareService } from '../modal/modal-data-share.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private modalDataService: ModalDataShareService) { }

  ngOnInit() {
    this.modalDataService.title.next('teljes regisztráció');
  }
  changeToOffer() {
    this.modalDataService.modalDataSet.next({stepperItems: 5, modalType: 'OFFER'});
    console.log('changed to offer');
  }
  changeToDemand() {
    this.modalDataService.modalDataSet.next({stepperItems: 3, modalType: 'DEMAND'});
    console.log('changed to demand');
  }
}
